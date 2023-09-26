import { useEffect, useState } from 'react';
import DonationCard from '../DonationCard/DonationCard';

const AvailableDonations = () => {

    const [allDonation, setAllDonation] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllDonation(data));
    }, [])

    return (
        <section className='my-16'>
            <div className="grid grid-cols-4 gap-4">
                {
                    allDonation.map(donation => <DonationCard
                        key={donation.id}
                        donation={donation}></DonationCard>)
                }
            </div>
        </section>
    );
};

export default AvailableDonations;