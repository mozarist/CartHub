import {
    ShoppingCart,
    Home,
    LayoutGrid,
    Bell,
    User,
    Package,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
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
import AppLogo from '../app-logo';

export default function NavBar() {
    return (
        <>
            <div className="h-16 w-full" />
            <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background px-4 backdrop-blur md:px-8">
                {/* Logo */}
                <a
                    href="/"
                    className="font-heading flex flex-1 items-center gap-2 text-lg font-semibold text-primary"
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
                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="h-8 w-8 cursor-pointer">
                                <AvatarImage
                                    src="https://ui-avatars.com/api/?name=Mozarist"
                                    alt="Profile"
                                />
                                <AvatarFallback>MO</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-48">
                            <DropdownMenuLabel>
                                <div>
                                    <span className="truncate text-sm font-medium text-muted-foreground">
                                        Mozarist
                                    </span>
                                    <p className="truncate text-xs text-muted-foreground">
                                        azzammozarist@gmail.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Your Orders</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Transaction History
                                </DropdownMenuItem>
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        </>
    );
}
