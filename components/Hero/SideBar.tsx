"use client";
import Link from 'next/link';
import { FiHome, FiUsers, FiUpload, FiSettings, FiLogOut } from 'react-icons/fi';
import { FaUserCog, FaBusinessTime } from 'react-icons/fa';
import { LuCreditCard } from "react-icons/lu";

export default function Sidebar() {
    const menuItems = [
        { icon: <FiHome size={18} />, text: 'Overview', href: '/dashboard' },
        { icon: <LuCreditCard size={18} />, text: 'Payments', href: '/dashboard/payments' },
        { icon: <FaUserCog size={18} />, text: 'Debtors', href: '/dashboard/debtors' },
        { icon: <FiUpload size={18} />, text: 'Uploads', href: '/dashboard/uploads' },
        { icon: <FiUsers size={18} />, text: 'Manage Users', href: '/dashboard/users' },
        { icon: <FaBusinessTime size={18} />, text: 'Manage Business', href: '/dashboard/business' },
        { icon: <FiSettings size={18} />, text: 'Settings', href: '/dashboard/settings' },
    ];

    return (
        <aside className="h-full w-full p-5 flex flex-col bg-[#F4F4F5]">
            {/* Logo Section */}
            <div className="relative group">
                <h1 className="text-center text-lg text-[14px] bg-[#e8e8e9] py-2 rounded-md mb-3 text-[#11181c]">
                    <span className='w-3/4 truncate block mx-auto'>
                        Illinois Dermatology Institute
                    </span>
                </h1>
                <div className="absolute bg-white hidden group-hover:block top-full left-1/2 transform -translate-x-1/2 px-3 py-2 text-[#11181c] text-sm rounded-md whitespace-nowrap">
                    Illinois Dermatology Institute
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-[#f9f9f9]"></div>
                </div>
            </div>

            {/* Menu Section */}
            <nav className="flex-1">
                <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                        <SidebarItem key={index} icon={item.icon} text={item.text} href={item.href} />
                    ))}
                </ul>
            </nav>

            {/* Logout */}
            <div className="mt-auto">
                <Link
                    href="/sign-in"
                    className="flex items-center gap-2 justify-center w-full bg-[#D4D4D8] hover:bg-[#c9c9cc] text-gray-700 hover:text-gray-900 py-2 rounded-md transition"
                    onClick={() => {
                        console.log('Sign out clicked');
                    }}
                >
                    <FiLogOut size={18} />
                    <span>Sign out</span>
                </Link>
            </div>
        </aside>
    );
}

function SidebarItem({ icon, text, href }: { icon: React.ReactNode; text: string; href: string }) {
    return (
        <li>
            <Link
                href={href}
                className="flex items-center gap-3 px-3 py-2 text-sm text-[#11181c] rounded-md hover:bg-[#D4D4D8] transition-colors"
            >
                {icon}
                <span>{text}</span>
            </Link>
        </li>
    );
}