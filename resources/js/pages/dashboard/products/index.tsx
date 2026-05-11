import { Head, Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';

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

export default function ProductCatalog({ products }: { products: Product[] }) {
    return (
        <>
            <Head title="Product Catalog" />

            <div className="px-6 py-4">
                <div className="mb-6 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold">Product Catalog</h1>
                    <Link
                        href="/dashboard/products/create"
                        className="inline-flex items-center gap-2 rounded-md bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700"
                    >
                        <Plus className="h-4 w-4" />
                        Add New Product
                    </Link>
                </div>

                <div className="overflow-x-auto rounded-md bg-white shadow-sm">
                    <table className="min-w-full divide-y divide-slate-100">
                        <thead className="bg-slate-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">
                                    Image
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">
                                    Name
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">
                                    Category
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">
                                    Price
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-slate-600">
                                    Stock
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {products.map((product) => {
                                const primary =
                                    product.images && product.images.length
                                        ? product.images.find(
                                              (i) => i.is_primary,
                                          ) || product.images[0]
                                        : null;
                                return (
                                    <tr key={product.id}>
                                        <td className="px-4 py-3">
                                            {primary ? (
                                                <img
                                                    src={`/storage/${primary.image_path}`}
                                                    alt={product.product_name}
                                                    className="h-12 w-12 rounded object-cover"
                                                />
                                            ) : (
                                                <div className="h-12 w-12 rounded bg-slate-100" />
                                            )}
                                        </td>
                                        <td className="px-4 py-3">
                                            {product.product_name}
                                        </td>
                                        <td className="px-4 py-3">
                                            {product.category}
                                        </td>
                                        <td className="px-4 py-3">
                                            ${product.price}
                                        </td>
                                        <td className="px-4 py-3">
                                            {product.stock}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

ProductCatalog.layout = {
    title: 'Product Catalog',
    href: '/dashboard/products',
};
