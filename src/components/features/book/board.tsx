import { FileTextIcon} from "lucide-react";
import {
  Attachment,
  AttachmentContent,
  AttachmentDescription,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import useLoadBookStore from "@/hooks/use-load-book-store";
import { Link } from "@tanstack/react-router";

export default function BookBoard() {

    const { books, store } = useLoadBookStore();

    return (
        <section className="flex gap-2 mt-5 flex-wrap">
            {books.map((book) => (
                <Link to={"/book/$postId"} params={{ postId: book.id }} key={book.id} >
                    <Attachment key={book.id} orientation="vertical" className="basis-[40vw]">
                        <AttachmentMedia variant="image">
                            {book.image ? (
                                <img src={book.image} alt={book.title} className="w-16 h-16 object-cover rounded" />
                            ) : (
                                <FileTextIcon className="w-16 h-16 text-muted-foreground" />
                            )}
                        </AttachmentMedia>
                        <AttachmentContent>
                            <AttachmentTitle>{book.title}</AttachmentTitle>
                            <AttachmentDescription>{book.status}</AttachmentDescription>
                        </AttachmentContent>
                    </Attachment>
                </Link>
            ))}
        </section>
    )

}