import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import  Layout  from './Layout'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import User from './components/User/User.jsx'
import './index.css'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Contact from './components/contact/contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout></Layout>,
    children: [{
      path: "",
      element: <Home></Home>
    },{
      path: "about",
      element: <About></About>
    },{
      path: "contact",
      element: <Contact></Contact>
    },{
      path: "user/:id",
      element: <User></User>
    },{
      path: "github",
      element: <Github></Github>,
      loader: githubInfoLoader
    }
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
