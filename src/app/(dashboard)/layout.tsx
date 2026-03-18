import { JSX, ReactNode } from "react";
import MainLayout from "@/components/layout/mainLayout";

type DashboardLayoutProps = Readonly<{
    children: ReactNode;
}>;

export default function DashboardLayout({ children }: DashboardLayoutProps): JSX.Element {
    return <MainLayout>{children}</MainLayout>

}