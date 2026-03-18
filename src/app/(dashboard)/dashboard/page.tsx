import Card from "@/components/ui/Card"

export default function Dashboard() {
    return (<div className="grid grid-cols-3 gap-4">
        <Card><p className="text-sm text-gray-500">Active Users</p>
            <h2 className="text-2xl font-bold">1,245</h2>
        </Card>
        <Card>Activity</Card>
        <Card>Analytics</Card>

    </div>);
}
