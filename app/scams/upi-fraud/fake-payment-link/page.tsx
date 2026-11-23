import { redirect } from 'next/navigation'

export default function LegacyFakePaymentLinkPage() {
  redirect('/scams/upi-fraud/fake-upi-link')
}
