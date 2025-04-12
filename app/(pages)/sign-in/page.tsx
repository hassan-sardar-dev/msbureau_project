'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import bgImage from '@/public/login-bg.png';
import logoLight from '@/public/logo-light.png';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from 'next/link';

const formSchema = z.object({
    email: z.string().email({ message: "Invalid Email Address." }),
    password: z.string().min(6, { message: "Password must be at least 6 characters." }),
});

const cardSchema = z.object({
    name: z.string().min(2, {
        message: "Name is Required",
    }),
    email: z.string().email({
        message: "Invalid Email Address",
    }),
    businessName: z.string().min(2, {
        message: "Business name is required."
    }),
    businessAddress: z.string().min(5, {
        message: "Business address is required."
    }),
    businessEmail: z.string().email({
        message: "Invalid business email address."
    }),
    businessPhone: z.string().optional(),
})

const Page = () => {


    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    type FormData = z.infer<typeof formSchema>;
    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => setShowPassword(!showPassword);

    const Cardform = useForm({
        resolver: zodResolver(cardSchema),
        defaultValues: {
            name: "",
            email: "",
            businessName: "",
            businessAddress: "",
            businessEmail: "",
            businessPhone: "",
        },
    });
    type DialogFormData = z.infer<typeof cardSchema>;
    const onSubmitCard = (data: DialogFormData) => {
        console.log("Dialog Form Data:", data);
    };
    return (
        <div className="bg-[#FAFAFA] h-full w-full flex" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="relative w-1/2 overflow-hidden min-h-screen">
                <Image src={bgImage} alt="Background" layout="fill" className="bg-cover scale-x-125" />
                <div className='absolute text-[#fafafa] p-12 flex flex-col justify-between inset-0' style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <h1 className="text-4xl font-bold tracking-[-0.75px]">
                        Midwest Service <br /> Bureau, Inc.
                    </h1>
                    <div className=''>
                        <h1>
                            Leave the debt recovery to us, so you can concentrate on what matters most--growing your business.</h1>
                        <h1 className='pt-4'>
                            <Link href="https://clients.msbureau.com/privacy-policy" className='p-3 underline hover:text-[#c6c4c4] transition-all duration-200'>Privacy Policy</Link>
                            |
                            <Link href="https://www.msbureau.com" className='p-3 underline hover:text-[#c6c4c4] transition-all duration-200' target="_blank" rel="noopener noreferrer">www.msbureau.com</Link>
                        </h1>
                    </div>
                </div>
            </div>

            <div className="w-1/2 flex h-full py-10">
                <div className="w-full max-w-lg h-auto mx-auto bg-white border border-gray-300 p-8 rounded-xl text-[#3F3F46]" style={{ fontFamily: 'Poppins, sans-serif' }}>

                    <Image src={logoLight} className='' alt="Logo" width={96} height={96} />
                    <h1 className="text-[#3f3f46] py-4 tracking-[-0.8px] text-3xl font-bold">
                        Welcome back!
                    </h1>

                    <div className="bg-[#E6F1FE] border border-[#99C7FB] rounded-md mt-4">
                        <h1 className="text-md p-2 text-[#004493] tracking-tighter font-semibold flex items-center gap-1">
                            <IoIosInformationCircleOutline className="text-lg " /> Important Notice
                        </h1>
                        <hr className="border-[#99C7FB]" />
                        <div className="p-4 text-[14px] text-[#004493]">
                            <p>
                                Welcome to our newly upgraded portal. If your previous credentials don't work or need new account access, click here to,{' '}
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="text-[#004493] underline cursor-pointer font-semibold"> Request Account Access </button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-lg   sm:max-w-2xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        <DialogHeader>
                                            <DialogTitle className="text-xl font-bold">Request Account Access</DialogTitle>
                                            <p className="text-sm text-gray-500">Please fill in the form below to request login access.</p>
                                        </DialogHeader>
                                        <Form {...Cardform}>
                                            <form onSubmit={Cardform.handleSubmit(onSubmitCard)} className="space-y-4 ">

                                                <div className='flex justify-between gap-5 w-full'>


                                                    <FormField
                                                        control={Cardform.control}
                                                        name="name"
                                                        render={({ field }) => (
                                                            <FormItem className='w-1/2'>
                                                                <FormLabel className='text-[14px] font-normal'>Your Name</FormLabel>
                                                                <FormControl className='bg-gray-100'>
                                                                    <Input placeholder="Enter Your Name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={Cardform.control}
                                                        name="email"
                                                        render={({ field }) => (
                                                            <FormItem className='w-1/2'>
                                                                <FormLabel className='text-[14px] font-normal'>Email Address</FormLabel>
                                                                <FormControl className='bg-gray-100'>
                                                                    <Input placeholder="Enter Your Email" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className='flex gap-5'>
                                                    <FormField
                                                        control={Cardform.control}
                                                        name="businessName"
                                                        render={({ field }) => (
                                                            <FormItem className='w-1/2'>
                                                                <FormLabel className='text-[14px] font-normal'>Business Name</FormLabel>
                                                                <FormControl className='bg-gray-100'>
                                                                    <Input placeholder="Enter Your Email" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={Cardform.control}
                                                        name="businessAddress"
                                                        render={({ field }) => (
                                                            <FormItem className='w-1/2'>
                                                                <FormLabel className='text-[14px] font-normal'>Business Address</FormLabel>
                                                                <FormControl className='bg-gray-100'>
                                                                    <Input placeholder="Enter Your Email" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>

                                                <div className='flex gap-5'>
                                                    <FormField
                                                        control={Cardform.control}
                                                        name="businessEmail"
                                                        render={({ field }) => (
                                                            <FormItem className='w-1/2'>
                                                                <FormLabel className='text-[14px] font-normal'>Business Email Address</FormLabel>
                                                                <FormControl className='bg-gray-100'>
                                                                    <Input placeholder="Enter Your Email" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={Cardform.control}
                                                        name="businessPhone"
                                                        render={({ field }) => (
                                                            <FormItem className='w-1/2'>
                                                                <FormLabel className='text-[14px] font-normal'>Business Phone Number</FormLabel>
                                                                <FormControl className='bg-gray-100'>
                                                                    <Input placeholder="Enter Your Email" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                </div>
                                                <Button type="submit" className='w-full'>Request Access</Button>
                                            </form>
                                        </Form>
                                    </DialogContent>
                                </Dialog>

                                {' '}assistance.
                            </p>
                        </div>
                    </div>

                    <h1 className="text-[15px] my-6 text-[#71717a]">
                        Enter your email and password below to log into your business portal.
                    </h1>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl className='bg-gray-100'>
                                            <Input placeholder="Enter your Email Address" {...field} style={{ fontFamily: 'Poppins, sans-serif' }} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <div className="relative">
                                            <FormControl className='bg-gray-100'>
                                                <Input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Enter your password"
                                                    {...field}
                                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                                />
                                            </FormControl>
                                            <button
                                                type="button"
                                                onClick={togglePassword}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                                aria-label={showPassword ? "Hide password" : "Show password"}
                                            >
                                                {showPassword ? (
                                                    <AiOutlineEyeInvisible className="text-xl" />
                                                ) : (
                                                    <AiOutlineEye className="text-xl" />
                                                )}
                                            </button>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Link href='/dashboard'>

                                <Button type="submit" className='w-full' style={{ fontFamily: 'Poppins, sans-serif' }}>Sign in</Button>
                            </Link>
                        </form>
                    </Form>
                    <div>
                        <Link href='/forget-password' className='underline flex text-md justify-end pt-4'>Forget Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;