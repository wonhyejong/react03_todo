
import './App.css';
import { useState,useCallback } from 'react';
import { setItem, getItem } from './libs/storage';
import TodoTitleArea from './components/TodoTitleArea/index';
import TodoContainer from './components/TodoContainer';
import debounce from 'lodash.debounce';
const debouncedSetItem = debounce(setItem,5000)

function App() {
  const [todos , setTodos] = useState(getItem('todo') || []);
  const [selectTodoIndex,setSelectTodoIndex] = useState(0);


  const setTodo = useCallback((newTodo) => {
    const newTodos =[...todos]; 
    newTodos[selectTodoIndex] = newTodo ;
    setTodos(newTodos)
    debouncedSetItem('todo',newTodos) 
  },[todos,selectTodoIndex])

  const addTodo = useCallback(() => {
     const now = new Date().getTime();
      const newTodos = [
        ...todos,
        {
          title:'😊제목을 입력하세요',
          content:'해야할 일들을 기록해 보세요',
          createdAt: now,
        },
      ]
    setTodos(newTodos)
    setSelectTodoIndex(todos.length)
    debouncedSetItem('todo',newTodos) 
  },[todos])

  const deleteTodo = useCallback((index) => {
      const newTodos = [...todos] ;
      newTodos.splice(index,1);
      setTodos(newTodos)
      if(index===selectTodoIndex){
        setSelectTodoIndex(0);
      }
      debouncedSetItem('todo',newTodos)
  },[selectTodoIndex, todos])

  return (
    <div className="App">
        <TodoTitleArea 
        todos={todos} 
        setSelectTodoIndex={setSelectTodoIndex}
        selectTodoIndex={selectTodoIndex}
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
