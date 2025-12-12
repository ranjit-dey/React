import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    editingId: null,
    editingText: '',
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                // text: action.payload.text,
                text: action.payload,
            }

            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            // if the removed todo was being edited, clear editing state
            if (state.editingId === action.payload) {
                state.editingId = null
                state.editingText = ''
            }
        },
    },
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
