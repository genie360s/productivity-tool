// Add missing import
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Add type annotation for the task object
interface Task {
    id: string;
    task: string;
}

const TodoList = () => {
    const [tasks, setTasks] = useState<Task[]>([]); // Update the type of tasks
    const [newTask, setNewTask] = useState('');
    const [editTaskId, setEditTaskId] = useState('');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const updatedTasks = [...tasks, { id: uuidv4(), task: newTask }]; // Generate a unique id for each task
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setNewTask('');
        }
    };

    const handleToggleTask = (id: string) => {
        const updatedTasks = [...tasks];
        const index = updatedTasks.findIndex(task => task.id === id);
        if (updatedTasks[index]?.task) {
            updatedTasks[index] = updatedTasks[index].task.startsWith('✓') ? { ...updatedTasks[index], task: updatedTasks[index].task.substring(2) } : { ...updatedTasks[index], task: `✓ ${updatedTasks[index].task}` };
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    const handleDeleteTask = (id: string) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const handleEditTask = (id: string, updatedTask: string) => {
        const updatedTasks = [...tasks];
        const index = updatedTasks.findIndex(task => task.id === id);
        if (index !== -1) {
            updatedTasks[index] = { ...updatedTasks[index], task: updatedTask };
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            setEditTaskId('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            if (editTaskId) {
                handleEditTask(editTaskId, newTask);
            } else {
                handleAddTask();
            }
        }
    };

    const allTasksCompleted = tasks.every(task => task.task?.startsWith('✓')); 

    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    id='add'
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleKeyDown} // Add the keydown event listener
                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                />
            </div>
            {tasks.length === 0 ? (
                <p className="text-gray-500">Let&apos;s get you started, add some tasks please!</p>
            ) : (
                <ul className="list-disc">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center"
                            
                        >
                            {editTaskId === task.id ? (
                                <input
                                    type="text"
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(e)}
                                    className="border border-gray-300 rounded px-2 py-1 mr-2"
                                />
                            ) : (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={task.task?.startsWith('✓')}
                                        onChange={() => handleToggleTask(task.id)}
                                        className="mr-2"
                                    />
                                    <span
                                        style={{ textDecoration: task.task?.startsWith('✓') ? 'line-through' : 'none' }}
                                    >
                                        {task.task?.startsWith('✓') ? task.task.substring(2) : task.task}
                                    </span>
                                    <button
                                        onClick={() => setEditTaskId(task.id)}
                                        className={`text-blue-500 ml-2 ${task.task?.startsWith('✓') ? 'no-underline' : ''}`}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteTask(task.id)}
                                        className={`text-red-500 ml-2 ${task.task?.startsWith('✓') ? 'no-underline' : ''}`}
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            {allTasksCompleted && tasks.length > 0 && (
                <p className="text-green-500">Your tasks are completed!</p>
            )}
        </div>
    );
};

export default TodoList;
