import React, { useState } from 'react';
import ToDoItem from './item/ToDoItem';

const data = [
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
        title: 'some todo 3',
        isCompleted: false,
    },
]

const Home = () => {
    const [todos, setTodos] = useState(data);

    const changeTodo = (id) => {
        const copy = [...todos];
        const current = copy.find(t => t.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    }

    const deleteTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }

    // console.log(todos);

    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">ToDo React Tailwind</h1>
            {data.map((todo) => (
                <ToDoItem key={todo.id} todo={todo}
                    changeTodo={changeTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default Home;
