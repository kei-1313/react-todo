import { useState } from 'react';
import './App.css';
import TodoList from './component/TodoList';

function App() {
  const [todos, setTodos] = useState([{
    id: 1, 
    name: 'name',
    completed: false
  }]);


  return (
    <div>
      <h1 className='text-center text-2xl text-blue-400 font-bold mt-14 mb-6'>TodoList</h1>
      <input className='w-80 p-2 bg-white border-solid border-gray-400 border m-auto text-base rounded-md block mb-5'></input>
      <TodoList todos={todos} />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded m-auto block mt-5'>タスクを追加</button>
      <button className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 border border-pink-700 rounded m-auto block mt-5'>完了したタスクの削除</button>
      <div className='text-center mt-5'>残りのタスク: <span className=''>0</span></div>
      
    </div>
  );
}

export default App;
