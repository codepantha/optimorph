'use client';

import { navLinks } from '@/constants';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '../ui/button';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/logo.png" alt="logo" height={100} width={100} />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <div className="flex flex-col justify-between gap-10">
              <ul className="sidebar-nav_elements">
                {navLinks.slice(0, 6).map((link) => {
                  const isActive: boolean = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group cursor-pointer ${
                        isActive ? 'button-gradient text-white' : 'text-gray-700'
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="icon"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <ul className="sidebar-nav_elements">
                {navLinks.slice(6).map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`sidebar-nav_element group cursor-pointer ${
                        isActive ? 'button-gradient text-white' : 'text-gray-700'
                      }`}
                    >
                      <Link className="sidebar-link" href={link.route}>
                        <Image
                          src={link.icon}
                          alt="icon"
                          width={24}
                          height={24}
                          className={`${isActive && 'brightness-200'}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="flex-center cursor-pointer gap-2 p-4">
                  <UserButton afterSignOutUrl="/" showName />
                </li>
              </ul>
            </div>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button button-gradient">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
