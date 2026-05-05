import { ShoppingBag } from 'lucide-react';

export default function AppLogoIcon({ className = '' }: { className?: string } = {}) {
    return (
        <ShoppingBag className={`text-primary ${className}`} />
    );
}
