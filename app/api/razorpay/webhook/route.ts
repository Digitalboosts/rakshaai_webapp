import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: NextRequest) {
  try {
    const body      = await req.text();
    const signature = req.headers.get('x-razorpay-signature') || '';
    const secret    = process.env.RAZORPAY_WEBHOOK_SECRET || '';

    // Verify webhook signature to ensure it's from Razorpay
    if (secret) {
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(body)
        .digest('hex');

      if (expectedSignature !== signature) {
        console.warn('Razorpay webhook signature mismatch');
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
      }
    }

    const event = JSON.parse(body);
    const eventType: string = event.event;

    console.log('Razorpay webhook event:', eventType);

    switch (eventType) {
      // Fires every month when payment is successfully charged
      case 'subscription.charged': {
        const payment      = event.payload?.payment?.entity;
        const subscription = event.payload?.subscription?.entity;
        const notes        = subscription?.notes || {};
        console.log(
          `✅ Auto-pay charged ₹${(payment?.amount || 0) / 100} for business: ${notes.business_name} | Sub ID: ${subscription?.id}`
        );
        // TODO: Update your DB  mark subscription as active for another month
        break;
      }

      // Fires when subscription is cancelled by customer or admin
      case 'subscription.cancelled': {
        const subscription = event.payload?.subscription?.entity;
        const notes        = subscription?.notes || {};
        console.log(
          `❌ Subscription cancelled for business: ${notes.business_name} | Sub ID: ${subscription?.id}`
        );
        // TODO: Update your DB  revoke verified badge for this business
        break;
      }

      // Fires when a payment attempt fails (e.g., card expired)
      case 'subscription.pending': {
        const subscription = event.payload?.subscription?.entity;
        const notes        = subscription?.notes || {};
        console.log(
          `⚠️ Subscription payment pending/failed for business: ${notes.business_name} | Sub ID: ${subscription?.id}`
        );
        // TODO: Send reminder email to business owner
        break;
      }

      // Fires when subscription is halted after max retry failures
      case 'subscription.halted': {
        const subscription = event.payload?.subscription?.entity;
        const notes        = subscription?.notes || {};
        console.log(
          `🚫 Subscription halted for business: ${notes.business_name} | Sub ID: ${subscription?.id}`
        );
        // TODO: Suspend verified badge, notify business
        break;
      }

      // Fires when subscription is first activated (first payment done)
      case 'subscription.activated': {
        const subscription = event.payload?.subscription?.entity;
        const notes        = subscription?.notes || {};
        console.log(
          `🎉 Subscription activated for business: ${notes.business_name} | Sub ID: ${subscription?.id}`
        );
        // TODO: Mark business as subscribed in DB
        break;
      }

      default:
        console.log('Unhandled Razorpay event:', eventType);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error('Razorpay webhook error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
