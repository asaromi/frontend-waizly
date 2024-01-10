import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteIcon = ({ id, popupDelete }) => {
  return (
    <button
      className="w-4 h-4 flex justify-center items-center"
      type="button"
      onClick={() => popupDelete(id)}
    >
      <FontAwesomeIcon icon={faTrash} className="w-3 h-3 text-red-700" />
    </button>
  )
}

DeleteIcon.propTypes = {
  id: PropTypes.number,
  popupDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
}

export default DeleteIcon
