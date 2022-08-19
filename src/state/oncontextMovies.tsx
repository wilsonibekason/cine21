import React, { createContext, useState, FC, useContext } from "react";
import { TodosContextState, slideProviderProps } from "./types";

const contextDefaultValues: TodosContextState = {
  todos: [],
  addTodo: () => {},
};

export const TodosContext =
  createContext<TodosContextState>(contextDefaultValues);

const TodosProvider = ({ children }: slideProviderProps) => {
  const [todos, setTodos] = useState<string[]>(contextDefaultValues.todos);

  const addTodo = (newTodo: string) => setTodos((todos) => [...todos, newTodo]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const useContextMovies = () => useContext(TodosContext);

export default TodosProvider;
