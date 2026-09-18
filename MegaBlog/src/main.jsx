import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/sore.js'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Home, Login, Signup, AddPost, AllPosts, EditPost } from './pages/index.js'
import { AuthLayout } from './components/index.js'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App></App>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login></Login>
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup></Signup>
          </AuthLayout>
        )
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication={true}>
            <AllPosts></AllPosts>
          </AuthLayout>
        )
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication={true}>
            <AddPost></AddPost>
          </AuthLayout>
        )
      },
      {
        path: "/edit-post",
        element: (
          <AuthLayout authentication={true}>
            <EditPost></EditPost>
          </AuthLayout>
        )
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
