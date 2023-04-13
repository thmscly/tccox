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

let nextId = 4;
const initialTasks = [
    { id: 0, time: '07:45', text: 'Make Bottle with Vitamins/Fe', done: false },
    { id: 1, time: '08:00', text: 'Wake up baby', done: false },
    { id: 2, time: '08:05', text: 'Feed Bottle', done: false },
    { id: 3, time: '08:15', text: 'Change dipaer', done: false },
];
