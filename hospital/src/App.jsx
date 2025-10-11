import Home from './pages/home'
import Apropos from './pages/Apropos'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css'

  const router = createBrowserRouter([
    {
      path:'/',
      element:  <Home/>
    },
    {
      path:'/Apropos',
      element: <Apropos/>
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
