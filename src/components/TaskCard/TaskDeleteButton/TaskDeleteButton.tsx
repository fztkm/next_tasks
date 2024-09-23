import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

interface TaskDeleteButtonProps{
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({id}) => {
  return (
    <form action="">
        <button type='submit' className='hover:text-gray-700 text-lg cursor-pointer'>
            <FaTrashAlt/>
        </button>
    </form>
  )
}

export default TaskDeleteButton