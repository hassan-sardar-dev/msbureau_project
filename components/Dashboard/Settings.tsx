'use client'

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// Account Info Schema
const formSchema = z.object({
    username: z.string().email("Enter a valid email"),
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
})

// Password Schema with confirm match
const passwordSchema = z.object({
    currentPassword: z.string().min(1, "Current Password is required"),
    newPassword: z.string().min(6, "New Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
})

export default function Settings() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            firstName: "",
            lastName: "",
        },
    })

    const passwordForm = useForm({
        resolver: zodResolver(passwordSchema),
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log("Account Info Submitted:", data)
    }

    const handlePasswordSubmit = (data: any) => {
        console.log("Password Updated:", data)
    }

    return (
        <div className="w-full bg-[#fafafa] p-6 space-y-6">
            <div className="w-full lg:w-1/2">
                <Tabs defaultValue="account">
                    <TabsList className="w-full bg-white border">
                        <TabsTrigger value="account">Account Info</TabsTrigger>
                        <TabsTrigger value="password">Update Password</TabsTrigger>
                    </TabsList>

                    {/* --- Account Info --- */}
                    <TabsContent value="account" className="mt-6 space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold">Account Info</h2>
                            <p className="text-gray-500 text-sm">You can change your account information here.</p>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Enter Your Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Your First Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter Your Last Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" className="bg-[#328bf0] hover:bg-[#328ce5] text-white">
                                    Save Changes
                                </Button>
                            </form>
                        </Form>
                    </TabsContent>

                    {/* --- Password Form --- */}
                    <TabsContent value="password" className="mt-6 space-y-6">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold">Update Password</h2>
                            <p className="text-gray-500 text-sm">Change your current password below.</p>
                        </div>

                        <Form {...passwordForm}>
                            <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-6">
                                <FormField
                                    control={passwordForm.control}
                                    name="currentPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Current Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Enter current password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={passwordForm.control}
                                    name="newPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>New Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Enter new password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={passwordForm.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Confirm New Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Re-enter new password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                                    Update Password
                                </Button>
                            </form>
                        </Form>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
