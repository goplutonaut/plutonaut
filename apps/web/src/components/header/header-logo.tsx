import Link from 'next/link';

export function HeaderLogo() {
  return (
    <Link className="text-2xl font-bold text-primary" href="/">
      Plutonaut
    </Link>
  );
}
