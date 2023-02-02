
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

  const setTodo = (newTodo) => {
    const newTodos =[...todos]; //새로운 래퍼런스로
    console.log(selectTodoIndex)
    newTodos[selectTodoIndex] = newTodo ;
    console.log(newTodo)
    setTodos(newTodos)  
  }

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        title:'😊제목을 입력하세요',
        content:'해야할 일들을 기록해 보세요'
      }

    ])
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos] ;
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
        <TodoTitleArea 
        todos={todos} 
        setSelectTodoIndex={setSelectTodoIndex}
        addTodo={addTodo}
        deleteTodo={deleteTodo}
         />
        <TodoContainer 
        todo={todos[selectTodoIndex]} 
        setTodo={setTodo} 
        />

    </div>
  );
}

export default App;
