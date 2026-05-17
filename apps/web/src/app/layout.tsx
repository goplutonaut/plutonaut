import { Header } from '@plutonaut/web/src/components/header';
import { MainContainer } from '@plutonaut/web/src/components/main-container';
import Providers from '@plutonaut/web/src/components/providers';
import { cn } from '@plutonaut/web/src/lib/utils';
import { Geist } from 'next/font/google';
import './global.css';

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
        <Header />
        <Providers>
          <MainContainer className="mt-8">{children}</MainContainer>
        </Providers>
      </body>
    </html>
  );
}
