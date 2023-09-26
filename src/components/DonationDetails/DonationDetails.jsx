import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {

    const donations = useLoaderData();
    const { donationId } = useParams();

    const donation = donations.find(donation => donation.id === parseInt(donationId));

    const { title, image, color, description, donation_amount } = donation;

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <section className="space-y-6">
                <div className="card my-12">
                    <figure className="max-h-[500px] rounded-md"><img src={image.main} alt={`Banner image of ${title}`} /></figure>
                    <div className="relative z-20">
                        <div className="card-actions bottom-0 absolute bg-[#00000099] w-full rounded-md rounded-t-none">
                            <button className={`btn border-0 hover:text-${color.main} my-8 ms-6 text-white font-bold normal-case bg-${color.main}`}>Donate ${donation_amount}</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-justify">{description}</p>
                </div>
            </section>
        </main>
    );
};

export default DonationDetails;