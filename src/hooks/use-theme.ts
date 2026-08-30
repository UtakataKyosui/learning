import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";

export function useTheme() {
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

    return {theme,themeChange}
}