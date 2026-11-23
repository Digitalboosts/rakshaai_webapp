import { redirect } from 'next/navigation'

export default function LegacyFakeScreenshotScamPage() {
  redirect('/scams/upi-fraud/fake-payment-screenshot')
}
