import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import routes from '../routes.js'
import Header from './Header.jsx'

const Layout = () => {
  // const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)

  // const toggleSidebar = () => setIsOpenSidebar((prevState) => !prevState)
  // const sidebarClass = isOpenSidebar ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'

  React.useEffect(() => {
    const activeRoute = routes.find((route) => route.path === window.location.pathname)

    if (activeRoute) {
      document.title = activeRoute.meta.title
    }
  }, [])

  return (
    <div className="w-full flex pt-16">
      {/*<Sidebar isOpen={isOpenSidebar} toggleSidebar={toggleSidebar}/>*/}
      <Header />

      <main className="container mx-auto py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
