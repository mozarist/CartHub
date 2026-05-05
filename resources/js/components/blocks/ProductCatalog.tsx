import { useState } from 'react';
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
    Search,
    Home,
    Music,
    Smartphone,
    HardDrive,
    Sparkles,
    TrendingUp,
    Percent,
    Star,
    Truck,
    Wallet,
    ShoppingCart,
} from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
}

const categories = [
    { id: 1, name: 'All Product', icon: null, count: 32 },
    { id: 2, name: 'For Home', icon: Home, count: null },
    { id: 3, name: 'For Music', icon: Music, count: null },
    { id: 4, name: 'For Phone', icon: Smartphone, count: null },
    { id: 5, name: 'For Storage', icon: HardDrive, count: null },
    { id: 6, name: 'New Arrival', icon: Sparkles, count: null },
    { id: 7, name: 'Best Seller', icon: TrendingUp, count: null },
    { id: 8, name: 'On Discount', icon: Percent, count: null },
];

const products: Product[] = [
    {
        id: 1,
        name: 'Phone Holder Sakti',
        category: 'Other',
        price: 29.9,
        rating: 5.0,
        reviews: 1200,
        image: 'https://via.placeholder.com/280x280?text=Phone+Holder',
    },
    {
        id: 2,
        name: 'Headsound',
        category: 'Music',
        price: 12.0,
        rating: 5.0,
        reviews: 1200,
        image: 'https://via.placeholder.com/280x280?text=Headphones',
    },
    {
        id: 3,
        name: 'Adudu Cleaner',
        category: 'Other',
        price: 29.9,
        rating: 4.4,
        reviews: 1000,
        image: 'https://via.placeholder.com/280x280?text=Cleaner',
    },
    {
        id: 4,
        name: 'Smart Camera',
        category: 'Home',
        price: 45.5,
        rating: 4.8,
        reviews: 850,
        image: 'https://via.placeholder.com/280x280?text=Camera',
    },
    {
        id: 5,
        name: 'Air Purifier',
        category: 'Home',
        price: 89.99,
        rating: 4.7,
        reviews: 650,
        image: 'https://via.placeholder.com/280x280?text=Purifier',
    },
    {
        id: 6,
        name: 'Wireless Earbuds',
        category: 'Music',
        price: 49.99,
        rating: 4.6,
        reviews: 2100,
        image: 'https://via.placeholder.com/280x280?text=Earbuds',
    },
];

export default function ProductCatalog() {
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Card className="w-full rounded-3xl p-8">
            {/* Main Content */}
            <div className="flex flex-col gap-8 md:flex-row">
                {/* Sidebar Categories */}
                <div className="w-full space-y-3 md:w-56 md:flex-shrink-0">
                    <h2 className="text-lg font-semibold text-foreground">
                        Category
                    </h2>
                    <div className="space-y-2">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        setSelectedCategory(category.id)
                                    }
                                    className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors ${
                                        selectedCategory === category.id
                                            ? 'bg-primary text-primary-foreground'
                                            : 'hover:bg-secondary'
                                    }`}
                                >
                                    {Icon && (
                                        <Icon className="h-5 w-5 flex-shrink-0" />
                                    )}
                                    <span className="flex-1">
                                        {category.name}
                                    </span>
                                    {category.count && (
                                        <Badge
                                            variant="secondary"
                                            className="ml-auto"
                                        >
                                            {category.count}
                                        </Badge>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="flex-1">
                    <div className="grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                className="flex cursor-pointer flex-col overflow-hidden pt-0 transition-shadow hover:shadow-md"
                            >
                                {/* Product Image */}
                                <div className="relative aspect-square overflow-hidden bg-muted">
                                    <img
                                        src={product.image}
                                        alt={product.name + ' image'}
                                        className="h-full w-full object-cover"
                                    />
                                    <Badge className="absolute top-3 right-3 bg-background text-foreground">
                                        {product.category}
                                    </Badge>
                                </div>

                                {/* Product Info */}
                                <CardContent className="flex flex-1 flex-col gap-2">
                                    <CardTitle>{product.name}</CardTitle>

                                    {/* Price */}
                                    <div className="text-lg font-bold text-foreground">
                                        ${product.price.toFixed(2)}
                                    </div>
                                </CardContent>

                                {/* Actions */}
                                <CardFooter className="flex gap-2">
                                    <Button
                                        variant="outline"
                                        className="flex-1"
                                    >
                                        <ShoppingCart className="h-5 w-5" />
                                        Add to Cart
                                    </Button>
                                    <Button className="flex-1">
                                        <Wallet className="h-5 w-5" />
                                        Buy Now
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
