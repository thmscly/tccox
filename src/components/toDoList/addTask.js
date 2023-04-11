import { useState } from 'react';
import toDoStyles from '../../styles/Todo.module.css';

export default function AddTask({ onAddTask }) {
    const [text, setText] = useState('');
    const [time, setTime] = useState('');
    return (
        <div className={toDoStyles.addTask}>
            <input
                placeholder="Go flying"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <input
                placeholder="12:30"
                value={time}
                onChange={e => setTime(e.target.value)}
            />
            <button className={toDoStyles.addButton} onClick={() => {
                setText('');
                setTime('')
                onAddTask(text, time);
            }}>+ Add</button>
        </div>
    )
}
