import { TASK_PROGRESS } from './constants'

export const dummyTasks = [
  {
    id: 1,
    description: 'Learning React is fun, right?',
    title: 'Learn React',
    progress: TASK_PROGRESS.TODO.VALUE,
  },
  {
    id: 2,
    description: 'Learning Redux is fun, right?',
    title: 'Learn Redux',
    progress: TASK_PROGRESS.IN_PROGRESS.VALUE,
  },
  {
    id: 3,
    description: 'Learning React Router is fun, right?',
    title: 'Learn React Router',
    progress: TASK_PROGRESS.IN_REVIEW.VALUE,
  },
  {
    id: 4,
    description: 'Learning React Testing Library is fun, right?',
    title: 'Learn React Testing Library',
    progress: TASK_PROGRESS.COMPLETED.VALUE,
  },
]
