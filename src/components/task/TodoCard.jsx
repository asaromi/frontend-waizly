import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { TASK_PROGRESS } from '../../utils/constants'
import { dummyTasks } from '../../utils/data'
import LoaderSpin from '../ui/LoaderSpin'
import MarkIcon from '../ui/icons/MarkIcon'
import DeleteIcon from '../ui/icons/DeleteIcon'
import EditIcon from '../ui/icons/EditIcon'

const TodoCard = ({ id, description, progress, title, selectTask, toggleDeletePopup, toggleEditModal }) => {
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
        <div className="w-fit flex justify-center items-center">
          <MarkIcon id={id} isSelect={isComplete} />
        </div>

        <div className="w-full">
          <h3 className={`text-lg font-bold ${completeStyle}`}>{title}</h3>
          <p className="text-base">{description}</p>
        </div>

        <div className="w-fit flex flex-col justify-between">
          <EditIcon
            showEdit={toggleEditModal}
            selectTask={() => selectTask({ id, title, description, progress })}
          />
          <DeleteIcon id={id} popupDelete={toggleDeletePopup} />
        </div>
      </div>
    </div>
  )
}

TodoCard.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  selectTask: PropTypes.func.isRequired,
  toggleDeletePopup: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
}

export default TodoCard
