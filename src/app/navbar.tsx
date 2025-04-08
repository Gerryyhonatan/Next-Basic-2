"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <nav className="flex bg-black py-2 px-5 justify-between">
            <div className="flex">
            <h1 className="text-white font-bold">Navbar</h1>
            <ul className="flex ml-5">
                <Link href="/">
                <li className={`mr-3 ${pathname === "/" ? "text-yellow-300" : "text-white"} font-light cursor-pointer`}>Home</li>
                </Link>
                <Link href="/about">
                <li className={`mr-3 ${pathname === "/about" ? "text-yellow-300" : "text-white"} font-light cursor-pointer`}>About</li>
                </Link>
                <Link href="/about/profile">
                <li className={`mr-3 ${pathname === "/about/profile" ? "text-yellow-300" : "text-white"} font-light cursor-pointer`}>Profile</li>
                </Link>
            </ul>
            </div>
            <div>
                <button onClick={() => router.push("/login")} className="bg-white rounded-lg px-3 text-sm h-7 cursor-pointer">Login</button>
            </div>
        </nav>
    );
};