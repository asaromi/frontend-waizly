import React from 'react'
import PropTypes from 'prop-types'

const CreateTaskButton = ({ handleClick }) => {
  return (
    <button
      className="bg-blue-400 text-white px-3 pt-1 pb-1.5 rounded text-sm"
      type="button"
      onClick={handleClick}
    >
      Add New Task
    </button>
  )
}

CreateTaskButton.propTypes = {
  handleClick: PropTypes.func,
}

export default CreateTaskButton
