"use client";

import Link from "next/link";
import { navigationItems } from "@/lib/constants";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 p-6 flex flex-col gap-8 h-full bg-white border-r border-r-gray-200">
            <h2 className="text-xl font-semibold">PulseBoard</h2>
            <nav className="flex flex-col gap-2">
                {navigationItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            href={item.href}
                            key={item.href}
                            className={`rounded-md px-3 py-2 text-sm font-medium ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}
