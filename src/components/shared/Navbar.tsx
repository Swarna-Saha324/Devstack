"use client";
import { useState } from 'react';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client";
import Button from './Button';
import NavLink from '../NavLink';


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
        
        <NavLink href="/">
          DevStack<span className="text-slate-800">Hub</span>
        </NavLink>

        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-white/90 md:bg-transparent p-4 md:p-0 gap-4 md:gap-6 items-center`}>
          
         
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">About</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>

          {session ? (
            <>
              {/* লগইন করা সবার জন্য */}
              <li><NavLink href="/explore">Explore</NavLink></li>
              <li><NavLink href="/items/add">Add Item</NavLink></li>
              
              
             {(session.user as any)?.role === "admin" && (
                <li><NavLink href="/items/manage" className="text-red-700 hover:text-red-900 font-bold">Manage Items</NavLink></li>
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
              <li><NavLink href="/login" className="text-indigo-700 font-semibold hover:underline">Login</NavLink></li>
              <li><NavLink href="/register"><Button variant="primary">Register</Button></NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}