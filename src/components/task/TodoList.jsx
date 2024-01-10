import React from 'react'
import PropTypes from 'prop-types'
import TodoCardLoader from './TodoCardLoader.jsx'
import TodoCard from './TodoCard.jsx'

const TodoList = ({ isLoading, data, togglePopupDelete }) => (
  <>
    {isLoading && (
      <>
        <TodoCardLoader/>
        <TodoCardLoader/>
      </>
    ) || data.map((task) => (
      <TodoCard
        key={task.id}
        {...task}
        togglePopupDelete={togglePopupDelete}
      />
    ))}
  </>
)

TodoList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  togglePopupDelete: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
}

export default TodoList
