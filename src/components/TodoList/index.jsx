import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({
    todos,
    setSelectTodoIndex,
    deleteTodo,
    selectTodoIndex
}) => {
  
    return (
        <div>
          { todos.map((todo,index)=>{
            console.log(todo.createdAt)
                return(
                    <TodoItem 
                    key={todo.createdAt} 
                    onClick = {()=>{
                        setSelectTodoIndex(index)
                    }}
                    onClickDelete={(e)=>{
                        deleteTodo(index);
                        e.preventDefault(); 
                        e.stopPropagation();
                    }}
                    isSelected={index===selectTodoIndex}
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