import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

type MainLayoutProps = Readonly<{
    children: ReactNode;
}>;

export default function MainLayout({ children }: MainLayoutProps) {
    return (<div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1">
            <Topbar />
            <main className="p-6 overflow-y-auto">{children}</main>
        </div>
    </div>)
};