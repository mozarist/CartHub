import { Head, Link, usePage } from '@inertiajs/react';
import { dashboard, login, register } from '@/routes';
import NavBar from '@/components/blocks/navbar';

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

            <div className="flex w-svw flex-col items-center justify-center py-12">
                <p className="w-full text-center text-5xl font-medium text-foreground/75 md:text-6xl lg:text-7xl 2xl:text-8xl">
                    Buy <span className="italic font-[serif]">every</span>thing on <span className="text-foreground">ShopHub</span>
                </p>
            </div>
        </>
    );
}
