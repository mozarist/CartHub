import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import NavBar from '@/components/blocks/navbar';
import ProductCatalog from '@/components/blocks/ProductCatalog';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <>
            <NavBar />
            <Head title="Welcome" />

            {/* main content */}
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 py-12 px-5">
                <p className="w-full text-center text-5xl font-medium text-foreground/80 md:text-6xl lg:text-7xl 2xl:text-8xl">
                    Buy <span className="font-[serif] italic">every</span>thing
                    on <span className="text-primary">ShopHub</span>
                </p>
                <ProductCatalog />
            </div>
        </>
    );
}
