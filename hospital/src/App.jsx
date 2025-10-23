import Home from './pages/home'
import Apropos from './pages/Apropos'
import Femme from './pages/femme'
import Mental from './pages/mental'
import Tarif from './pages/tarif'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import './App.css'

  const router = createBrowserRouter([
    {
      path:'/',
      element:  <Home/>
    },
    {
      path:'/apropos',
      element: <Apropos/>
    },
    {
      path:'/femme',
      element: <Femme/>
    },
    {
      path:'/mental',
      element: <Mental/>
    },
    {
      path:'/tarif',
      element: <Tarif/>
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
