import { TodosContext } from "../contexts/TodoContext"
import { useContext } from 'react';
export default function TodoControls() {
    const { inputValue, setInputValue, addTodo, clearTodos } = useContext(TodosContext);
    return (
        <div className="flex flex-col gap-4">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className="btn btn-primary" onClick={addTodo}>Add</button>
            <button className="btn btn-error" onClick={clearTodos}>Reset</button>
        </div>
    )

}

