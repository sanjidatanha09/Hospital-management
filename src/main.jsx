import React from 'react'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
