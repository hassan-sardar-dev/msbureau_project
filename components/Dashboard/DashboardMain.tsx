"use client"
import React, { useState } from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    DotProps
} from 'recharts';
import { LuCalendarDays } from "react-icons/lu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { TooltipProps } from 'recharts';


const DashboradMain = () => {
    const [selectedYear, setSelectedYear] = useState("2025");

    const handleSelect = (year: string) => {
        setSelectedYear(year);
    };

    const [activeMonth, setActiveMonth] = useState('Mar');


    const data = [
        { month: 'Jan', amount: 3388.74 },
        { month: 'Feb', amount: 9052.00 },
        { month: 'Mar', amount: 4734.68 },
        { month: 'Apr', amount: 557.59 },
        { month: 'May', amount: 0 },
        { month: 'Jun', amount: 0 },
        { month: 'Jul', amount: 0 },
        { month: 'Aug', amount: 0 },
        { month: 'Sep', amount: 0 },
        { month: 'Oct', amount: 0 },
        { month: 'Nov', amount: 0 },
        { month: 'Dec', amount: 0 }
    ];




    // Custom tooltip component
    const CustomTooltip = ({ active, payload }: TooltipProps<any, any>) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-4 rounded ax-h-[calc(100vh-80px)] overflow-y-auto  shadow-md">
                    <p className="text-gray-600 text-lg font-medium mb-2">{payload[0].payload.month}</p>
                    <div className="border-t border-gray-200 pt-2">
                        <p className="text-gray-500 mb-1">Payment Amount</p>
                        <p className="text-xl font-medium">${payload[0].value.toFixed(2)}</p>
                    </div>
                </div>
            );
        }
        return null;
    };

    type CustomPayload = {
        month: string;
    };

    const CustomDot = ({ cx, cy, payload }: { cx?: number; cy?: number; payload?: CustomPayload }) => {
        if (payload?.month === activeMonth) {
            return (
                <circle
                    cx={cx}
                    cy={cy}
                    r={4}
                    fill="#1E88E5"
                    stroke="#fff"
                    strokeWidth={2}
                />
            );
        }
        return null;
    };


    return (



        <div className="bg-[#FAFAFA] static scrollbar-none flex flex-col  gap-4 h-full max-h-[calc(100vh-80px)] overflow-y-auto p-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <p className="text-[24px] font-[600] text-[#27272a]">Overview</p>

            <div className="flex  gap-4">
                {[1, 2, 3, 4].map((_, i) => (
                    <div key={i} className="border px-3 py-5 bg-white rounded-xl">
                        <p className="text-[#11181c] text-[16px]">Total Accounts</p>
                        <p className="text-[30px] text-[#11181c] font-[600]">12621</p>
                        <p className="text-[12px] text-[#11181c]">Total Number of accounts listed</p>
                    </div>
                ))}
            </div>

            <div className="bg-white p-5 rounded-lg mt-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[20px] font-[600] text-[#27272a]">Payment Progress</h2>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex cursor-pointer bg-[#f1f1f2] px-3 py-1 rounded-md items-center gap-2">
                            <LuCalendarDays />
                            {selectedYear}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {["2025", "2024", "2023", "2022", "2021"].map((year) => (
                                <DropdownMenuItem key={year} onClick={() => handleSelect(year)}>
                                    {year}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart
                            data={data}
                            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
                            onMouseMove={(e) => {
                                if (e && e.activePayload) {
                                    setActiveMonth(e.activePayload[0].payload.month);
                                }
                            }}
                        >
                            <defs>
                                <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#64B5F6" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#64B5F6" stopOpacity={0.1} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: '#9e9e9e' }} />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tick={{ fill: '#9e9e9e' }}
                                domain={[0, 10000]}
                                ticks={[0, 2500, 5000, 7500, 10000]}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Area
                                type="monotone"
                                dataKey="amount"
                                stroke="#1E88E5"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorAmount)"
                                dot={<CustomDot />}
                                activeDot={{ r: 6, fill: "#1E88E5", stroke: "#fff", strokeWidth: 2 }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}

export default DashboradMain;