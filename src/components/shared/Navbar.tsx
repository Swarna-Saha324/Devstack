"use client";
import { useState } from 'react';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";
import Button from './Button';

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    window.location.reload();
  };

  return (
    
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#FFEBE8] to-[#D7F7E1] shadow-sm border-b border-white/50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="text-2xl font-black text-indigo-700 tracking-tight">
          DevStack<span className="text-slate-800">Hub</span>
        </Link>

        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white/90 md:bg-transparent p-4 md:p-0 gap-4 md:gap-6 items-center`}>
          
         
          <li><Link href="/" className="text-slate-800 hover:text-indigo-700 font-semibold">Home</Link></li>
          <li><Link href="/about" className="text-slate-800 hover:text-indigo-700 font-semibold">About</Link></li>
          <li><Link href="/contact" className="text-slate-800 hover:text-indigo-700 font-semibold">Contact</Link></li>

          {session ? (
            <>
              {/* লগইন করা সবার জন্য */}
              <li><Link href="/explore" className="text-slate-800 hover:text-indigo-700 font-semibold">Explore</Link></li>
              <li><Link href="/items/add" className="text-slate-800 hover:text-indigo-700 font-semibold">Add Item</Link></li>
              
              
             {(session.user as any)?.role === "admin" && (
                <li><Link href="/items/manage" className="text-red-700 hover:text-red-900 font-bold">Manage Items</Link></li>
              )}
              
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-bold text-sm">
                  {session.user.name?.charAt(0).toUpperCase()}
                </div>
                <Button onClick={handleLogout} variant="danger">Logout</Button>
              </li>
            </>
          ) : (
            <>
              {/* লগইন না থাকলে */}
              <li><Link href="/login" className="text-indigo-700 font-semibold hover:underline">Login</Link></li>
              <li><Link href="/register"><Button variant="primary">Register</Button></Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}