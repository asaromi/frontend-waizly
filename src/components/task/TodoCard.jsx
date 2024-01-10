import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { TASK_PROGRESS } from '../../utils/constants.js'
import { dummyTasks } from '../../utils/data.js'
import LoaderSpin from '../ui/LoaderSpin.jsx'
import CompleteIcon from '../ui/icons/CompleteIcon.jsx'
import DeleteIcon from '../ui/icons/DeleteIcon.jsx'

const TodoCard = ({ id, description, title, progress, togglePopupDelete }) => {
  const isComplete = progress === TASK_PROGRESS.COMPLETED.VALUE
  const completeStyle = isComplete && 'text-gray-300 line-through' || ''

  const [newTaskLoading, setNewTaskLoading] = React.useState(true)
  const loadingStyle = newTaskLoading && 'pointer-events-none' || ''
  useEffect(() => {
    const ids = dummyTasks.map((task) => task.id)
    const isExist = ids.includes(id)
    const timeout = !isExist ? 1500 : 0

    setTimeout(() => {
      setNewTaskLoading(() => false)
    }, timeout)
  }, [])

  return (
    <div
      className={`min-w-96 w-full border border-gray-300 rounded-md p-2.5 relative -z-1 ${loadingStyle}`}
    >
      {newTaskLoading && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-gray-300 bg-opacity-50 flex justify-center items-center"
        >
          <LoaderSpin className="w-8 h-8 text-gray-700" />
        </div>
      )}

      <div className="flex gap-x-2.5">
        <div className="w-full">
          <h3 className={`text-lg font-bold ${completeStyle}`}>{title}</h3>
          <p className="text-base">{description}</p>
        </div>

        <div className="w-fit flex flex-col justify-between">
          <CompleteIcon id={id} isComplete={isComplete} />
          <DeleteIcon id={id} popupDelete={togglePopupDelete} />
        </div>
      </div>
    </div>
  )
}

TodoCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  togglePopupDelete: PropTypes.func.isRequired,
}

export default TodoCard
