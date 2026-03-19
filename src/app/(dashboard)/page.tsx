"use client";
import Card from "@/components/ui/Card";
import { useMetrics } from "@/features/dashboard/api/useMetrics";

export default function Dashboard() {
    const { data, isLoading, error } = useMetrics();

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading metrics</div>


    return (
        <div className="grid grid-cols-3 gap-4">
            <Card>
                <p className="text-sm text-gray-500">Active Users</p>
                <h2 className="text-2xl font-bold">{data?.activeUsers}</h2>
            </Card>
            <Card>
                <p className="text-sm text-gray-500">Total tasks</p>
                <h2 className="text-2xl font-bold">{data?.totalTasks}</h2>
            </Card>
            <Card>
                <p className="text-sm text-gray-500">Activity</p>
                <h2 className="text-2xl font-bold">{data?.activityCount}</h2>
            </Card>
        </div>
    );
}
