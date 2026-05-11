import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Wallet, ShoppingCart, Search } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    description: string;
}

const products: Product[] = [
    {
        id: 1,
        name: 'Phone Holder Sakti',
        category: 'Other',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 29.9,
        rating: 5.0,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'Headsound',
        category: 'Music',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 12.0,
        rating: 5.0,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        name: 'Adudu Cleaner',
        category: 'Other',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 29.9,
        rating: 4.4,
        reviews: 1000,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        name: 'Smart Camera',
        category: 'Home',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 45.5,
        rating: 4.8,
        reviews: 850,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        name: 'Phone Holder Sakti',
        category: 'Other',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 29.9,
        rating: 5.0,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 6,
        name: 'Headsound',
        category: 'Music',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 12.0,
        rating: 5.0,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 7,
        name: 'Adudu Cleaner',
        category: 'Other',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 29.9,
        rating: 4.4,
        reviews: 1000,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 8,
        name: 'Smart Camera',
        category: 'Home',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, quod harum cum explicabo veniam neque molestias sapiente architecto sint provident deserunt? Dicta rem ipsum repudiandae.',
        price: 45.5,
        rating: 4.8,
        reviews: 850,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function ProductCatalog() {
    return (
        <Card className="w-full border-transparent p-4 shadow-none">
            {/* Main Content */}
            <div className="flex flex-col gap-8 md:flex-row">
                {/* Products Grid */}
                <div className="flex-1">
                    <div className="grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                className="flex cursor-pointer flex-col overflow-hidden pt-0 transition-shadow hover:shadow-sm"
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
                                    <div className="space-y-1">
                                        <CardTitle>{product.name}</CardTitle>
                                        {/* Description */}
                                        <p className="line-clamp-2 text-sm text-muted-foreground">
                                            {product.description}
                                        </p>
                                    </div>
                                    {/* Price */}
                                    <div className="text-lg font-bold text-foreground">
                                        ${product.price.toFixed(2)}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
