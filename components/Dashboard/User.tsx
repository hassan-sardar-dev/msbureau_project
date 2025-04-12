// app/users/page.jsx
"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Trash2, Pencil } from "lucide-react";
import { BiEdit } from "react-icons/bi";



export default function User() {


    type User = {
        id: number;
        name: string;
        email: string;
        role: string;
    };

    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "-", email: "ctonner@pbsbills.co", role: "Staff" },
        { id: 2, name: "-", email: "rfrank@pbsbills.com", role: "Staff" },
        { id: 3, name: "-", email: "kdenton@illinoisderm.com", role: "Staff" },
        { id: 4, name: "-", email: "msarkes@illinoisderm.com", role: "Staff" },
        { id: 5, name: "-", email: "rfrank@pbsbill.com", role: "Staff" },
        { id: 6, name: "-", email: "tmoore@illinoisderm.com", role: "Staff" },
        { id: 7, name: "-", email: "tpowell@illinoisderm.com", role: "Staff" },
    ]);

    const handleDelete = (id: number) => {
        setUsers(users.filter(user => user.id !== id));
    };;

    const [newUserEmail, setNewUserEmail] = useState("");
    const [selectedRole, setSelectedRole] = useState("Client Admin");


    const handleInvite = () => {
        if (newUserEmail) {
            const newUser = {
                id: users.length + 1,
                name: "-",
                email: newUserEmail,
                role: selectedRole
            };
            setUsers([...users, newUser]);
            setNewUserEmail("");
        }
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-semibold text-gray-500 mb-6">All Users ({users.length})</h1>

            <div className="flex gap-2 mb-6">
                <Input
                    placeholder="Email address of the user you want to invite"
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                    className="flex-1"
                />

                <Select value={selectedRole} onValueChange={setSelectedRole}>
                    <SelectTrigger className="w-40">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Client Admin">Client Admin</SelectItem>
                        <SelectItem value="Staff">Staff</SelectItem>
                        <SelectItem value="Manager">Manager</SelectItem>
                    </SelectContent>
                </Select>

                <Button onClick={handleInvite} className="bg-blue-400 hover:bg-blue-500">
                    Invite User
                </Button>
            </div>

            <div className="bg-white px-4 py-3 rounded-lg border shadow">
                <Table>
                    <TableHeader className="bg-gray-100 ">
                        <TableRow>
                            <TableHead className="w-1/4 rounded-s-md">Name</TableHead>
                            <TableHead className="w-1/4">Email</TableHead>
                            <TableHead className="w-1/4">Role</TableHead>
                            <TableHead className="w-1/6 rounded-e-md">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="icon" className="bg-blue-50 hover:bg-blue-100">
                                            <BiEdit className="text-xl text-blue-500" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="icon"
                                            className="bg-red-50 hover:bg-red-100"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            <Trash2 className="h-4 w-4 text-red-500" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}