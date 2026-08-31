import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import "../index.css";
import HeadBar from '@/components/headbar';
import BackButton from '@/components/back-button';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <main className="flex flex-col container mx-auto gap-4 p-4">
        <HeadBar />
        <BackButton />
        <Outlet />
    </main>
  )
}
