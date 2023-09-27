import { useEffect, useState } from 'react';
import DonationCard from '../DonationCard/DonationCard';
import PropTypes from 'prop-types';


const AvailableDonations = ({searchText}) => {

    const [allDonation, setAllDonation] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllDonation(!searchText || searchText.toLowerCase() === 'a' || searchText.toLowerCase() === 'all' ? data : data.filter(singleData => singleData?.category.toLowerCase().includes(searchText.toLowerCase()))));
    }, [searchText])

    return (
        <section className='my-16'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    allDonation.map(donation => <DonationCard
                        key={donation.id}
                        donation={donation}></DonationCard>)
                }
            </div>
        </section>
    );
};

AvailableDonations.propTypes = {
    searchText: PropTypes.string
}

export default AvailableDonations;