import React from 'react'
import SearchBar from '../components/form/SearchBar.jsx'
import CreateTask from '../components/modals/CreateTask'
import DeleteTask from '../components/modals/DeleteTask'
import { useTaskActions, useTodoTasks } from '../stores/taskStore'
import useSearch from '../hooks/useSearchQuery'
import TodoList from '../components/task/TodoList'

const Home = () => {
  const todoTasks = useTodoTasks()
  const { getTodoTasks } = useTaskActions()
  const {
    search,
    searchLoading,
    setSearch,
    setSearchLoading,
  } = useSearch()
  const [popupDelete, setPopupDelete] = React.useState(null)

  const togglePopupDelete = (value) => {
    setPopupDelete(() => value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const value = e.target.value
    setSearch(() => value)
    setSearchLoading(() => true)
  }

  React.useEffect(() => {
    getTodoTasks()
  }, [])

  return (
    <>
      <h1 className="text-2xl font-bold text-center pb-5">Todo list page</h1>
      <DeleteTask id={popupDelete} cancelDelete={() => togglePopupDelete(null)}/>

      {/* centering card */}
      <div className="flex flex-col justify-center items-center space-y-5 px-2.5 md:px-0">
        {/* task form */}
        <div className="w-1/3 flex flex-col justify-center items-center gap-y-2.5">
          <SearchBar className="min-w-full" name="search" value={search} onChange={handleSearch} />
          <CreateTask />
        </div>

        {/* task list */}
        <div className="w-2/3 space-y-2.5">
          <TodoList togglePopupDelete={togglePopupDelete} data={todoTasks} isLoading={searchLoading}/>
        </div>
      </div>
    </>
  )
}

export default Home
