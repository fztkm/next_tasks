import EditTaskForm from '@/components/EditTaskForm/EditTaskForm';
import { TaskDocument } from '@/models/task';
import React from 'react'

interface Params {
  params: {id: string};
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
      cache: 'no-store',
  });
  if (response.status !== 200) {
      throw new Error('Error fetching task');
  }
  const data = await response.json();
  return data.task as TaskDocument;
}

const EditTaskPage = async({params}: Params) => {
  const task = await getTask(params.id);
  console.log(task)
  return (
    <div className='flex flex-col justify-center py-20'>
        <h2 className='text-center text-2xl font-bold'>Edit Task</h2>
        <EditTaskForm />
    </div>
  )
}

export default EditTaskPage