import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const EditIcon = ({ showEdit, selectTask }) => {
  const toggleEditModal = () => {
    if (typeof showEdit === 'function') showEdit()
    if (typeof selectTask === 'function') selectTask()
  }

  return (
    <button
      className="w-5 h-5 flex justify-center items-center"
      type="button"
      onClick={toggleEditModal}
    >
      <FontAwesomeIcon icon={faEdit} className="w-4 h-4 text-blue-400" />
    </button>
  )
}

EditIcon.propTypes = {
  showEdit: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  selectTask: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
}

export default EditIcon
