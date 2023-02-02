import React from 'react';
import TodoList from './../TodoList/index';
import TodoAddBtn from './../TodoAddBtn/index';

const TodoTitleArea = ({todos,setSelectTodoIndex,addTodo,deleteTodo}) => {
    return (
        <div className='titleArea'>
            <h1>Planner</h1>
            <TodoList 
            todos={todos} 
            setSelectTodoIndex={setSelectTodoIndex} 
            deleteTodo={deleteTodo}
            />
            <TodoAddBtn onClick={addTodo} />
        </div>
    );
};

export default TodoTitleArea;