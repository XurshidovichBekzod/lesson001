"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';

const Header = () => {
    const pathname = usePathname();

    return (
        <header className="bg-[#181818]">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                <h1 className="text-2xl font-bold text-white">API</h1>
                <nav className="flex gap-6">
                    <Link href="/products"className={"text-white"}>Products</Link>
                    <Link href="/recipes"className={"text-white"}>Recipes</Link>
                    <Link href="/user" className={"text-white"}>User</Link>
                    <Link href="/comments" className={"text-white"}>Comments</Link>
                </nav>
            </div>
        </header>
    );
};

export default memo(Header);