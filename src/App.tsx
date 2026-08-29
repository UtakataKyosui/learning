import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Moon, Sun } from "lucide-react"
import "./index.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [theme,setTheme] = useState(false);

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }
  
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
    <main className="container mx-auto px-5">

     
      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
      <Button onClick={themeChange}>
        {theme ? <Moon/> : <Sun/>}
      </Button>
      
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <Input
          id="greet-input"
          className="w-64"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <Button type="submit">Greet</Button>
      </form>
      <p>{greetMsg}</p>
    </main>
  );
}

export default App;
