"use client"
import Image from 'next/image'
import React from 'react'
import bgImage from '@/public/login-bg.png'
import logoLight from '@/public/logo-light.png'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
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
import Link from 'next/link'

const formSchema = z.object({
    email: z.string().email({
        message: "Invalid Email",
    }),
})
const Page = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",

        }
    });
    type FormData = z.infer<typeof formSchema>;
    const onSubmit = (data: FormData) => {
        console.log(data);
    };
    return (
        <div className='bg-[#FAFAFA] h-full w-full flex'>
            <div className="relative w-1/2 overflow-hidden min-h-screen">
                <Image src={bgImage} alt="Background" layout="fill" className="bg-cover scale-x-125" />
                <div className='absolute text-[#fafafa] p-12 flex flex-col justify-between inset-0' style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <h1 className="text-4xl font-bold tracking-[-0.5px]">
                        Midwest Service <br /> Bureau, Inc.
                    </h1>
                    <div className=''>
                        <h1 className='font-[600] text-[18px] tracking-[-0.9px] font-sans-serif'>
                            Leave the debt recovery to us, so you can concentrate on what matters most--growing your business.</h1>
                        <h1 className='pt-4'>
                            <a href="/privacy-policy" className='pe-2 underline hover:text-[#c6c4c4] transition-all duration-200'>Privacy Policy</a>
                            |
                            <a href="https://www.msbureau.com" className='p-2 underline hover:text-[#c6c4c4] transition-all duration-200' target="_blank" rel="noopener noreferrer">www.msbureau.com</a>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex h-full pt-20">
                <div className=" max-w-lg  mx-auto w-[80%] bg-white border border-gray-300 p-8 rounded-xl text-[#3F3F46]" style={{ fontFamily: 'Poppins, sans-serif' }}>

                    <Image src={logoLight} className='' alt="Logo" width={96} height={96} />
                    <h1 className="text-[#3f3f46] py-4 tracking-[-0.8px] text-3xl font-bold">
                        Forget password?
                    </h1>


                    <h1 className="text-[14px] mb-6 text-[#71717a]">
                        Enter the email address associated with your account and we'll send you a link to reset your password.
                    </h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-[14px] font-normal '>Email Address</FormLabel>
                                        <FormControl className='bg-gray-100'>
                                            <Input placeholder="Enter Your email address" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className='w-full'>Send Reset Link</Button>
                        </form>
                    </Form>

                    <div>
                        <Link href='/' className='underline flex text-md justify-center font-[18px] text-[#11181c] tracking-[-0.9px] pt-4'>Back to Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
