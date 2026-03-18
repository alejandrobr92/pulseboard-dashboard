import { JSX, ReactNode } from "react";
import MainLayout from "@/components/layout/mainLayout";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return <MainLayout>{children}</MainLayout>

}