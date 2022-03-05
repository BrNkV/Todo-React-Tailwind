import React from 'react';
import Check from './Check';

const Todoitem = ({ todo }) => {
    return (
        <div>
            <Check />
            {todo.title}
        </div>
    );
}

export default Todoitem;
