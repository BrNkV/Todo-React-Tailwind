import React from 'react';
import ToDoItem from './item/ToDoItem';

const todos = [
    {
        id: 1,
        title: 'some todo 1',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'some todo 2',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'some todo 3 ',
        isCompleted: false,
    },
]

const Home = () => {
    return (
        <div className="bg-gray-900 h-screen text-white">
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

export default Home;
