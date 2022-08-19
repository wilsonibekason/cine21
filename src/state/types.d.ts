export type TodosContextState = {
  todos: string[];
  addTodo: (name: string) => void;
  currentIndex?: number | undefined;
  count: number;
  slideRef: null | object;
};
export interface slideProviderProps {
  children: React.ReactNode;
}
interface ClassAttributes<T> extends Attributes {
  slideRef?: LegacyRef<T> | undefined;
}
