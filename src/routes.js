import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '/',
        Component: Home
      },
    ],
  },
  {
    path: '*',
    Component: NotFound
  },
]

export const routeNames = {
  TodoList: {
    path: '/',
    meta: {
      title: 'Todo List'
    }
  },
  Kanban: {
    path: '/kanban',
    meta: {
      title: 'Kanban Board'
    }
  },
}

export const BrowserRouter = createBrowserRouter(routes)

export default Object.values(routeNames)
