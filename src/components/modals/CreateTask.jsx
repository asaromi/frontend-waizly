import React from 'react'
import { useFormik } from 'formik'
import InputText from '../form/InputText'
import { useTaskActions } from '../../stores/taskStore'
import { TASK_PROGRESS } from '../../utils/constants.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import SelectInput from '../form/SelectInput.jsx'
import PropTypes from 'prop-types'

const CreateTask = ({ progress }) => {
  const { addTask, getTodoTasks } = useTaskActions()
  const [showCreateModal, setShowCreateModal] = React.useState(false)
  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      progress: progress || TASK_PROGRESS.TODO.VALUE,
    },
    onSubmit: handleSubmit,
  })

  function handleSubmit(values) {
    console.group('submit form')
    console.log(values)

    const title = values?.title || undefined
    const description = values?.description || undefined
    const progress = values?.progress || TASK_PROGRESS.TODO.VALUE

    console.log({ title, description, progress })
    addTask({ title, description, progress })
    getTodoTasks()

    formik.resetForm()
    setShowCreateModal(() => false)
    console.groupEnd()
  }

  async function handleInput(e) {
    await formik.setFieldValue(e.target.name, e.target.value)
  }

  async function handleSelect(e) {
    await formik.setFieldValue(e.target.name, parseInt(e.target.value))
    console.log(formik.values[e.target.name])
  }

  return (
    <>
      <button
        className="bg-blue-400 text-white px-3 pt-1 pb-1.5 rounded text-sm"
        type="button"
        onClick={() => setShowCreateModal(() => true)}
      >
        Add New Task
      </button>

      {showCreateModal && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 transition-colors ease-in-out duration-1000"
          >
            <div className="w-1/3 bg-white rounded-md p-5 transition-all ease-in-out decoration-700">
              <div className="relative">
                <h2 className="font-bold text-lg text-center mb-4">Create new task</h2>

                <button
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => setShowCreateModal(() => false)}
                >
                  <FontAwesomeIcon icon={faClose} className="w-6 h-6"/>
                </button>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="w-full justify-center space-y-3">
                  <div className="w-full grid grid-cols-3 gap-x-3">
                    <InputText
                      label="Title"
                      name="title"
                      className={progress !== undefined && "col-span-2" || "col-span-3"}
                      placeholder="Title"
                      value={formik.values.title}
                      onChange={handleInput}
                    />

                    {progress !== undefined && (
                      <SelectInput
                        label="Progress"
                        name="progress"
                        options={Object.values(TASK_PROGRESS)}
                        value={formik.values.progress}
                        onChange={handleSelect}
                      />
                    )}
                  </div>

                  <InputText
                    className="w-full"
                    label="Description"
                    name="description"
                    placeholder="Description"
                    value={formik.values.description}
                    onChange={handleInput}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-blue-400 text-white px-4 mt-5 pt-1 pb-1.5 rounded float-end font-semibold"
                    type="submit"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  )
}

CreateTask.propTypes = {
  progress: PropTypes.number,
}

export default CreateTask
