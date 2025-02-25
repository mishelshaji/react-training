import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export interface Todo{
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}

export interface TodoState{
    items: Todo[];
    loading: boolean;
    error: string | null;
}

const initialState: TodoState = {
    items: [],
    loading: false,
    error: null
}

export const fetchToDoList = createAsyncThunk<Todo[]>('todo/fetchToDoList', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
});

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchToDoList.pending, (state)=> {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchToDoList.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchToDoList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    }
})

export const {actions} = todoSlice;
export default todoSlice.reducer;
