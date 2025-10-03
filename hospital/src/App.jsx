import Home from './pages/home'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css'

  const router = createBrowserRouter([
    {
      path:'/',
      element:  <Home/>
    },
    {
      path:'/blog',
      element: <div className="">Blog</div>
    },
    {
      path:'/services',
      element: <div className="">services</div>
    }
  ])

function App() {
  

  return (
    <>
       <RouterProvider router={router}/>
    </> 
  )
}

export default App
