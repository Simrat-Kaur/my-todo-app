import React, { ChangeEvent, useState } from "react";
import { TodoListItem } from "./TodoListItem";
import { DeleteTodo, Todo } from "../interfaces/Todo";
import { ToggleTodo } from "../interfaces/Todo";
import { isCommaListExpression } from "typescript";

interface Props {
    todos: Todo[],
    toggleTodo: ToggleTodo
    deleteTodo: DeleteTodo
}

const TodoList: React.FC<Props> = ({todos,toggleTodo,deleteTodo}) =>{
    return (
        <ul>
            {todos.map((todo)=>(
                <TodoListItem todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            ))}
        </ul>
    )
};

export default TodoList;
