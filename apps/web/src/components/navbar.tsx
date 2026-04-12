import Link from 'next/link';
import { MainContainer } from './main-container';

export const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <MainContainer className="p-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Plutonaut
        </div>
        <div className="space-x-8">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link
            href="/accounts"
            className="hover:text-blue-400 transition-colors"
          >
            accounts
          </Link>
        </div>
      </MainContainer>
    </nav>
  );
};
