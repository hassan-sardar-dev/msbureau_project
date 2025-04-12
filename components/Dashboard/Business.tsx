// app/business/page.jsx
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Pencil, Trash2 } from "lucide-react"

const locations = [
    {
        name: "Illinois Dermatology Institute - Chesterton Office",
        address: "425 Sand Creek Drive\nChesterton, IN 46304",
        email: "no-reply@illinoisderm.com",
        phone: "(219) 878-5020"
    },
    {
        name: "Illinois Dermatology Institute - Chicago Lakeview Office",
        address: "3000 N Halsted, Suite 409\nChicago, IL 60657",
        email: "no-reply@illinoisderm.com",
        phone: "(773) 281-9200"
    },
    {
        name: "Unknown",
        address: "903 Commerce Dr",
        email: "rneilson@illinoisderm.com",
        phone: ""
    }
]
export default function Busniness() {



    type Bank = {
        bankName: string;
        accountNumber: string;
        routingNumber: string;

    }

    const [bank, setBank] = useState<Bank>({
        bankName: "",
        accountNumber: "",
        routingNumber: "",
    })
    type Business = {
        name: string;
        code: string;
        industry: string;
        email: string;
        phone: string;
        contactPerson: string;
        website: string;
        taxId: string;
        description: string;
    };

    const [business, setBusiness] = useState<Business>({
        name: "Illinois Dermatology Insititue",
        code: "",
        industry: "Medical",
        email: "tpowell@illinoisderm.com",
        phone: "8477693483",
        contactPerson: "",
        website: "",
        taxId: "",
        description: `Illinois Dermatology Institute (IDI) is a trusted dermatology provider with 16 locations across Chicago, Northern Illinois, and Indiana. They specialize in offering a wide range of medical, cosmetic, and surgical dermatology services, along with plastic and reconstructive surgery. IDI’s focus is on delivering personalized, compassionate care tailored to the needs of each patient.

Services and Common Account Contexts

IDI’s services span a wide spectrum of dermatology and surgical care, leading to varied account types. Collectors should understand the nature of the services provided to give better context to balances placed with us. These include:
	•	Cosmetic Dermatology:
Treatments such as Botox, fillers (e.g., Juvederm, Restylane), laser treatments (e.g., Laser Genesis, IPL), CoolSculpting, Thermage, and microdermabrasion.
Patients often seek these elective procedures for skin rejuvenation, contouring, and aesthetic enhancement.
	•	Plastic Surgery:
Services include tumescent liposuction, facial contouring, and chin or cheek enhancement. Patients may require assistance managing balances for procedures aimed at long-term aesthetic or reconstructive goals.
	•	Medical Dermatology:
Treatment of chronic or acute skin conditions like acne, psoriasis, eczema, nail disorders, and fungal infections. These accounts may include insured services or out-of-pocket patient responsibilities.
	•	Surgical Dermatology:
Procedures such as Mohs surgery for skin cancer, excision and repair of lesions, and scar revision. Balances here may involve co-pays or deductibles related to necessary medical treatments.

Conditions Treated by IDI
Many accounts involve treatments for common skin issues or medical conditions. These include:
	•	Medical Conditions:
Acne, rosacea, eczema, psoriasis, fungal infections, and hair loss treatments. Patients with these conditions often pursue both short-term relief and long-term management plans.
	•	Surgical or Serious Conditions:
Skin cancers (e.g., basal cell carcinoma, malignant melanoma), suspicious moles, and cysts often require surgical intervention.
	•	Cosmetic Concerns:
Wrinkles, unwanted fat, thin lips, and discoloration are addressed through a variety of cosmetic and medical treatments.
	•	Chronic or Specialty Cases:
Conditions like hyperhidrosis, lichen planus, or granuloma annulare, which may require more specialized care.

Guidance for Collectors
	1.	Understand the Patient’s Perspective: Balances may result from elective cosmetic treatments or medically necessary care. Tailor your approach to reflect the context of the account.
	2.	Explain Options Clearly: Many IDI patients may have balances due to partial insurance coverage or out-of-pocket expenses. Be prepared to discuss payment plans or other resolutions.
	3.	Use Empathy: IDI’s focus is on personalized care, so patients may expect the same approach when discussing their financial responsibilities.
	4.	Stay Informed: Knowing the services and conditions tied to balances will help you navigate conversations effectively and assist in resolving disputes or concerns.`
    });

    const handleChange = (field: keyof Business, value: string) => {
        setBusiness(prev => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleChangeBank = (field: keyof Bank, value: string) => {
        setBank(prev => ({
            ...prev,
            [field]: value,
        }));
    };


    return (
        <div className="p-6 max-w-6xl  bg-[#fafafa] mx-auto">
            <Tabs defaultValue="business-info" className="mb-8">
                <TabsList className="grid grid-cols-3 gap-2 bg-gray-200 h-fit w-fit">
                    <TabsTrigger value="business-info" className="px-6 py-2 bg-white">Business Info</TabsTrigger>
                    <TabsTrigger value="bank-accounts" className="px-6 bg-white py-2">Bank Accounts</TabsTrigger>
                    <TabsTrigger value="locations" className="px-6 bg-white py-2">Locations</TabsTrigger>
                </TabsList>

                <TabsContent value="business-info" className="mt-6">
                    <h1 className="text-3xl font-bold mb-8">Business Info</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="business-name" className="text-base font-medium">
                                Business Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="business-name"
                                value={business.name}
                                onChange={(e) => handleChange("name", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="business-code" className="text-base font-medium">
                                Business Code
                            </Label>
                            <Input
                                id="business-code"
                                value={business.code}
                                onChange={(e) => handleChange("code", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="industry" className="text-base  font-medium">
                                Industry <span className="text-red-500 ">*</span>
                            </Label>
                            <Select
                                value={business.industry}
                                onValueChange={(value) => handleChange("industry", value)}
                            >
                                <SelectTrigger id="industry" className="bg-gray-50 w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Medical">Medical</SelectItem>
                                    <SelectItem value="Technology">Technology</SelectItem>
                                    <SelectItem value="Education">Education</SelectItem>
                                    <SelectItem value="Finance">Finance</SelectItem>
                                    <SelectItem value="Retail">Retail</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="business-email" className="text-base font-medium">
                                Business Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="business-email"
                                type="email"
                                value={business.email}
                                onChange={(e) => handleChange("email", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="business-phone" className="text-base font-medium">
                                Business Phone Number <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="business-phone"
                                value={business.phone}
                                onChange={(e) => handleChange("phone", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="contact-person" className="text-base font-medium">
                                Contact Person
                            </Label>
                            <Input
                                id="contact-person"
                                placeholder="Enter Your Contact Person"
                                value={business.contactPerson}
                                onChange={(e) => handleChange("contactPerson", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="website" className="text-base font-medium">
                                Website
                            </Label>
                            <div className="flex items-center  rounded-md">
                                <span className="pl-3 bg-[#EEEEF0] py-2 text-gray-500">https://</span>
                                <Input
                                    id="website"
                                    value={business.website}
                                    onChange={(e) => handleChange("website", e.target.value)}
                                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="tax-id" className="text-base font-medium">
                                Tax ID
                            </Label>
                            <Input
                                id="tax-id"
                                placeholder="Enter Your Tax ID"
                                value={business.taxId}
                                onChange={(e) => handleChange("taxId", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>
                    </div>

                    <div className="mt-6 space-y-2">
                        <Label htmlFor="description" className="text-base font-medium">
                            Business Description
                        </Label>
                        <Textarea
                            id="description"
                            value={business.description}
                            onChange={(e) => handleChange("description", e.target.value)}
                            className="bg-gray-50 h-32"
                        />
                    </div>
                    <div className="mt-7">
                        <button className="bg-[#328bf0] px-3 py-2 mt-5 rounded-xl text-white">Update Busniness Info</button>
                    </div>
                </TabsContent>

                <TabsContent value="bank-accounts">
                    <h1 className="text-3xl font-bold">Bank Accounts</h1>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="bank-name" className="text-base font-medium">
                                Bank Name <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="bank-name"
                                value={bank.bankName}
                                placeholder="Enter bank name"
                                onChange={(e) => handleChangeBank("bankName", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bank-code" className="text-base font-medium">
                                Business Code
                            </Label>
                            <Input
                                id="bank-code"
                                value={bank.accountNumber}
                                placeholder="Enter account number"
                                onChange={(e) => handleChangeBank("accountNumber", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="bank-code" className="text-base font-medium">
                                Business Code
                            </Label>
                            <Input
                                id="bank-code"
                                value={bank.routingNumber}
                                placeholder="Enter routing number"
                                onChange={(e) => handleChangeBank("routingNumber", e.target.value)}
                                className="bg-gray-50"
                            />
                        </div>




                        <div className="">
                            <button className="bg-[#6aa7ee] translate-y-7 text-white px-4 py-[6px] rounded">Add Bank Account</button>
                        </div>



                    </div>

                    <div className="bg-white">
                        <Card className="p-6 mt-6">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[200px]">Account Name</TableHead>
                                        <TableHead>Account Number</TableHead>
                                        <TableHead>Bank Name</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                            </Table>
                            <div className="w-full">
                                <div className=" h-32 flex justify-center  items-center">
                                    <div className=" text-[#A1A1AA] text-center">
                                        No bank accounts found
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="locations">
                    <div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Business Main Location</h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium">Main Business Address<span className="text-red-500"> *</span></label>
                                    <Input defaultValue="ILLINOIS DERMATOLOGY INSTITUTE" className="mt-1" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium">Billing Address<span className="text-red-500"> *</span></label>
                                    <Input defaultValue="903 COMMERCE DR SUITE 302" className="mt-1" />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Checkbox id="same-address" />
                                    <label htmlFor="same-address" className="text-sm">Same as Main Business Address</label>
                                </div>

                                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">Update Locations</Button>
                            </div>

                            <div className=" flex justify-between mt-5">
                                <h2 className="text-2xl font-bold mb-4">Additional Locations</h2>
                                <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                                    + Add Location
                                </Button>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {locations.map((loc, idx) => (
                    <Card key={idx} className="rounded-2xl shadow-sm border border-gray-200">
                        <div className="flex justify-between items-start p-4">
                            <h3 className="text-lg text-[#11181C] font-[16px]">{loc.name}</h3>
                            <div className="flex gap-2">
                                <Button size="icon" variant="secondary">
                                    <Pencil className="w-4 h-4" />
                                </Button>
                                <Button size="icon" variant="destructive">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <CardContent className="grid grid-cols-1 grid-row-2  md:grid-cols-2 gap-4 p-4 pt-0">
                            <div>
                                <p className="text-[14px] text-[#11181C]">Address</p>
                                <p className="whitespace-pre-line font-[16px] ">{loc.address}</p>
                            </div>
                            <div>
                                <p className="text-[14px] text-[#11181C]">Email</p>
                                <p className="whitespace-pre-line font-[16px]">{loc.email}</p>
                            </div>
                            <div>
                                <p className="text-[14px] text-[#11181C]">Phone</p>
                                <p className="whitespace-pre-line font-[16px]">{loc.phone || '-'}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}