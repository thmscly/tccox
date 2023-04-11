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
                    className={toDoStyles.listLabelInput}
                    value={task.text}
                    onChange={e => {
                        onChange({
                            ...task,
                            text: e.target.value
                        });
                    }} />
                <input
                    className={toDoStyles.listLabelInput}
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
                <div>
                    {task.text}
                </div>
                <div>{task.time}</div>
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
