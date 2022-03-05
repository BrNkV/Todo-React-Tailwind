import React from 'react';

const todos = [
    {
        titele: 'some todo 1',
        isCompleted: false,
    },
    {
        titele: 'some todo 2',
        isCompleted: false,
    },
    {
        titele: 'some todo 3 ',
        isCompleted: false,
    },
]

const Home = () => {
    return (
        <div className="bg-gray-900 h-screen text-white">
            {todos.map((todo) => <div>{todo.titele}</div>)}
        </div>
    );
}

export default Home;
