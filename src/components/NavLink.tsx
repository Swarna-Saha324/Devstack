// components/NavLink.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string; 
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`font-semibold transition-colors ${
        isActive ? 'text-indigo-700 underline' : 'text-slate-800 hover:text-indigo-700'
      } ${className}`} 
    >
      {children}
    </Link>
  );
}