import React from 'react'

const TodoCardLoader = () => {
  return (
    <div className="min-w-96 w-full h-73.45px border border-gray-300 rounded-md p-2.5 relative -z-1">
      <div className="flex gap-x-2.5">
        <div className="w-full">
          <div className="bg-gray-300 w-1/3 h-5 mt-1 mb-2 rounded-2 animate-pulse" />
          <div className="bg-gray-300 w-2/3 h-4 mb-1 rounded-2 animate-pulse"/>
        </div>
      </div>
    </div>
  )
}

export default TodoCardLoader
