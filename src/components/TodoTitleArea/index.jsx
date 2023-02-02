import React from 'react';
import TodoList from './../TodoList/index';
import TodoAddBtn from './../TodoAddBtn/index';
import './index.css';
const TodoTitleArea = ({todos,setSelectTodoIndex,addTodo,deleteTodo,selectTodoIndex}) => {
    return (
        <div className='titleArea'>
            <h1>Planner</h1>
            <TodoList 
            todos={todos} 
            setSelectTodoIndex={setSelectTodoIndex} 
            selectTodoIndex={selectTodoIndex}
            deleteTodo={deleteTodo}
            />
            <TodoAddBtn onClick={addTodo} />
        </div>
    );
};

export default TodoTitleArea;