import { Avatar } from '@radix-ui/react-avatar';
import { SearchIcon } from 'lucide-react';
import Image from 'next/image';
import logoimage from '@/public/avatar.svg';

const Topbar = () => {
    return (
        <header className="w-full h-auto px-4 py-3 sticky top-0 bg-[#F4F4F5] flex flex-wrap items-center border-b border-[#e2e2e5]">

            <div className="w-full lg:w-1/2 relative">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#11181c] w-5 h-5" />
                <input
                    type="search"
                    placeholder="Search your debtors..."
                    className="bg-[#eaeaeb] pl-12 pr-4 py-2 w-full rounded-md placeholder:text-[#11181c] placeholder:text-sm outline-none transition focus:ring-2 focus:ring-[#a8a8aa]"
                />
            </div>


            <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-end gap-6 mt-4 lg:mt-0">
                <div className="text-[#004493] text-sm whitespace-nowrap">
                    Need help? call us at{' '}
                    <span className="ml-2 font-semibold underline">316-710-8568</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <p className="text-[#3f3f46] text-[16px] font-medium">msanchez</p>
                        <p className="text-xs text-[#71717a]">Admin</p>
                    </div>
                    <Avatar className="size-12 rounded-full border-2 border-[#D4D4D8]">
                        <Image src={logoimage} className="rounded-full size-full" alt="User Avatar" />
                    </Avatar>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
