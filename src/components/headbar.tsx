import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export default function HeadBar() {
    const {theme,themeChange} = useTheme();

    return (
        <nav className="relative fixed flex items-center justify-between rounded-lg border bg-muted p-3">
            <h3 className="text-lg font-semibold">
                HeadBar
            </h3>

            <Button onClick={themeChange}>
                {theme ? <Moon/> : <Sun/>}
            </Button>
        </nav>
    );
}