import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchBar = ({ className, ...props }) => {
  return (
    <div className={`flex ${className} relative`}>
      <FontAwesomeIcon icon={faSearch} className="absolute top-2 left-2 h-4.5 text-gray-700"/>

      <input
        className="w-full border-2 border-gray-400 rounded pl-8 pr-2 py-1 focus:outline-none focus:border-blue-400"
        type="search"
        placeholder="Search task"
        {...props}
      />
    </div>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default SearchBar
