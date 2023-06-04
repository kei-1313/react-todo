import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

  //プロップスでtoggleTodo関数を渡しているので、引数にtodoのidを渡して、ここで使える
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  }


  return (
    <div className='text-center text-base'>
      <label className=''>
        <input type="checkbox" name="" id="" checked={todo.completed} readOnly onChange={handleTodoClick}/>
      </label>
      {todo.name}
    </div>
  )
}

export default Todo