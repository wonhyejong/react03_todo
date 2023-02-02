import React from 'react';
import TodoList from './../TodoList/index';
import TodoAddBtn from './../TodoAddBtn/index';

const TodoTitleArea = ({todos}) => {
    return (
        <div className='titleArea'>
            <h1>Planner</h1>
            <TodoList todos={todos} />
            <TodoAddBtn />
        </div>
    );
};

export default TodoTitleArea;