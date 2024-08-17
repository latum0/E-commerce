import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import Land from './pages/LandingPage';
import {NavBar} from './components/navBar/NavBar'
import Man from './pages/Man';



const router = createBrowserRouter([{
  path: '/',
  element: <Land/>,
  errorElement: <div> <Link to="/"> go back to landing Page </Link>error 404</div>,
  errorBoundry: <div>error 505 </div>

},
{
  path:'/Man',
  element: <Man/>
},
{
  path: '/Man/:manId',
  element: <Man/>
}



])


createRoot(document.getElementById('root')).render(
  <StrictMode > 
    <div className="main-container">
      <NavBar/>
      <RouterProvider router={router} />
      
    </div>
    
  </StrictMode>,
)
