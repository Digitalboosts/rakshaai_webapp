import PDFDocument from "pdfkit";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const rawSlug = url.searchParams.get("slug") || "report";
    const slug = rawSlug.replace(/[^a-zA-Z0-9-_\.]/g, "_");

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const chunks: Uint8Array[] = [];
    doc.on("data", (chunk: Uint8Array) => chunks.push(chunk));
    const endPromise = new Promise<void>((resolve) => doc.on("end", resolve));

    doc.fontSize(18).text(`RakshaAI Report for ${slug}`, { underline: true });
    doc.moveDown();
    doc.fontSize(12).text(`Generated on: ${new Date().toLocaleString()}`);
    doc.moveDown();
    doc.fontSize(11).text(`This is a sample PDF report for ${slug}.\n\nReplace this with real report content fetched/generated on the server.`);

    doc.end();
    await endPromise;

    const pdfBuffer = Buffer.concat(chunks.map((c) => Buffer.from(c)));

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Length": String(pdfBuffer.length),
        "Content-Disposition": `attachment; filename="RakshaAI-${slug}-report.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF generation error:", err);
    return new Response("Failed to generate report", { status: 500 });
  }
}