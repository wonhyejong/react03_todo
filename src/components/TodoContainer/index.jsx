import React from 'react';
import './index.css';

const TodoContainer = ({todo,setTodo}) => {
    console.log(todo);
    if(todo === undefined){
        return(
            <div className='emptyContainer'>
                <h1>작성된 todo 리스트가 없습니다.</h1>
                <h2>할일을 추가해 보세요</h2>
            </div>
        )
    }
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
                className="todoContent"
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