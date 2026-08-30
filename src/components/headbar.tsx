import { useEffect, useState } from "react";
import { Card, CardTitle } from "./ui/card";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function HeadBar() {
    const [theme,setTheme] = useState(false);
    
    async function themeChange() {
        setTheme(await invoke("theme_change",{theme: !theme}))
    }

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light","dark")
        const themeMode = theme ? "dark" : "light"
        root.classList.add(themeMode)
    },[theme])

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