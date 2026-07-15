// components/NavLink.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`font-semibold transition-colors ${
        isActive ? 'text-indigo-700 underline' : 'text-slate-800 hover:text-indigo-700'
      }`}
    >
      {children}
    </Link>
  );
}