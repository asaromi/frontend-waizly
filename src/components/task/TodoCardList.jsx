import React from 'react'
import PropTypes from 'prop-types'
import TodoCardLoader from './TodoCardLoader'
import TodoCard from './TodoCard'

const TodoCardList = ({ isLoading, data, selectTask, toggleDeletePopup, toggleEditModal }) => (
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
        selectTask={selectTask}
        toggleDeletePopup={toggleDeletePopup}
        toggleEditModal={toggleEditModal}
      />
    ))}
  </>
)

TodoCardList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.array.isRequired,
  selectTask: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  toggleDeletePopup: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
  toggleEditModal: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])]),
}

export default TodoCardList
