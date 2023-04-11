import { useState } from 'react';
import toDoStyles from '../../styles/Todo.module.css'


export default function TaskList({
    tasks,
    onChangeTask,
    onDeleteTask
}) {
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task
                        task={task}
                        onChange={onChangeTask}
                        onDelete={onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({ task, onChange, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }} />
                <input
                    value={task.time}
                    onChange={e => {
                        onChange({
                            ...task,
                            time: e.target.value
                        });
                    }} />
                <button className={toDoStyles.toDoButton} onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                {task.time}
                <button className={toDoStyles.toDoButton} onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label className={toDoStyles.listLabel}>
            <input
                className={toDoStyles.checkbox}
                type="checkbox"
                checked={task.done}
                onChange={e => {
                    onChange({
                        ...task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <button className={toDoStyles.toDoButton} onClick={() => onDelete(task.id)}>
                Delete
            </button >
        </label>
    );
}
