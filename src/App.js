
import './App.css';
import { useState } from 'react';
import TodoTitleArea from './components/TodoTitleArea/index';
import TodoContainer from './components/TodoContainer';
function App() {
  const [todos , setTodos] = useState([
    {
      title:'title1',
      content:'오늘은 목요일'
    },
    {
      title:'title2',
      content:'내일은 금요일'
    }
  ]);

  const [selectTodoIndex,setSelectTodoIndex] = useState(0);

  return (
    <div className="App">
        <TodoTitleArea todos={todos} />
        <TodoContainer todo={todos[selectTodoIndex]} setTodos={setTodos} />

    </div>
  );
}

export default App;
