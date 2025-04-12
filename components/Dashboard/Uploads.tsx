'use client';

import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Uploads() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const files = [
        {
            filename: "3198-20250409170402.....250331-on-20250409.csv",
            fileType: "Spreadsheet",
            status: "In Review",
            dateListed: "2025-04-09",
            uploadedBy: "N/A",
            uploadedAt: "2025-04-09",
        },
        {
            filename: "3198-20250310144638.....250228-on-20250310.csv",
            fileType: "Spreadsheet",
            status: "Processed",
            dateListed: "2025-03-10",
            uploadedBy: "N/A",
            uploadedAt: "2025-03-10",
        },
        {
            filename: "3198-20250205195505.....20250205-CORRECTED.csv",
            fileType: "Spreadsheet",
            status: "Processed",
            dateListed: "2025-02-05",
            uploadedBy: "N/A",
            uploadedAt: "2025-02-06",
        },
        {
            filename: "3198-20250205191559.....-MSB-TEST-20250205.csv",
            fileType: "Spreadsheet",
            status: "Processed",
            dateListed: "2025-02-05",
            uploadedBy: "N/A",
            uploadedAt: "2025-02-06",
        },
        {
            filename: "3198-20250109191510.....241231-on-20250108.xlsx",
            fileType: "Spreadsheet",
            status: "Processed",
            dateListed: "2025-01-08",
            uploadedBy: "N/A",
            uploadedAt: "2025-01-10",
        },
        {
            filename: "3198-20241210044432.....241130-on-20241209.xlsx",
            fileType: "Spreadsheet",
            status: "Processed",
            dateListed: "2024-12-09",
            uploadedBy: "N/A",
            uploadedAt: "2024-12-10",
        },
        {
            filename: "3198-20241120203342.....241031-on-20241120.xlsx",
            fileType: "Spreadsheet",
            status: "Processed",
            dateListed: "2024-11-20",
            uploadedBy: "N/A",
            uploadedAt: "2024-11-21",
        }

    ];

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "In Review":
                return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">{status}</Badge>;
            case "Approved":
                return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{status}</Badge>;
            case "Rejected":
                return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{status}</Badge>;
            default:
                return <Badge className="bg-green-100" variant="secondary">{status}</Badge>;
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <Card className="w-full">
            <CardHeader className="flex flex-row items-center justify-between pb-6">
                <CardTitle className="text-3xl font-bold">Upload Files</CardTitle>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="gap-2">
                            <Upload className="h-5 w-5" />
                            Upload File
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>File Upload</DialogTitle>
                            <DialogDescription>
                                Select the date and file format for uploading.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Listed Date</label>
                                <input
                                    type="date"
                                    className="w-full border bg-gray-100 py-2 px-3 rounded-md"
                                />
                                <p className="text-sm mt-2">
                                    The listing date is the date you'd like us to start working the accounts,
                                    and is set to today by default. If you wish to schedule for a future date,
                                    please select that date.
                                </p>
                            </div>

                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                multiple
                            />

                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className="bg-[#d6e8fd] w-full px-3 py-2 rounded-md text-[#3369a9]"
                            >
                                Choose Files
                            </button>

                            <div>
                                <h3 className="font-semibold text-sm">Recommended File Formats</h3>
                                <ul className="text-sm list-disc list-inside">
                                    <li>Preferred: CSV, Excel, XML (processed within hours)</li>
                                    <li>Supported: PDF (may delay processing up to a week)</li>
                                </ul>
                            </div>

                            <div className="flex justify-end gap-3 pt-4">
                                <button className="bg-[#dddde0] px-3 py-2 rounded-lg">Cancel</button>
                                <button className="bg-[#7fb7f6] px-3 py-2 rounded-lg font-semibold">Upload</button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </CardHeader>

            <CardContent>
                <div className="rounded-lg bg-white px-4 py-4 border">
                    <Table>
                        <TableHeader className="bg-[#f4f4f5] text-[#71717a]">
                            <TableRow>
                                <TableHead className="font-medium rounded-s-xl">Filename</TableHead>
                                <TableHead className="font-medium">File Type</TableHead>
                                <TableHead className="font-medium">Status</TableHead>
                                <TableHead className="font-medium">Date Listed</TableHead>
                                <TableHead className="font-medium">Uploaded By</TableHead>
                                <TableHead className="font-medium rounded-e-xl">Uploaded At</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {files.map((file, index) => (
                                <TableRow key={index} className={index === files.length - 1 ? "text-gray-400" : ""}>
                                    <TableCell className="font-medium">{file.filename}</TableCell>
                                    <TableCell>{file.fileType}</TableCell>
                                    <TableCell>{getStatusBadge(file.status)}</TableCell>
                                    <TableCell>{file.dateListed}</TableCell>
                                    <TableCell>{file.uploadedBy}</TableCell>
                                    <TableCell>{file.uploadedAt}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
