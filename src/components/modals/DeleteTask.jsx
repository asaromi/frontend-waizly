import React from 'react'
import PropTypes from 'prop-types'
import { useTaskActions } from '../../stores/taskStore'
import LoaderSpin from '../ui/LoaderSpin.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const DeleteTask = ({ id, cancelDelete }) => {
  const { getTodoTasks, removeTask } = useTaskActions()
  const [submitLoading, setSubmitLoading] = React.useState(false)

  const submitDelete = () => {
    console.log('submit delete')
    if (!id) throw new Error('id is required')

    setSubmitLoading(() => true)
    removeTask(id)
    getTodoTasks()

    setTimeout(() => {
      setSubmitLoading(() => false)
      cancelDelete()
    }, 1000)
  }

  return id && (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10"
    >
      <div className="bg-white rounded-md p-5 relative">
        <h3 className="font-bold text-lg">Are you sure?</h3>
        <p className="text-sm">You will delete this task permanently.</p>

        <button
          className="absolute top-1 right-1.5 cursor-pointer"
          onClick={cancelDelete}
        >
          <FontAwesomeIcon icon={faClose} className="w-4 h-4"/>
        </button>

        <div className="flex justify-end mt-5">
          <button
            className="bg-gray-300 text-gray-600 rounded-md px-2.5 py-1.5 ml-2"
            type="button"
            onClick={cancelDelete}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white rounded-md px-2.5 py-1.5 w-65px flex justify-center items-center"
            type="button"
            onClick={submitDelete}
          >
            {submitLoading ? <LoaderSpin /> : 'Delete'}
          </button>
        </div>
      </div>
    </div>
  )
}

DeleteTask.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf([null])]),
  cancelDelete: PropTypes.func.isRequired,
}

export default DeleteTask
