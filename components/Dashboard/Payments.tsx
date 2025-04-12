"use client"
import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { CiFilter } from "react-icons/ci"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import '@/app/globals.css';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Invalid Account Number",
    }),
})

const users = [
    { id: 1, name: 'Alice Johnson', account: 'ACC123456', amount: 2500, type: 'Credit', date: '2025-04-09' },
    { id: 2, name: 'Michael Smith', account: 'ACC123457', amount: 1800, type: 'Debit', date: '2025-04-08' },
    { id: 3, name: 'Emily Davis', account: 'ACC123458', amount: 3200, type: 'Credit', date: '2025-04-07' },
    { id: 4, name: 'Daniel Brown', account: 'ACC123459', amount: 1400, type: 'Debit', date: '2025-04-06' },
    { id: 5, name: 'Sophia Wilson', account: 'ACC123460', amount: 2700, type: 'Credit', date: '2025-04-05' },
    { id: 6, name: 'James Miller', account: 'ACC123461', amount: 3100, type: 'Debit', date: '2025-04-04' },
    { id: 7, name: 'Olivia Moore', account: 'ACC123462', amount: 2300, type: 'Credit', date: '2025-04-03' },
    { id: 8, name: 'Ethan Taylor', account: 'ACC123463', amount: 1200, type: 'Debit', date: '2025-04-02' },
    { id: 9, name: 'Ava Anderson', account: 'ACC123464', amount: 2600, type: 'Credit', date: '2025-04-01' },
    { id: 10, name: 'Liam Thomas', account: 'ACC123465', amount: 1500, type: 'Debit', date: '2025-03-31' },
    { id: 11, name: 'Mia Jackson', account: 'ACC123466', amount: 2800, type: 'Credit', date: '2025-03-30' },
    { id: 12, name: 'Noah White', account: 'ACC123467', amount: 1350, type: 'Debit', date: '2025-03-29' },
    { id: 13, name: 'Isabella Harris', account: 'ACC123468', amount: 2950, type: 'Credit', date: '2025-03-28' },
    { id: 14, name: 'Lucas Martin', account: 'ACC123469', amount: 1600, type: 'Debit', date: '2025-03-27' },
    { id: 15, name: 'Charlotte Thompson', account: 'ACC123470', amount: 2700, type: 'Credit', date: '2025-03-26' },
    { id: 16, name: 'Mason Garcia', account: 'ACC123471', amount: 1450, type: 'Debit', date: '2025-03-25' },
    { id: 17, name: 'Amelia Martinez', account: 'ACC123472', amount: 3000, type: 'Credit', date: '2025-03-24' },
    { id: 18, name: 'Logan Robinson', account: 'ACC123473', amount: 1250, type: 'Debit', date: '2025-03-23' },
    { id: 19, name: 'Harper Clark', account: 'ACC123474', amount: 2850, type: 'Credit', date: '2025-03-22' },
    { id: 20, name: 'Benjamin Rodriguez', account: 'ACC123475', amount: 1900, type: 'Debit', date: '2025-03-21' },
    { id: 21, name: 'Ella Lewis', account: 'ACC123476', amount: 2200, type: 'Credit', date: '2025-03-20' },
    { id: 22, name: 'William Lee', account: 'ACC123477', amount: 1600, type: 'Debit', date: '2025-03-19' },
    { id: 23, name: 'Abigail Walker', account: 'ACC123478', amount: 3050, type: 'Credit', date: '2025-03-18' },
    { id: 24, name: 'Henry Hall', account: 'ACC123479', amount: 1750, type: 'Debit', date: '2025-03-17' },
    { id: 25, name: 'Evelyn Allen', account: 'ACC123480', amount: 2500, type: 'Credit', date: '2025-03-16' },
    { id: 26, name: 'Alexander Young', account: 'ACC123481', amount: 1550, type: 'Debit', date: '2025-03-15' },
    { id: 27, name: 'Scarlett Hernandez', account: 'ACC123482', amount: 2900, type: 'Credit', date: '2025-03-14' },
    { id: 28, name: 'Sebastian King', account: 'ACC123483', amount: 1300, type: 'Debit', date: '2025-03-13' },
    { id: 29, name: 'Grace Wright', account: 'ACC123484', amount: 2650, type: 'Credit', date: '2025-03-12' },
    { id: 30, name: 'Jack Lopez', account: 'ACC123485', amount: 2000, type: 'Debit', date: '2025-03-11' },
];

export default function Payments() {
    const [currentPage, setCurrentPage] = useState(1);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [minAmount, setMinAmount] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    const itemsPerPage = 10;


    // Filter users based on date and amount
    const filteredUsers = users.filter((user) => {
        // Date filter logic
        const isWithinDateRange =
            (!startDate || new Date(user.date) >= new Date(startDate)) &&
            (!endDate || new Date(user.date) <= new Date(endDate));

        // Amount filter logic
        const isWithinAmountRange =
            (!minAmount || user.amount >= parseFloat(minAmount)) &&
            (!maxAmount || user.amount <= parseFloat(maxAmount));

        return isWithinDateRange && isWithinAmountRange;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(users.length / itemsPerPage);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log("Form Submitted:", data);
    };

    return (
        <div className="px-4 py-4 bg-white  max-h-[calc(100vh-80px)] hide-scrollbar  overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <div className='flex flex-col gap-2'>
                    <h1 className="text-2xl font-bold">Payments ({users.length})</h1>

                    <Dialog>
                        <DialogTrigger>
                            <span className="bg-[#eeeeef] gap-2 px-4 py-2 flex rounded-md font-medium">
                                <Plus className='text-xl' /> Post Payment
                            </span>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className='border-b'>Select Account</DialogTitle>
                                <DialogDescription>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <FormField
                                                control={form.control}
                                                name="username"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Account Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter Your Account Number" {...field} />
                                                        </FormControl>
                                                        <FormDescription>
                                                            You can enter your account number or search by debtor name.
                                                        </FormDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <button className='w-full bg-[#338cf1] py-2 rounded-lg text-white'>Submit</button>
                                        </form>
                                    </Form>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className='flex bg-gray-100 px-4 py-2 rounded-md font-medium  items-center gap-2'>
                        <CiFilter className='text-xl' /> Filter
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>
                            Amount Filter
                        </DropdownMenuItem>
                        <DropdownMenuItem>Date Filter</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border-gray-200 rounded-md">
                    <thead className="bg-[#f4f4f5] rounded-2xl">
                        <tr>
                            <th className="text-left rounded-l-xl px-4 py-2 font-medium">Payment ID</th>
                            <th className="text-left px-4 py-2 font-medium">Debtor Name</th>
                            <th className="text-left px-4 py-2 font-medium">Account Number</th>
                            <th className="text-left px-4 py-2 font-medium">Payment Amount</th>
                            <th className="text-left px-4 py-2 font-medium">Payment Type</th>
                            <th className="text-left rounded-r-xl px-4 py-2 font-medium">Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsers.map((payment) => (
                            <tr key={payment.id} className="border-t">
                                <td className="px-4 py-2">{payment.id}</td>
                                <td className="px-4 py-2 underline font-medium">{payment.name}</td>
                                <td className="px-4 py-2">{payment.account}</td>
                                <td className="px-4 py-2">{payment.amount}</td>
                                <td className="px-4 py-2">{payment.type}</td>
                                <td className="px-4 py-2">{payment.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
