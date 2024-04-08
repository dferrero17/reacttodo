import { TodosContext } from '../contexts/TodoContext'
import { useContext } from 'react';
export default function TodoList() {
    const { todos, removeTodo } = useContext(TodosContext);

    return ( 
        <div className='flex flex-wrap justify-around gap-4'>
            {Object.keys(todos).map((key) => (
                <div className="shadow-xl card w-96 bg-base-100">
                  <div className="card-body">
                    <h2 className="card-title">{todos[key]}</h2>
                    <div className="justify-end card-actions">
                      <button className="btn btn-primary" onClick={removeTodo(key)} >Done</button>
                    </div>
                  </div>
                </div>
              ))}
      </div>
     )
}

