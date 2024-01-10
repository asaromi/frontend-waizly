import React from 'react'
import PropTypes from 'prop-types'

const InputText = ({ inputClass = "w-full", className = "w-full", type = 'text', ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={props.name} className="pl-1 text-sm">{props.label}</label>
      <input
        className={`${inputClass} border-2 border-gray-400 rounded px-2 py-1 focus:outline-none focus:border-blue-400`}
        type={type}
        {...props}
      />
    </div>
  )
}

InputText.propTypes = {
  className: PropTypes.string,
  inputClass: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export default InputText
