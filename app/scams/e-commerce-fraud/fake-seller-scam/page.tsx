import { redirect } from 'next/navigation'

export default function FakeSellerScamRedirect() {
  redirect('/scams/e-commerce-fraud/fake-marketplace-seller')
}
