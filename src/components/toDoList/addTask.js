import { useState } from 'react';
import toDoStyles from '../../styles/Todo.module.css';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button className={toDoStyles.addButton} onClick={() => {
                setText('');
                onAddTask(text);
            }}>Add</button>
        </>
    )
}
