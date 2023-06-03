import React from 'react'

const Todo = ({ todo }) => {
  return (
    <div className='text-center text-base'>
      <label className=''>
        <input type="checkbox" name="" id="" checked={todo.completed} readOnly/>
      </label>
      {todo.name}
    </div>
  )
}

export default Todo