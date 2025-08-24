import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.tsx'
import UserAuth from './components/UserAuth.tsx'

export function Layout(){
  return(
    <div>
      <h1> Hii i am Layout</h1>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/layout",
    element:<Layout/>
  },
  {
    path:"/auth",
    element:<UserAuth/>
  }
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={router} />
  </>,
)
