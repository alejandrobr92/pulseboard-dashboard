'use client'
import { useUsers } from "@/features/users/api/useUsers"
import UserTable from "@/features/users/components/UserTable";

export default function Users() {
    const { data, isLoading } = useUsers();

    if (isLoading) return <div>...loading</div>

    return <UserTable data={data ?? []} />
}