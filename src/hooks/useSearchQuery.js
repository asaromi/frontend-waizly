import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebounceSearch } from './useDebounce'
import { useTaskActions } from '../stores/taskStore'

const useSearchQuery = () => {
  const { getTodoTasks } = useTaskActions()
  const [search, setSearch] = React.useState('')
  const [searchLoading, setSearchLoading] = React.useState(false)
  const [, setSearchParams] = useSearchParams()
  useDebounceSearch({
    delay: 1500,
    value: search,
    fn: () => {
      setSearchParams({ q: search })
      setSearchLoading(() => false)
      getTodoTasks(search)
    }
  })

  return {
    search,
    setSearch,
    searchLoading,
    setSearchLoading,
  }
}

export default useSearchQuery
