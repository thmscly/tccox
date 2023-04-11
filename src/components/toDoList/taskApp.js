import { useReducer } from 'react';
import AddTask from './addTask.js';
import TaskList from './taskList.js';

function tasksReducer(tasks, action) {
    switch (action.type) {
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                time: action.time,
                done: false
            }];
        }
        case 'changed': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default function TaskApp() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleAddTask(text, time) {
        dispatch({
            type: 'added',
            id: nextId++,
            text: text,
            time: time
        });
    }

    function handleChangeTask(task) {
        dispatch({
            type: 'changed',
            task: task
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
            type: 'deleted',
            id: taskId
        });
    }

    return (
        <>
            <h2>Stuff I Gotta Do</h2>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}

let nextId = 7;
const initialTasks = [
    { id: 0, time: <time>07:45</time>, text: 'Make Bottle with Vitamins/Fe', done: true },
    { id: 1, time: <time>08:00</time>, text: 'Wake up baby', done: false },
    { id: 2, time: <time>08:05</time>, text: 'Feed Bottle', done: false },
    { id: 3, time: <time>08:15</time>, text: 'Change dipaer', done: false },
    { id: 4, time: <time>08:30</time>, text: 'Put on braces', done: false },
    { id: 5, time: <time>09:00</time>, text: 'Feed regular food', done: false },
    { id: 6, time: <time>09:45</time>, text: 'Play Time', done: false },
    { id: 7, time: <time>11:00</time>, text: 'Nap', done: false },
];
