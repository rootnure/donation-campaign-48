import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
                <p className='text-7xl font-bold text-gray-300 flex justify-center h-[calc(100vh-100px)] items-center'>Oops!!! Page Not Found...</p>
                <Link to="/"><button className='btn border-2 border-gray-400 bg-gray-400 hover:bg-gray-100 text-white hover:text-gray-500 normal-case font-bold'>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;