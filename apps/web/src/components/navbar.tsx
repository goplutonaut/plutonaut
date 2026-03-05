import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-slate-900 text-white shadow-lg">
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
    </nav>
  );
};
