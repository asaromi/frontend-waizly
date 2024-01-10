import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { useTaskActions } from '../../../stores/taskStore'
import { TASK_PROGRESS } from '../../../utils/constants'

const MarkIcon = ({ id, isSelect }) => {
  const { filterTasks, updateTaskProgress } = useTaskActions()

  const completeTask = () => {
    const progress = isSelect ? TASK_PROGRESS.TODO.VALUE : TASK_PROGRESS.COMPLETED.VALUE
    updateTaskProgress({ id, progress })
    filterTasks()
  }

  return (
    <button
      className="w-4 h-4 flex justify-center items-center border-2 border-gray-700 rounded-2"
      type="button"
      onClick={completeTask}
    >
      {isSelect && <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />}
    </button>
  )
}

MarkIcon.propTypes = {
  id: PropTypes.number.isRequired,
  isSelect: PropTypes.bool,
}

export default MarkIcon
