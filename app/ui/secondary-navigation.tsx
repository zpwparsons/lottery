'use client';

import { usePathname } from 'next/navigation';
import Link from "next/link";

interface Link {
    name: string;
    href: string;
}

export default function SecondaryNavigation({
    links,
}: {
    links: Link[];
}) {
    const pathname = usePathname();

    return (
        <div className="w-full bg-white border-b border-slate-900 overflow-x-auto">
            <nav className="md:flex justify-center">
                <ul className="flex space-x-10 py-1.5 px-4">
                    {links.map((link) => {
                        return (
                            <li
                                key={link.name}
                                className={`font-bold px-2 py-3 hover:text-blue-500 text-nowrap ${pathname === link.href ? 'text-blue-500' : 'text-slate-900'}`}
                            >
                                <Link href={link.href}>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}
