import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTodos = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialTodos = {
  todos: TTodos[];
};

const initialState: TInitialTodos = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodos>) => {
      state.todos.unshift({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },

    toggleComplete : (state, action) =>{
      const task = state.todos.find(item => item.id === action.payload);

      task!.isCompleted = !task?.isCompleted


      state.todos = state.todos.sort((a, b) => {
        return Number(a.isCompleted) - Number(b.isCompleted);
    });
    }
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
