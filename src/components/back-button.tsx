import { Link, useRouter, useRouterState } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { MoveLeftIcon } from "lucide-react";

export default function BackButton() {
    const routerState= useRouterState()
  return (
    <div>
        {routerState.location.pathname !== "/" && <Link to="/" className={`${buttonVariants({
            variant: "secondary",
            size: "sm"
        })} w-10 h-10`} viewTransition>
            <MoveLeftIcon />
        </Link>}
    </div>
    
  )
}