export type TodosContextState = {
  todos: string[];
  addTodo: (name: string) => void;
  currentIndex?: number | undefined;
  count: number;
};
export interface slideProviderProps {
  children: React.ReactNode;
}
