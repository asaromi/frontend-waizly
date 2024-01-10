import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import { useTaskActions } from '../../../stores/taskStore.js'
import { TASK_PROGRESS } from '../../../utils/constants.js'

const CompleteIcon = ({ id, isComplete }) => {
  const { getTodoTasks, updateTaskProgress } = useTaskActions()

  const completeTask = () => {
    const progress = isComplete ? TASK_PROGRESS.TODO.VALUE : TASK_PROGRESS.COMPLETED.VALUE
    updateTaskProgress({ id, progress })
    getTodoTasks()
  }

  return (
    <button
      className="w-4 h-4 flex justify-center items-center border border-gray-700 rounded-2"
      type="button"
      onClick={completeTask}
    >
      {isComplete && <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />}
    </button>
  )
}

CompleteIcon.propTypes = {
  id: PropTypes.number.isRequired,
  isComplete: PropTypes.bool,
}

export default CompleteIcon
