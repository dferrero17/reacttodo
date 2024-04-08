export default function TodoControls({ inputValue, setInputValue, addTodo, clearTodos }) {
    return (
        <div className="flex flex-col gap-4">
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <button className="btn btn-primary" onClick={addTodo}>Add</button>
            <button className="btn btn-error" onClick={clearTodos}>Reset</button>
        </div>
    )

}

