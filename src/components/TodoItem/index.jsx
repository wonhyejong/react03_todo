import React from 'react';
import './index.css';

const TodoItem = ({children,onClick,onClickDelete,isSelected}) => {
    return (
        <div onClick={onClick} className={'todoItem'+(isSelected ? ' on' : '')}>
            {children}
            <button 
            onClick={onClickDelete}
            className='delBtn'
            >Del
            </button>
        </div>
    );
};

export default TodoItem;