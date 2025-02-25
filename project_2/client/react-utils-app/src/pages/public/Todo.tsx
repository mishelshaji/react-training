import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../state/store.ts";
import {useEffect} from "react";
import {fetchToDoList} from "../../state/todoSlice.ts";

function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todos);

    useEffect(() => {
        dispatch(fetchToDoList())
    }, [dispatch]);

    return (
        <>
            <h1 className={'text-center text-4xl'}>Todo List</h1>
            {todos.loading && <div>Loading...</div>}
            {todos.error && <div>{todos.error}</div>}
            <ul>
                {todos.items.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Todo
