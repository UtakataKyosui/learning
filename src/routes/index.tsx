import BookBoard from '@/components/features/book/board'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div>
     <BookBoard />
    </div>
  )
}
