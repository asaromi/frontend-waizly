import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className="w-full h-16 bg-white fixed top-0 left-0 flex items-center justify-between pr-4">
      <div className="flex items-center space-x-5 h-full">
        <button
          className="text-gray-600 focus:outline-none bg-gray-800 h-full w-fit p-4"
          // onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} className="w-8 h-8" color="white" />
        </button>
        <h1 className="text-gray-900 font-bold text-3xl">
          Todo App - React
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  toggleSidebar: PropTypes.func,
}

export default Header
