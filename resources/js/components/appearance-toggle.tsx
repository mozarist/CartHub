import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import { useAppearance, toggleAppearance } from '@/hooks/use-appearance';

export default function AppearanceToggle() {
    const { resolvedAppearance } = useAppearance();

    const isDark = resolvedAppearance === 'dark';

    return (
        <Tooltip>
            <TooltipTrigger>
                <Button
                    variant="ghost"
                    size="icon"
                    className="group h-9 w-9 cursor-pointer"
                    onClick={() => toggleAppearance()}
                    aria-label={isDark ? 'Switch to light' : 'Switch to dark'}
                >
                    {isDark ? (
                        <Sun className="!size-5 opacity-80 group-hover:opacity-100" />
                    ) : (
                        <Moon className="!size-5 opacity-80 group-hover:opacity-100" />
                    )}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{isDark ? 'Light mode' : 'Dark mode'}</p>
            </TooltipContent>
        </Tooltip>
    );
}
