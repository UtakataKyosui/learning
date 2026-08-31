import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { MoveLeftIcon } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'

export const Route = createFileRoute('/book/$postId')({
  component: RouteComponent,
})

function RouteComponent() {
    const {postId} = Route.useParams()

  return (
    <div>
      
      Hello "/book/{postId}"!
    </div>
  )
}

