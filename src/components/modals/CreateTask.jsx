import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

import InputText from '../form/InputText'
import SelectInput from '../form/SelectInput'
import LoaderSpin from '../ui/LoaderSpin'
import useForm from '../../hooks/useForm'
import { useTaskActions } from '../../stores/taskStore'
import { TASK_PROGRESS } from '../../utils/constants'

const CreateTask = ({ progress, show, toggleShow }) => {
  const { addTask } = useTaskActions()
  const initialValues = {
    title: '',
    description: '',
    progress: progress || TASK_PROGRESS.TODO.VALUE,
  }

  const handleSubmit = (values) => {
    const title = values?.title || undefined
    const description = values?.description || undefined
    const progress = values?.progress || TASK_PROGRESS.TODO.VALUE
    addTask({ title, description, progress })
  }

  const closeModal = () => {
    toggleShow(false)
  }

  const {
    values,
    submitLoading,
    handleChange,
    formSubmit,
  } = useForm({ initialValues, handleSubmit, closeModal })

  return show && (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-10 transition-colors ease-in-out duration-1000"
    >
      <div className="w-1/3 bg-white rounded-md p-5 transition-all ease-in-out decoration-700">
        <div className="relative">
          <h2 className="font-bold text-lg text-center mb-4">Create new task</h2>

          <button
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => toggleShow(false)}
          >
            <FontAwesomeIcon icon={faClose} className="w-6 h-6"/>
          </button>
        </div>

        <form onSubmit={formSubmit}>
          <div className="w-full justify-center space-y-3">
            <div className="w-full grid grid-cols-3 gap-x-3">
              <InputText
                label="Title"
                name="title"
                className={progress !== undefined && "col-span-2" || "col-span-3"}
                placeholder="Title"
                value={values.title}
                onChange={handleChange}
              />

              {progress !== undefined && (
                <SelectInput
                  label="Progress"
                  name="progress"
                  options={Object.values(TASK_PROGRESS)}
                  value={values.progress}
                  onChange={handleChange}
                />
              )}
            </div>

            <InputText
              className="w-full"
              label="Description"
              name="description"
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-end">
            <button
              className={`w-78.75px bg-blue-400 text-white px-4 mt-5 pt-1 pb-1.5 rounded float-end font-semibold ${submitLoading && 'pointer-events-none h-75'}`}
              disabled={submitLoading}
              type="submit"
            >
              {submitLoading ? (<LoaderSpin />) : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

CreateTask.propTypes = {
  progress: PropTypes.number,
  show: PropTypes.bool.isRequired,
  toggleShow: PropTypes.func.isRequired,
}

export default CreateTask
