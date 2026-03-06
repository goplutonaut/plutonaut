import { MainContainer } from '../components/main-container';
import { Navbar } from '../components/navbar';
import './global.css';

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
      <body className="bg-slate-50 dark:bg-slate-800 min-h-screen text-slate-900 dark:text-slate-100">
        <Navbar />
        <MainContainer className="mt-8 px-4">{children}</MainContainer>
      </body>
    </html>
  );
}
