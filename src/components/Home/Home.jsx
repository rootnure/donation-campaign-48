import { useState } from "react";
import AvailableDonations from "../AvailableDonations/AvailableDonations";
import Banner from "../Banner/Banner";


const Home = () => {

    const [searchText, setSearchText] = useState('');

    const handleSearch = e => {
        e.preventDefault();
        setSearchText(e.target.search.value);
    }

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <Banner
            handleSearch={handleSearch}></Banner>
            <AvailableDonations
            searchText={searchText}></AvailableDonations>
        </main>
    );
};

export default Home;