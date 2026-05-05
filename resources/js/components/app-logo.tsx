import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo({ collapsed = false }: { collapsed?: boolean }) {
    if (collapsed) {
        return (
            <div className="flex aspect-square w-full items-center justify-center rounded-md bg-primary text-sidebar-primary-foreground">
                <AppLogoIcon className="size-5 text-primary-foreground" />
            </div>
        );
    }
    return (
        <>
            <div className="flex aspect-square size-5 items-center justify-center rounded-md text-sidebar-primary-foreground">
                <AppLogoIcon />
            </div>
            <div className="grid flex-1 text-left text-base">
                <span className="truncate leading-tight font-semibold">
                    ShopHub
                </span>
            </div>
        </>
    );
}
