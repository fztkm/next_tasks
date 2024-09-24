'use client';

import { deleteTask, FormState } from '@/actions/task';
import React, { useEffect } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

interface TaskDeleteButtonProps{
    id: string;
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({id}) => {
    const initialState: FormState = {error: ''};
    const [state, formAction] = useFormState(deleteTask.bind(null, id), initialState)

    useEffect(()=>{
        if(state.error !== ''){
            alert(state.error)
        }
    }, [state])

    const SubmitButton = () =>{
        const {pending} = useFormStatus();
        return (
            <button
            type='submit'
            disabled={pending}
            className='hover:text-gray-700 text-lg cursor-pointer disabled:bg-gray-400'>
                <FaTrashAlt/>
            </button>
        )
    }

    return (
        <form action={formAction}>
            <SubmitButton />
        </form>
    )
}

export default TaskDeleteButton