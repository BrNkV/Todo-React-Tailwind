import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Check = ({ isCompleted }) => {
    return (
        <div className='border-2 rounded-md border-pink-400 w-7 h-7'>
            {isCompleted &&
                <BsCheck size={24} className='text-gray-900' />
            }
        </div>
    );
}

export default Check;
