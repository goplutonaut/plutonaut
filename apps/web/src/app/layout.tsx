import './global.css';
import { Navbar } from '../components/navbar';

export const metadata = {
  title: 'Plutonaut',
  description: 'Plutonaut',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen text-slate-900">
        <Navbar />
        <main className="container mx-auto mt-8 px-4">{children}</main>
      </body>
    </html>
  );
}
