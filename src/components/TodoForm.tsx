import React, { useEffect, useState } from "react";
import { AddTodo } from "../interfaces/Todo";
import { css } from '@emotion/css'

// export const TodoForm = () => {
//   return (
//     <form>
//       <input placeholder="Add Todo"/>
//       <button>Add</button>
//     </form>
//   );
// };
interface Props{
    addTodo: AddTodo;
}

export const TodoForm: React.FC <Props>= ({ addTodo }) => {
    const [task, setTask] = useState<string>('');
    const [date, setDate] = useState<string>('');

    const curDate = new Date ();
    let todayDate = curDate.getDate();
    let month = curDate.getMonth() + 1;
    let year = curDate.getFullYear();
    let currentDate = year + "-" + month + "-" + todayDate;

    return(
    <>
        <h3 className={css`
            font-family: "Dancing Script", cursive;
            text-align: left;
            font-size: 20px;
            color: #335c62;
            font-weight: 700;
            margin-left: 20px;
        `}>Add New Task</h3>
        <form className={css`
            margin-left: 20px;
        `}>
            <input type="text" placeholder="New task" value={task}
                className={css`
                    width: 20%;
                    height: 40px;
                    color: #5c5c5c;
                    border: 1px solid #dcdce6;
                    border-radius: 8px;
                    padding: 0 24px;
                    margin-right: 10px;
                `}
                onChange = {(e) => {
                    setTask(e.target.value)
                }}
            />
            <input type="Date" value= {date.toString()}
                id="inputDate"
                className={css`
                    width: 20%;
                    height: 40px;
                    color: #5c5c5c;
                    border: 1px solid #dcdce6;
                    border-radius: 8px;
                    padding: 0px 24px;
                    margin-right: 10px;
                    margin-top: 10px;
                `}
                onChange = {(e) => {
                    if (e.target.value.toString() < currentDate){
                        alert("Please select present or future Date"); 
                    }
                    else{
                        setDate(e.target.value.toString())
                     }
                }}              
            />
        
            {task && date && <button type="submit"
                className={css`
                    width: 20%;
                    height: 40px;
                    border: 1px solid #dcdce6;
                    border-radius: 8px;
                    background-color: #59a2ad;
                    color: #fff;
                    cursor: pointer;
                    margin-top:10px;       
                `}
                onClick={(e) => {
                    e.preventDefault();
                    addTodo(task,date);
                    setTask('');
                    setDate('');
                    }}>Add Task
            </button>}
        </form>
    </>
    );
};