'use client'
import { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Debtors() {
    const [activeTab, setActiveTab] = useState('all');
    const [filteredDebtors, setFilteredDebtors] = useState<Debtor[]>([]);


    const allDebtors = [
        { accountNumber: '309000001', name: 'CHRISTIE MATTHEWS', balance: 1.23, status: 'Active', dateListed: '2024-01-23', dateOfService: '2021-11-17' },
        { accountNumber: '309000002', name: 'CHRISTIE MATTHEWS', balance: 1.23, status: 'Active', dateListed: '2024-01-23', dateOfService: '2021-11-22' },
        { accountNumber: '309000003', name: 'CHRISTIE MATTHEWS', balance: 1.33, status: 'Active', dateListed: '2024-01-23', dateOfService: '2021-03-15' },
        { accountNumber: '309000004', name: 'CHRISTIE MATTHEWS', balance: 2.66, status: 'Active', dateListed: '2024-01-23', dateOfService: '2021-02-03' },
        { accountNumber: '309000005', name: 'JAN NAVARDAUSKAS', balance: 4.15, status: 'No Status', dateListed: '2024-01-23', dateOfService: '2021-04-14', actionRequired: true },
        { accountNumber: '309000006', name: 'JAN NAVARDAUSKAS', balance: 5.27, status: 'No Status', dateListed: '2024-01-23', dateOfService: '2021-04-14' },
        { accountNumber: '309000007', name: 'JAN NAVARDAUSKAS', balance: 5.27, status: 'Closed', dateListed: '2024-01-23', dateOfService: '2021-10-20', dispute: true },
        { accountNumber: '309000008', name: 'SARAH JOHNSON', balance: 3.45, status: 'On Hold', dateListed: '2024-01-23', dateOfService: '2021-09-12', hold: true },
    ];
    type Debtor = {
        accountNumber: string;
        name: string;
        balance: number;
        status: string;
        dateListed: string;
        dateOfService: string;
        actionRequired?: boolean;
        dispute?: boolean;
        hold?: boolean;
    };

    useEffect(() => {

        switch (activeTab) {
            case 'all':
                setFilteredDebtors(allDebtors);
                break;
            case 'active':
                setFilteredDebtors(allDebtors.filter(debtor => debtor.status === 'Active'));
                break;
            case 'dispute':
                setFilteredDebtors(allDebtors.filter(debtor => debtor.dispute === true));
                break;
            case 'hold':
                setFilteredDebtors(allDebtors.filter(debtor => debtor.hold === true));
                break;
            case 'actionRequired':
                setFilteredDebtors(allDebtors.filter(debtor => debtor.actionRequired === true));
                break;
            default:
                setFilteredDebtors(allDebtors);
        }
    }, [activeTab]);

    const getStatusColor = (status: string): string => {
        switch (status) {
            case 'Active':
                return 'bg-green-200 text-green-900';
            case 'Inactive':
                return 'bg-gray-200 text-gray-800';
            case 'Hold':
                return 'bg-yellow-200 text-yellow-900';
            case 'Dispute':
                return 'bg-red-200 text-red-900';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };


    const getTotalCount = () => {
        return allDebtors.length;
    };

    return (
        <Card className="w-full">
            <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold">Debtors({getTotalCount()})</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between mb-6">
                    <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-1/2">
                        <TabsList className='w-full'>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="active">Active</TabsTrigger>
                            <TabsTrigger value="dispute">Dispute</TabsTrigger>
                            <TabsTrigger value="hold">Hold</TabsTrigger>
                            <TabsTrigger value="actionRequired">Action Required</TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <Button variant="outline" className="gap-2">
                        <Filter className="h-4 w-4" />
                        Filter
                    </Button>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className=''>
                            <TableHead>Account Number</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Total Outstanding Balance</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Date Listed</TableHead>
                            <TableHead>Date of Service</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className='w-full'>
                        {filteredDebtors.length > 0 ? (
                            filteredDebtors.map((debtor) => (
                                <TableRow key={debtor.accountNumber}>
                                    <TableCell className="font-medium text-blue-600 hover:underline cursor-pointer">
                                        {debtor.accountNumber}
                                    </TableCell>
                                    <TableCell className="font-medium text-blue-600 hover:underline cursor-pointer">
                                        {debtor.name}
                                    </TableCell>
                                    <TableCell>${debtor.balance.toFixed(2)}</TableCell>
                                    <TableCell>
                                        <Badge className={getStatusColor(debtor.status)} variant="default">
                                            {debtor.status}
                                        </Badge>


                                    </TableCell>
                                    <TableCell>{debtor.dateListed}</TableCell>
                                    <TableCell>{debtor.dateOfService}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                                    No debtors found for this filter
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}