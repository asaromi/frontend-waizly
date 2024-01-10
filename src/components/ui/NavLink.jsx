import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const NavLink = ({ isActive, path, routeName }) => {
  return (
    <Link
      className={`text-white flex items-center py-2 px-4 hover:bg-gray-700 rounded ${isActive ? 'bg-gray-700' : ''}`}
      to={path}
    >
      {routeName}
    </Link>
  )
}

NavLink.propTypes = {
  isActive: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
}

export default NavLink
