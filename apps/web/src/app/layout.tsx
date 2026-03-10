import { MainContainer } from '../components/main-container';
import { Navbar } from '../components/navbar';
import Providers from '../components/providers';
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
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-800 min-h-screen text-slate-900 dark:text-slate-100">
        <Navbar />
        <Providers>
          <MainContainer className="mt-8 px-4">{children}</MainContainer>
        </Providers>
      </body>
    </html>
  );
}
