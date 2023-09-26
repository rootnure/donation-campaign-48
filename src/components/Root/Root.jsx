import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <>
            <main className='container mx-auto'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;