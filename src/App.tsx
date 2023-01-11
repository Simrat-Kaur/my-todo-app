import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import { TodoForm } from './components/TodoForm';
import { DeleteTodo, Todo } from './interfaces/Todo';
import { AddTodo } from "./interfaces/Todo";
import { ToggleTodo } from "./interfaces/Todo";
import { css } from '@emotion/css'

const defaultTodos: Todo[] = [];

const App = () => {
  //const [todos, setTodos] = useState(defaultTodos);
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    //console.log(storedodos);
    if (storedTodos) {
      return JSON.parse(storedTodos);
    } else {
      return [];
    }
});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo: AddTodo = (task: string, date:string) => {
    const uniqueId = todos.length + 1;
    const newTodo = {uniqueId ,task, isCompleted: false, endDate:date};
    setTodos([...todos, newTodo]);
  };

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo: Todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo: DeleteTodo = (id : number) => {
    console.log("j");
    console.log(typeof todos);
    const removeItem = todos.filter((todo: any) => {
      return todo.uniqueId !== id;
      console.log("hi");
    });
    setTodos(removeItem);
  }

  return (
    <div className={css`
      justify-content: center;
      align-items: center;
      background-color: #f5f5f5;
      font-family: "Lato", sans-serif;
    `}>
      <h1 className={css`
        font-family: "Dancing Script", cursive;
        text-align: center;
        margin-bottom: 50px;
        font-size: 45px;
        color: #335c62;
        font-weight: 700;
    `}>Simrat's TODO App</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};

export default App;
