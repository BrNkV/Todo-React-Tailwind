import React from 'react';
import Check from './Check';
import { BsTrash } from 'react-icons/bs'

const Todoitem = ({ todo, changeTodo, deleteTodo }) => {
    return (
        <div className='flex items-center justify-between mb-4 rounded-2xl bg-gray-800 p-5 w-full'
            onClick={() => changeTodo(todo.id)}
        >
            <button className='flex items-center' >
                <Check isCompleted={todo.isCompleted} />
                <span className={`${todo.isCompleted ? 'line-through' : ''}`}>{todo.title}</span>
            </button>
            <button
                onClick={() => deleteTodo(todo.id)}
            >
                <BsTrash size={22} className='text-gray-600 hover:text-red-500 transition-colors ease-in-out duration-300' />
            </button>
        </div>
    );
}

export default Todoitem;
