import {
    ShoppingCart,
    Home,
    LayoutGrid,
    Bell,
} from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { login, logout, register } from '@/routes';

import AppLogo from '../app-logo';

export default function NavBar() {
    const { auth } = usePage().props;
    const user = auth.user;

    return (
        <>
            <div className="h-16 w-full" />
            <nav className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-16 px-5 border-b border-border bg-card">
                <div className="flex items-center justify-between w-full max-w-7xl">
                    {/* Logo */}
                    <a
                        href="/"
                        className="font-heading flex lg:flex-1 items-center gap-2 text-lg font-semibold text-primary"
                    >
                        <AppLogo />
                    </a>

                    {/* Search Bar */}
                    <div className="mx-4 hidden max-w-md flex-1 md:flex">
                        <Input
                            type="text"
                            placeholder="What are you looking for today?"
                            className="w-full"
                        />
                    </div>

                    {/* Navigation & Actions */}
                    <div className="flex flex-1 items-center justify-end gap-2">
                        {/* Home */}
                        <Button variant="ghost" size="icon" asChild>
                            <a href="/">
                                <Home className="size-5" />
                                <span className="sr-only">Home</span>
                            </a>
                        </Button>
                        {/* Categories */}
                        <Button variant="ghost" size="icon" asChild>
                            <a href="/categories">
                                <LayoutGrid className="size-5" />
                                <span className="sr-only">Categories</span>
                            </a>
                        </Button>
                        {/* Cart/Wishlist */}
                        <Button variant="ghost" size="icon" asChild>
                            <a href="/cart">
                                <ShoppingCart className="size-5" />
                                <span className="sr-only">Cart</span>
                            </a>
                        </Button>
                        {/* Notifications */}
                        <Button variant="ghost" size="icon">
                            <Bell className="size-5" />
                            <span className="sr-only">Notifications</span>
                        </Button>
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Avatar className="h-8 w-8 cursor-pointer">
                                        <AvatarImage
                                            src={user.avatar}
                                            alt={user.name}
                                        />
                                        <AvatarFallback>
                                            {user.name
                                                .split(' ')
                                                .map((chunk) => chunk[0])
                                                .join('')
                                                .slice(0, 2)
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="min-w-48">
                                    <DropdownMenuLabel>
                                        <div>
                                            <span className="truncate text-sm font-medium text-foreground">
                                                {user.name}
                                            </span>
                                            <p className="truncate text-xs text-muted-foreground">
                                                {user.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>Profile</DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Your Orders
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Transaction History
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>Settings</DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild variant="destructive">
                                        <Link
                                            className="block w-full cursor-pointer"
                                            href={logout()}
                                            as="button"
                                            method="post"
                                        >
                                            Logout
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <div className="ml-1 flex items-center gap-2">
                                <Button variant="default" asChild>
                                    <Link href={login()}>Login</Link>
                                </Button>
                                <Button variant="outline" asChild>
                                    <Link href={register()}>Register</Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
