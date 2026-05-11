import { PlusCircle, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ProductCatalogDrawer() {
    const [imagePreviews, setImagePreviews] = useState<
        {
            id: string;
            file: File;
            url: string;
        }[]
    >([]);

    useEffect(() => {
        return () => {
            imagePreviews.forEach((p) => URL.revokeObjectURL(p.url));
        };
    }, [imagePreviews]);

    const handleImagesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(event.target.files ?? []);

        if (files.length === 0) {
            return;
        }
        const newEntries = files.map((file) => ({
            id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
            file,
            url: URL.createObjectURL(file),
        }));

        setImagePreviews((prev) => [...prev, ...newEntries]);

        // allow selecting the same file again
        (event.currentTarget as HTMLInputElement).value = '';
    };

    const removeImage = (id: string) => {
        setImagePreviews((prev) => {
            const found = prev.find((p) => p.id === id);

            if (found) {
                URL.revokeObjectURL(found.url);
            }

            return prev.filter((p) => p.id !== id);
        });
    };

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button className="shrink-0">
                    <PlusCircle className="size-4" />
                    Add New Product
                </Button>
            </DrawerTrigger>

            <DrawerContent className="data-[vaul-drawer-direction=right]:h-[100dvh] data-[vaul-drawer-direction=right]:w-full data-[vaul-drawer-direction=right]:overflow-hidden data-[vaul-drawer-direction=right]:sm:max-w-md">
                <DrawerHeader className="border-b px-4 py-4">
                    <DrawerTitle>Add New Product</DrawerTitle>
                    <DrawerDescription>
                        Fill in the product details and upload one or more
                        images.
                    </DrawerDescription>
                </DrawerHeader>

                <form
                    onSubmit={(event) => event.preventDefault()}
                    className="flex h-full flex-col overflow-hidden"
                >
                    <div className="flex-1 overflow-y-auto px-4 py-4">
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="product_name">
                                    Product name
                                </Label>
                                <Input
                                    id="product_name"
                                    name="product_name"
                                    placeholder="Nike Air Zoom"
                                    required
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="category">Category</Label>
                                <Input
                                    id="category"
                                    name="category"
                                    placeholder="Shoes"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="grid gap-2">
                                    <Label htmlFor="price">Price</Label>
                                    <Input
                                        id="price"
                                        name="price"
                                        type="number"
                                        min="0"
                                        step="0.01"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="stock">Stock</Label>
                                    <Input
                                        id="stock"
                                        name="stock"
                                        type="number"
                                        min="0"
                                        step="1"
                                        placeholder="0"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={8}
                                    placeholder="Write a description for this product"
                                    className="flex w-full rounded-2xl border border-input bg-muted/30 px-3 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
                                />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="images">Product images</Label>
                                <p className="text-xs text-muted-foreground">
                                    (Max file size: 5MB. Allowed formats: JPG,
                                    JPEG, PNG, WEBP)
                                </p>
                                <Input
                                    id="images"
                                    name="images"
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImagesChange}
                                />
                            </div>

                            <div className="grid gap-3">
                                {imagePreviews.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                        {imagePreviews.map((p) => (
                                            <div
                                                key={p.id}
                                                className="relative overflow-visible rounded-xl border bg-muted"
                                            >
                                                <div className="aspect-square">
                                                    <img
                                                        src={p.url}
                                                        alt="Uploaded product preview"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>

                                                <div className="absolute -top-2 -right-2">
                                                    <Button
                                                        asChild
                                                        variant="destructive"
                                                        size="icon"
                                                        aria-label="Remove image"
                                                        onClick={() =>
                                                            removeImage(p.id)
                                                        }
                                                    >
                                                        <Trash2 />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <DrawerFooter className="border-t px-4 py-4">
                        <Button type="submit">Add New Product</Button>
                        <DrawerClose asChild>
                            <Button variant="outline" type="button">
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </form>
            </DrawerContent>
        </Drawer>
    );
}
