import AvailableDonations from "../AvailableDonations/AvailableDonations";
import Banner from "../Banner/Banner";


const Home = () => {

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <Banner></Banner>
            <AvailableDonations></AvailableDonations>
        </main>
    );
};

export default Home;