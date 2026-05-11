import { Head } from '@inertiajs/react';
import { ImageOff, PlusCircle } from 'lucide-react';
import ProductCatalogDrawer from '@/components/product-catalog-drawer';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

type Product = {
    id: number;
    product_name: string;
    category: string;
    price: number;
    stock: number;
    images?: {
        image_path: string;
        is_primary: boolean;
    }[];
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
});

const getPrimaryImage = (images?: Product['images']) => {
    if (!images || images.length === 0) {
        return null;
    }

    return images.find((image) => image.is_primary) ?? images[0];
};

export default function ProductCatalog({ products }: { products: Product[] }) {
    return (
        <>
            <Head title="Product Catalog" />
            <div className="p-4 md:p-6">
                <Card className="gap-4">
                    <CardHeader className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="space-y-0">
                            <CardTitle className="text-xl">
                                Product Catalog
                            </CardTitle>
                            <CardDescription>
                                Manage your listed products and monitor stock.
                            </CardDescription>
                        </div>
                        <ProductCatalogDrawer />
                    </CardHeader>

                    <CardContent>
                        {products.length === 0 ? (
                            <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed py-12 text-center">
                                <PlusCircle className="size-9 text-muted-foreground" />
                                <p className="text-sm text-muted-foreground">
                                    No products yet. Click Add New Product to
                                    create your first listing.
                                </p>
                            </div>
                        ) : (
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-20">
                                            Image
                                        </TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead className="text-right">
                                            Price
                                        </TableHead>
                                        <TableHead className="text-right">
                                            Stock
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>

                                <TableBody>
                                    {products.map((product) => {
                                        const primaryImage = getPrimaryImage(
                                            product.images,
                                        );

                                        return (
                                            <TableRow key={product.id}>
                                                <TableCell>
                                                    {primaryImage ? (
                                                        <img
                                                            src={`/storage/${primaryImage.image_path}`}
                                                            alt={
                                                                product.product_name
                                                            }
                                                            className="size-12 rounded-lg object-cover"
                                                        />
                                                    ) : (
                                                        <div className="flex size-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                                                            <ImageOff className="size-4" />
                                                        </div>
                                                    )}
                                                </TableCell>

                                                <TableCell className="font-medium">
                                                    {product.product_name}
                                                </TableCell>

                                                <TableCell>
                                                    <Badge variant="secondary">
                                                        {product.category}
                                                    </Badge>
                                                </TableCell>

                                                <TableCell className="text-right font-medium">
                                                    {currencyFormatter.format(
                                                        Number(product.price),
                                                    )}
                                                </TableCell>

                                                <TableCell className="text-right">
                                                    <Badge
                                                        variant={
                                                            product.stock > 0
                                                                ? 'outline'
                                                                : 'destructive'
                                                        }
                                                    >
                                                        {product.stock > 0
                                                            ? `${product.stock} in stock`
                                                            : 'Out of stock'}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

ProductCatalog.layout = {
    title: 'Product Catalog',
    href: '/dashboard/products',
};
