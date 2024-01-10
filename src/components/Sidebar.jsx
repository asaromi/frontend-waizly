import React from 'react'
import PropTypes from 'prop-types'

// import routes from '../routes'
// import NavLink from './ui/NavLink'
import Header from './Header.jsx'

const Sidebar = ({ toggleSidebar }) => {
  // const [routeList, setRouteList] = React.useState([])
  //
  // const openClass = isOpen ? 'w-64 translate-x-0' : 'w-0 -translate-x-full'

  // React.useEffect(() => {
  //   const newRoutes = routes.map((route) => {
  //     const isActive = window.location.pathname.includes(route.path)
  //     return {
  //       isActive,
  //       ...route,
  //     }
  //   })
  //
  //   setRouteList(() => newRoutes)
  // }, [])

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      {/* give sidebar with fade in transition */}

      {/*<aside*/}
      {/*  className={`absolute h-full min-h-screen bg-gray-800 top-16 left-0 z-10 transform transition-transform duration-300 ease-in-out ${openClass}`}*/}
      {/*>*/}
      {/*  <nav className={`px-4 py-2 ${isOpen && 'w-0'}`}>*/}
      {/*    <ul>*/}
      {/*      {routeList.map((route) => (*/}
      {/*        <li key={route.path}>*/}
      {/*          <NavLink isActive={route.isActive} path={route.path} routeName={route.meta?.title}/>*/}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  </nav>*/}
      {/*</aside>*/}
    </>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
}

export default Sidebar
