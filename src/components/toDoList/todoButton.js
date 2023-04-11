import React from 'react'
import todoStyles from '../../styles/Todo.module.css'

function TodoButton({ children }) {
    return (

        <button className={todoStyles.toDoButton}>
            {children}
        </button>

    )
}

export default TodoButton