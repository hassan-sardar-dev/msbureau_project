"use client"

import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import type { IconType } from "react-icons"
import { useRouter } from 'next/navigation'


export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon | IconType
    }[]
}) {
    const router = useRouter()
    const [selectedItem, setSelectedItem] = useState<string>("")

    const handleClick = (title: string, url: string) => {
        setSelectedItem(title)
        router.push(url)
    }

    return (
        <div style={{ fontFamily: 'Poppins, arial, sans-serif' }} className="p-4">
            <div className="flex flex-col gap-4">
                <div className="space-y-2 w-full flex flex-col items-center">
                    {items.map((item) => {
                        const Icon = item.icon
                        const isSelected = selectedItem === item.title

                        return (
                            <div className="text-center w-full" key={item.title}>
                                <button
                                    onClick={() => handleClick(item.title, item.url)}
                                    className={`flex items-center gap-2 py-2 w-[90%] text-[#3f3f46] text-[14px] rounded px-2 transition ${isSelected ? "bg-[#D4D4D8]" : "hover:bg-[#D4D4D8]"
                                        }`}
                                    title={item.title}
                                >
                                    {Icon && <Icon className="text-xl" />}
                                    <span className="text-nowrap ">{item.title}</span>
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
