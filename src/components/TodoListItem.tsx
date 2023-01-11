import React, { useEffect, useState } from 'react';
import { DeleteTodo, Todo } from '../interfaces/Todo';
import { css } from '@emotion/css'
import { ToggleTodo } from "../interfaces/Todo";
import { FaTrash, FaExclamationTriangle } from "react-icons/fa"

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo
    deleteTodo: DeleteTodo
}

// export const TodoListItem = ({todo} : Props) => {
//   return <li>{todo.task}</li>;
// };

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo }) => {
    //const [isCompleted, setIsCompleted] = useState(false);
    const curDate = new Date ();
    let date = curDate.getDate();
    let month = curDate.getMonth() + 1;
    let year = curDate.getFullYear();
    let currentDate = year + "-" + month + "-" + date;
    //document.getElementById('#inputdate')?.setAttribute('min', currentDate);
    return (
    // <li>{todo.task}</li>
    <table className={css`
        border-collapse: collapse;
        width: 100%;
        border: 1px solid #858f87;
        margin: 5px 0 5px 0;
        padding: 20px;
    `}>
        {/* <thead>
            <tr>
                <th>Completion</th>
                <th>Task</th>
                <th>End Date</th>
            </tr>
        </thead> */}
        <tbody>
            <tr style={{background: todo.isCompleted ? '#335c62' : '#dce0dd'}}>
                <td style={{width: '5%', pointerEvents: currentDate > todo.endDate ? 'none' : undefined}}>
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => {
                            toggleTodo(todo);
                        }}
                    />
                </td>
                <td style={{border: '1px solid #858f87', textAlign: 'left', width: '45%'}}>
                    <h3 style={{textDecoration: todo.isCompleted || currentDate > todo.endDate ? 'line-through' : undefined}}>{todo.task}</h3>
                    {currentDate > todo.endDate && <div><h4 style={{color: 'red'}}><FaExclamationTriangle/>Oh no! Task Date has been exceeded</h4></div>}
                </td>
                <td style={{textDecoration: todo.isCompleted || currentDate > todo.endDate ? 'line-through' : undefined, border: '1px solid #858f87', textAlign: 'center', width: '5%'}}>{todo.endDate}</td>
                <td style={{border: '1px solid #858f87', textAlign: 'center', width: '5%'}}>
                    <button type="button"
                        onClick={(e) =>{
                            e.preventDefault();
                            deleteTodo(todo.uniqueId);
                            console.log("clicked");               
                        }}><FaTrash/>
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
    );
};

