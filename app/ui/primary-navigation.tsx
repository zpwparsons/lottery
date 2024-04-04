'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import LotteryLogoColored from "@/app/ui/lottery-logo-colored";
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';

const links = [
    { name: 'UK Lotto', href: '/uk-lotto' },
    { name: 'EuroMillions', href: '/euro-millions' },
    { name: 'Thunderball', href: '/thunderball' },
    { name: 'Set For Life', href: '/set-for-life' },
];

export default function PrimaryNavigation() {
    const pathname = usePathname();

    const [menuIsOpen, setMenuOpenState] = useState(false);

    const toggleMenu = () => {
        setMenuOpenState(!menuIsOpen);
    };

    return (
        <section className="bg-white border-b border-slate-900">
            <div className="px-4 xl:px-0 max-w-7xl mx-auto py-4 flex items-center justify-between">
                <div className="min-w-0 flex-1">
                    <LotteryLogoColored />
                </div>

                <div>
                    {/* Desktop Navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-2 p-1.5">
                            {links.map((link) => {
                                return (
                                    <li
                                        key={link.name}
                                        className={`font-bold px-2 py-3 hover:text-blue-500 hover:translate-y-px ${pathname === link.href ? 'text-blue-500' : 'text-slate-900'}`}
                                    >
                                        <Link href={link.href}>
                                            { link.name }
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <button onClick={toggleMenu} type="button" className="p-1.5 block md:hidden">
                        <EllipsisHorizontalIcon className="h-10 w-10 text-slate-900" />
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuIsOpen && (
                <nav className="absolute w-full bg-white border-y border-slate-900 block md:hidden z-10">
                    <ul className="p-1.5 divide-y divide-slate-200">
                        {links.map((link) => {
                            return (
                                <li
                                    key={link.name}
                                    className={`font-bold px-2 py-3 hover:text-blue-500 ${pathname === link.href ? 'text-blue-500' : 'text-slate-900'}`}
                                >
                                    <Link href={link.href} onClick={toggleMenu}>
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            )}
        </section>
    );
}
