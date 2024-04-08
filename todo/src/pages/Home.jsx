import TodoList from '../components/TodoList';
import TodoControls from '../components/TodoControls';
import { useContext } from 'react';
import { TodosContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';
function Home() {
    const { nextUp } = useContext(TodosContext)
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-3xl font-bold animate-pulse'> Next Up: {nextUp}</h1>
            <TodoList />
            <TodoControls />
            <Link className='btn btn-success' to='/planning'>Go to Planning</Link>
        </div>
    );
}

export default Home;