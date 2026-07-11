"use client";
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";
import Button from './Button';

export default function Navbar() {
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">DevStack Hub</Link>
        <ul className="flex gap-6 items-center">
          <li><Link href="/" className="text-slate-600 hover:text-indigo-600 transition">Home</Link></li>
          <li><Link href="/explore" className="text-slate-600 hover:text-indigo-600 transition">Explore</Link></li>
          {session ? (
            <>
              <li><Link href="/items/add" className="text-slate-600 hover:text-indigo-600 transition">Add Item</Link></li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700 border border-indigo-200">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
                <Button onClick={handleLogout} variant="danger">Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li><Link href="/login" className="text-indigo-600 font-semibold hover:underline">Login</Link></li>
              <li><Link href="/register"><Button variant="primary">Register</Button></Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}