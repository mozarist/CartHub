import { Card, CardContent, CardFooter, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import {
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

const products: Product[] = [
    {
        id: 1,
        name: 'Phone Holder Sakti',
        category: 'Other',
        price: 29.9,
        rating: 5.0,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 2,
        name: 'Headsound',
        category: 'Music',
        price: 12.0,
        rating: 5.0,
        reviews: 1200,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 3,
        name: 'Adudu Cleaner',
        category: 'Other',
        price: 29.9,
        rating: 4.4,
        reviews: 1000,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 4,
        name: 'Smart Camera',
        category: 'Home',
        price: 45.5,
        rating: 4.8,
        reviews: 850,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 5,
        name: 'Air Purifier',
        category: 'Home',
        price: 89.99,
        rating: 4.7,
        reviews: 650,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        id: 6,
        name: 'Wireless Earbuds',
        category: 'Music',
        price: 49.99,
        rating: 4.6,
        reviews: 2100,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function ProductCatalog() {
    return (
        <Card className="w-full p-4 border-transparent shadow-none">
            {/* Main Content */}
            <div className="flex flex-col gap-8 md:flex-row">
                {/* Products Grid */}
                <div className="flex-1">
                    <div className="grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
