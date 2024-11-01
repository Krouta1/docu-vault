import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
import { CMSSidebar } from "./_components/CMSSidebar";

export default function CMSLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <CMSSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
