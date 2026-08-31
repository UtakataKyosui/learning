import { load, Store } from '@tauri-apps/plugin-store';
import type { Book } from "@/components/features/book/table";
import { useEffect, useState } from 'react';

export default function useLoadBookStore() {
    const [books, setBooks] = useState<Array<Book>>([]);
    const [store, setStore] = useState<Store>(null as unknown as Store);
    useEffect(() => {
        (async () => {
            const store = await load("book_store.json", {
                defaults: {
                    books: [{
                        id: "1",
                        image: "https://placehold.jp/150x150.png",
                        title: "Sample Book",
                        status: "stack"
                    },{
                        id: "2",
                        image: "https://placehold.jp/150x150.png",
                        title: "Another Sample Book",
                        status: "reading"
                    },{
                        id: "3",
                        image: "https://placehold.jp/150x150.png",
                        title: "Finished Sample Book",
                        status: "finished"
                    }] as Array<Book>
                },
                autoSave: true
            });
            const storedBooks = await store.get<Array<Book>>("books");
            if (storedBooks) {
                setBooks(storedBooks);
            }
            setStore(store);
        })();
    }, []);
    return { books, store };
}