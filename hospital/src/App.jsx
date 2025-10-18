import Home from './pages/home'
import Apropos from './pages/Apropos'
import Femme from './pages/femme'
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
      path:'/femme',
      element: <Femme/>
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
