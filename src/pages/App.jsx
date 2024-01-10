import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { BrowserRouter } from '../routes'

const App = () => (
  <RouterProvider router={BrowserRouter}/>
)

export default App
