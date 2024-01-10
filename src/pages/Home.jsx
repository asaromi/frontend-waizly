import React from 'react'
import SearchBar from '../components/form/SearchBar'
import CreateTask from '../components/modals/CreateTask'
import DeleteTask from '../components/modals/DeleteTask'
import { useTaskActions, useTodoTasks } from '../stores/taskStore'
import useSearch from '../hooks/useSearchQuery'
import TodoCardList from '../components/task/TodoCardList'
import EditTask from '../components/modals/EditTask'
import CreateTaskButton from '../components/ui/CreateTaskButton'

const Home = () => {
  const todoTasks = useTodoTasks()
  const { filterTasks } = useTaskActions()
  const {
    search,
    searchLoading,
    setSearch,
    setSearchLoading,
  } = useSearch()
  const [popupDelete, setPopupDelete] = React.useState(null)
  const [showModalEdit, setShowModalEdit] = React.useState(false)
  const [showModalCreate, setShowModalCreate] = React.useState(false)
  const [selectedTask, setSelectedTask] = React.useState(null)

  const toggleDeletePopup = (value) => {
    setPopupDelete(() => value)
  }
  
  const toggleEditModal = (value) => {
    setShowModalEdit((prevState) => typeof value === 'boolean' ? value : !prevState)
  }

  const toggleCreateModal = (value) => {
    setShowModalCreate((prevState) => typeof value === 'boolean' ? value : !prevState)
  }

  const selectTask = (task) => {
    setSelectedTask(() => task)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const value = e.target.value
    setSearch(() => value)
    setSearchLoading(() => true)
  }

  React.useEffect(() => {
    filterTasks()
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold text-center pb-5">Todo list page</h1>
      <CreateTask show={showModalCreate} toggleShow={toggleCreateModal} />
      <EditTask show={showModalEdit} task={selectedTask} toggleShow={toggleEditModal}/>
      <DeleteTask id={popupDelete} cancelDelete={() => toggleDeletePopup(null)}/>

      {/* centering card */}
      <div className="flex flex-col justify-center items-center space-y-5 px-2.5 md:px-0">
        {/* task form */}
        <div className="w-1/3 flex flex-col justify-center items-center gap-y-2.5">
          <SearchBar className="min-w-full" name="search" value={search} onChange={handleSearch} />
          <CreateTaskButton handleClick={toggleCreateModal} />
        </div>

        {/* task list */}
        <div className="w-2/3 space-y-2.5">
          <TodoCardList
            data={todoTasks}
            isLoading={searchLoading}
            toggleDeletePopup={toggleDeletePopup}
            toggleEditModal={toggleEditModal}
            selectTask={selectTask}
          />
        </div>
      </div>
    </>
  )
}

export default Home
