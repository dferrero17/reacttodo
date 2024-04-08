export default function TodoList({todos, removeTodo}) {
    return ( 
        <div className='flex flex-wrap justify-around gap-4'>
            {Object.keys(todos).map((key) => (
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title">{todos[key]}</h2>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary" onClick={removeTodo(key)} >X</button>
                    </div>
                  </div>
                </div>
              ))}
      </div>
     )
}

