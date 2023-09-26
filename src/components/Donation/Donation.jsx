import { useEffect, useState } from "react";
import DonatedListCard from "../DonatedListCard/DonatedListCard";
import { getStoredDonations } from "../../localStorage";
import { useLoaderData } from "react-router-dom";


const Donation = () => {

    const donations = useLoaderData() || fetch('data.json').then(res=>res.json()).then(data => data);

    const [donatedList, setDonatedList] = useState([]);

    useEffect(() => {
        const storedDonationIds = getStoredDonations();

        if (donations.length > 0) {
            const donated = donations.filter(donate => storedDonationIds.includes(donate.id));
            setDonatedList(donated);
        }

    }, [donations]);

    const [loadDonatedListLength, setLoadDonatedListLength] = useState(4);
    const [isSeeAllVisible, setIsSeeAllVisible] = useState(true);

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <section className="flex flex-col justify-center items-center text-center min-h-[350px] my-12">
                {donatedList.length ? '' : <h2 className="text-5xl text-gray-300 font-bold">Oops... No Donation Yet</h2>}
                <div className="grid grid-cols-2 gap-4 w-full">
                    {
                        donatedList.slice(0, loadDonatedListLength).map(donated => <DonatedListCard
                            key={donated.id}
                            donated={donated}></DonatedListCard>)
                    }
                </div>
                {isSeeAllVisible && <button
                    onClick={() => {setLoadDonatedListLength(donatedList.length), setIsSeeAllVisible(false)}}
                    className="btn bg-green-700 hover:bg-gray-200 font-bold normal-case text-white hover:text-green-700 px-8 my-6">See All</button>}
            </section>
        </main>
    );
};

export default Donation;