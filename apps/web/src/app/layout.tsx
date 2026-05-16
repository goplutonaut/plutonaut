import { MainContainer } from '../components/main-container';
import { Navbar } from '../components/navbar';
import './global.css';
import { Geist } from 'next/font/google';
import { cn } from '@plutonaut/web/src/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-sans', geist.variable)}
    >
      <body className="min-h-screen">
        <Navbar />
        <MainContainer className="mt-8 px-4">{children}</MainContainer>
      </body>
    </html>
  );
}
