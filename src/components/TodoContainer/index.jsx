import React from 'react';

const TodoContainer = ({todo,setTodo}) => {
    return (
        <div className='todoContainer'>
            <div>
                <input 
                type="text"
                className='todoTitle'
                value={todo.title}
                onChange={(e)=>{
                    setTodo({
                        ...todo, //해당정보유지 
                        title:e.target.value,
                    })
                }}
                 />
            </div>
            <div>
                <textarea value={todo.content}
                onChange={(e)=>{
                    setTodo({
                        ...todo, //해당정보유지 
                        content:e.target.value,
                    })
                }}
                />

            </div>
        </div>
    );
};

export default TodoContainer;