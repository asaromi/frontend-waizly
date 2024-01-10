import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({ className = "w-full", options = [], name, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={name} className="pl-1 text-sm">{props.label}</label>

      <select
        className="w-full border-2 border-gray-400 rounded px-2 py-1 focus:outline-none focus:border-blue-400"
        name={name}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option?.value || option.VALUE}
            value={option?.value || option.VALUE}
          >
            {option?.label || option.LABEL}
          </option>
        ))}
      </select>
    </div>
  )
}

SelectInput.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]),
  onChange: PropTypes.func,
}

export default SelectInput
