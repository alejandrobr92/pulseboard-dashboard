'use client'

import { User } from "@/types/user";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";

type UserTableProps = {
    data: User[];
}

export default function UserTable({ data }: UserTableProps) {
    const columns: ColumnDef<User>[] = [
        {
            accessorKey: "name",
            header: "Name",
        },
        {
            accessorKey: "email",
            header: "Email",
        },
        {
            accessorKey: "role",
            header: "Role",
        },
    ];

    const table = useReactTable({
        data, columns, getCoreRowModel: getCoreRowModel()
    });

    return (
        <table>
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id} className="text-left p-3">
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody>
                {table.getRowModel().rows.map((row) => (
                    <tr key={row.id} className="border-t">
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id} className="p-3">
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table >
    )
}