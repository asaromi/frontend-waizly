import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const DeleteIcon = ({ id, popupDelete }) => {
  const toggleDeletePopup = () => {
    if (typeof popupDelete === 'function') popupDelete(id)
  }

  return (
    <button
      className="w-5 h-5 flex justify-center items-center"
      type="button"
      onClick={toggleDeletePopup}
    >
      <FontAwesomeIcon icon={faTrash} className="w-4 h-4 text-red-700" />
    </button>
  )
}

DeleteIcon.propTypes = {
  id: PropTypes.number,
  className: PropTypes.string,
  popupDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
}

export default DeleteIcon
