// src/main.tsx
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultStaleTime: 5000,
  scrollRestoration: true,
  defaultViewTransition: {
    types: ({fromLocation, toLocation}) => {
      let direction = 'none'
      if (fromLocation) {
        const fromIndex = fromLocation.state.__TSR_index
        const toIndex = toLocation.state.__TSR_index

        direction = fromIndex > toIndex ? 'right' : 'left'
      }
      return [`slide-${direction}`]
    }
  }
})

// 型安全のためのモジュール宣言
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// index.html の mount 先と id を合わせてください（公式例では id="root"）
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}