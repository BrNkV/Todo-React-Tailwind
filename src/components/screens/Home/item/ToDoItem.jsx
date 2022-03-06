import React from 'react';
import Check from './Check';
import { BsTrash } from 'react-icons/bs'

const Todoitem = ({ todo, changeTodo }) => {
    return (
        <button className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'
            onClick={() => changeTodo(todo.id)}
        >
            <span className='flex items-center' >
                <Check isCompleted={todo.isCompleted} />
                <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
            </span>
            <BsTrash size={22} className='text-gray-900' />
        </button>
    );
}

export default Todoitem;
