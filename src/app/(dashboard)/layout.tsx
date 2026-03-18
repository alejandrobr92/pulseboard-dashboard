import MainLayout from "@/components/layout/mainLayout";
import { JSX, ReactNode } from "react";

export default function DashboardLayout({ children }: Readonly<{ children: ReactNode }>): JSX.Element {
    return <MainLayout>{children}</MainLayout>

}