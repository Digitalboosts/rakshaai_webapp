import { redirect } from 'next/navigation';

export default function AdminPage() {
  // Redirect to main site instead of revealing admin structure
  redirect('/');
}