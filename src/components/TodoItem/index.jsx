import React from 'react';

const TodoItem = ({children,onClick,onClickDelete}) => {
    return (
        <div onClick={onClick}>
            {children}
            <button onClick={onClickDelete}>Del</button>
        </div>
    );
};

export default TodoItem;