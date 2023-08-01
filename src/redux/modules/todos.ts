import shortid from "shortid";
import { Todo } from "../../interfaces/Todo";

// action value(휴먼에러 방지)
const ADD_TODO = "todos/ADD_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;
const SWITCH_TODO = "todos/SWITCH_TODO" as const;

// action creator
export const addTodo = (payload: Todo) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload: string) => {
  return { type: REMOVE_TODO, payload };
};

export const switchTodo = (payload: string) => {
  return { type: SWITCH_TODO, payload };
};

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof switchTodo>;

const initialState: Todo[] = [
  {
    id: shortid.generate(),
    title: "제목",
    body: "내용",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "제목",
    body: "내용",
    isDone: true,
  },
];

const todos = (state = initialState, action: TodosAction): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case SWITCH_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    default:
      return state;
  }
};

export default todos;
