import { useState, useRef } from 'react';
import './App.css';
import TodoList from './component/TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();

  const handleAddTask = () => {
    const name = todoNameRef.current.value;
    if(name === '') return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id )
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

 const handleClearTask = () => {
  const newTodos = todos.filter((todo) => !todo.completed);
  setTodos(newTodos);
 }


  return (
    <div>
      <h1 className='text-center text-2xl text-blue-400 font-bold mt-14 mb-6'>TodoList</h1>
      <input ref={todoNameRef} className='w-80 p-2 bg-white border-solid border-gray-400 border m-auto text-base rounded-md block mb-5'></input>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <button onClick={ handleAddTask }  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-auto block mt-5'>タスクを追加</button>
      <button onClick={ handleClearTask } className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-pink-700 rounded m-auto block mt-5'>完了したタスクの削除</button>
      <div className='text-center mt-5'>残りのタスク: <span className=''>{todos.filter((todo) => !todo.completed).length}</span></div>
      
    </div>
  );
}

export default App;
