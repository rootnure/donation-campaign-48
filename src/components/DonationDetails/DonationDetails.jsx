import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {

    const donations = useLoaderData();
    const {donationId} = useParams();

    const donation = donations.find(donation => donation.id === parseInt(donationId));

    console.log(donations, donationId, donation);

    return (
        <div>
            donation details
        </div>
    );
};

export default DonationDetails;