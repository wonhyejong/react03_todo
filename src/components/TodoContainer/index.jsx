import React from 'react';

const TodoContainer = ({todo,setTodo}) => {
    return (
        <div className='todoContainer'>
            <div>
                <input 
                type="text"
                className='todoTitle'
                value={todo.title}
                 />
            </div>
            <div>
                <textarea value={todo.content} />

            </div>
        </div>
    );
};

export default TodoContainer;