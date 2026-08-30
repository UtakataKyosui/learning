import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./index.css";
import HeadBar from "./components/headbar";
import BookBoard from "./components/features/book/board";
import type { Book } from "./components/features/book/board";
import { columnHelper, columns } from "./components/features/book/board";


function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  const [books, setBooks] = useState<Book[]>([
        {
            id: "1",
            title: "Sample Book",
            status: "stack"
        },
        {
            id: "2",
            title: "Another Book",
            status: "reading"
        },
        {
            id: "3",
            title: "Finished Book",
            status: "finished"
        }
    ]);
  

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }
  return (
    <main className="container mx-auto px-5">
      <HeadBar  />  
      <BookBoard columns={columns} data={books} />
    </main>
  );
}

export default App;
