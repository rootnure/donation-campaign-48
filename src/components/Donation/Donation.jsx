import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonatedListCard from "../DonatedListCard/DonatedListCard";


const Donation = () => {

    const data = useLoaderData();

    const donatedIds = ["2", "5", "7", "12", "9"];

    const donatedFundList = data.filter(donated => donatedIds.includes(donated.id + ''));

    console.log(donatedFundList);

    const [loadDonatedListLength, setLoadDonatedListLength] = useState(donatedFundList.length >= 4 ? 4 : donatedFundList.length);

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <section className="flex flex-col justify-center items-center text-center min-h-[350px]">
                {donatedFundList.length ? '' : <h2 className="text-5xl text-gray-300 font-bold">Oops... No Donation Yet</h2>}
                <div className="grid grid-cols-2 gap-4">
                    {
                        donatedFundList.slice(0, loadDonatedListLength).map(donated => <DonatedListCard
                            key={donated.id}
                            donated={donated}></DonatedListCard>)
                    }
                </div>
                {loadDonatedListLength <= 4 ? <button onClick={() => setLoadDonatedListLength(donatedFundList.length)} className="btn bg-green-700 hover:bg-gray-200 font-bold normal-case text-white hover:text-green-700 px-8 my-6">See All</button> : ""}
            </section>
        </main>
    );
};

export default Donation;