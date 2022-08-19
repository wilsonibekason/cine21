export interface RefObject<T> {
  readonly current: T | null;
}

export type TodosContextState = {
  todos: string[];
  addTodo: (name: string) => void;
  currentIndex: number;
  count: number;
  slideRef: object | RefObject;
};
export interface slideProviderProps {
  children: React.ReactNode;
}
interface ClassAttributes<T> extends Attributes {
  slideRef?: LegacyRef<T> | undefined;
}
