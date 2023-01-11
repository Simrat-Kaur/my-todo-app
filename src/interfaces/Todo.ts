export interface Todo {
    uniqueId: number;
    task : string;
    isCompleted: boolean;
    endDate: string;
}

export type AddTodo = (task: string, date: string) => void;

export type ToggleTodo = (selectedTodo: Todo) => void;

export type DeleteTodo = (id : number) => void;