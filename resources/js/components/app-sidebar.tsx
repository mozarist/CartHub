import { Link } from '@inertiajs/react';
import { LayoutGrid, Package, Store,  } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { useSidebar } from '@/components/ui/sidebar';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
        icon: LayoutGrid,
    },
    {
        title: 'Product Catalog',
        href: '/dashboard/products',
        icon: Store,
    },
    {
        title: 'Orders',
        href: "",
        icon: Package,
    },
];

export function AppSidebar() {
    const { state } = useSidebar();
    
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={"/"} prefetch>
                                <AppLogo collapsed={state === 'collapsed'} />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
