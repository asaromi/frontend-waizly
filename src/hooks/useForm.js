import { useFormik } from 'formik'
import { useState } from 'react'
import { useTaskActions } from '../stores/taskStore'

const useForm = ({ initialValues, handleSubmit, closeModal }) => {
  const [submitLoading, setSubmitLoading] = useState(false)
  const { filterTasks } = useTaskActions()
  const { values, handleSubmit: formSubmit, setFieldValue, setValues, resetForm } = useFormik({
    initialValues,
    onSubmit,
  })

  function onSubmit(values) {
    setSubmitLoading(() => true)
    handleSubmit(values)

    setTimeout(() => {
      setSubmitLoading(() => false)
      closeModal()
      filterTasks()
      resetForm()
    }, 750)
  }

  function handleChange(e) {
    const { name, value } = e.target
    const newValue = name === 'progress' ? parseInt(value) : value
    setFieldValue(name, newValue)
  }

  return { submitLoading, values, formSubmit, handleChange, resetForm, setValues }
}

export default useForm
