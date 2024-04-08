import { useContext } from 'react';
import { TodosContext } from '../contexts/TodoContext';
import { Link } from 'react-router-dom';


function Planning() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-3xl font-bold'> Planning Page </h1>
            <Link className='btn btn-success' to='/home'>Go to Home</Link>
        </div>
    );
}


export default Planning;