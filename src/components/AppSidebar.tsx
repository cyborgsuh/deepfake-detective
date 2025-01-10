import { Brain, Home, GitCompare, Database, Sliders, Play, Mail } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const menuItems = [
  { title: "Home", icon: Home, path: "/" },
  { title: "Model Comparison", icon: GitCompare, path: "/model-comparison" },
  { title: "Data Augmentation", icon: Database, path: "/data-augmentation" },
  { title: "Hyperparameters", icon: Sliders, path: "/hyperparameters" },
  { title: "Demo", icon: Play, path: "/demo" },
  { title: "Contact", icon: Mail, path: "/contact" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-2 px-4 py-2">
            <Brain className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold">DeepFake Detector</h1>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}