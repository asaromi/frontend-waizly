import { create } from 'zustand'
import { TASK_PROGRESS } from '../utils/constants.js'
import { dummyTasks } from '../utils/data.js'

const useTaskStore = create(
  (set) => ({
    tasks: [...dummyTasks],
    todoTasks: [],

    actions: {
      addTask: (task) => set(
        (prevState) => {
          const latestId = Math.max(...prevState.tasks.map((t) => t.id))
          const newTask = {
            ...task,
            id: task.id || latestId + 1,
          }

          setTimeout(() => {
            dummyTasks.push(newTask)
          }, 2500)

          return {
            tasks: [...prevState.tasks, newTask],
          }
        }
      ),
      removeTask: (id) => set(
        (prevState) => ({
          tasks: prevState.tasks.filter((t) => t.id !== id),
        })
      ),
      getTodoTasks: (search) => set(
        (prevState) => {
          const searchRule = (title) => !search || title.toLowerCase().includes(search.toLowerCase())

          const todoTasks = prevState.tasks.filter(
            (task) => searchRule(task.title) && [TASK_PROGRESS.TODO.VALUE, TASK_PROGRESS.COMPLETED.VALUE].includes(task.progress)
          )

          todoTasks.sort((a, b) => {
            if (a.progress === b.progress) {
              return b.id - a.id
            }

            return a.progress - b.progress
          })

          return { todoTasks }
        }
      ),
      updateTaskProgress: ({ id, progress }) => set(
        (prevState) => ({
          tasks: prevState.tasks.map((task) => {
            if (task.id === id) {
              return { ...task, progress }
            }

            return task
          })
        })
      ),
    }
  })
)

export const useTodoTasks = () => useTaskStore((state) => state.todoTasks)
export const useTasks = () => useTaskStore((state) => state.tasks)

export const useTaskActions = () => useTaskStore((state) => state.actions)
