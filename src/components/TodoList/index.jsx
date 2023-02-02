import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({todos,setSelectTodoIndex,deleteTodo}) => {
  
    return (
        <div>
          {
            todos.map((todo,index)=>{
                console.log(index)
                return(
                  
                    <TodoItem 
                    key={index} 
                    index={index}
                    onClick = {()=>{
                        setSelectTodoIndex(index)
                    }}
                    onClickDelete={(e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        deleteTodo(index)
                    }}
                    >
                        {todo.title}
                   </TodoItem>
                )
            })
          }
        </div>
    );
};

export default TodoList;