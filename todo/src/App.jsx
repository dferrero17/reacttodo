import { useState, useEffect} from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState({})

  const initialTodo = 'Learn React'
  const [inputValue, setInputValue] = useState(initialTodo);
  const [nextUp, setNextUp] = useState(initialTodo);
  
  const addTodo = () => {
    setTodos({
      ...todos,
      [Date.now()]: inputValue
    })
  }

  const removeTodo = (key) => () => {
    const newTodos = { ...todos }
    delete newTodos[key]
    setTodos(newTodos)
  }

  const clearTodos = () => {
    setTodos({})
  }

  useEffect(() => {
    setNextUp(inputValue)
  }
  , [inputValue])


  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', width:'100vw'}}>
      <h1>Next Up: {nextUp}</h1>
      <ul>
        {Object.keys(todos).map((key) => (
          <li key={key}>
            <button onClick={removeTodo(key)}>X</button>
            {todos[key]}
          </li>
        ))}
      </ul>

      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <button onClick={clearTodos}>Reset</button>
    </div>
  )
}

export default App
