import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Redirect } from 'react-router-dom';
import { setDonationsToLocalStorage } from "../../localStorage";


const handleDonationConfirmation = id => {
    setDonationsToLocalStorage(id) ? toast.success('Thank you for your donation') : toast.warn('Already donated. Thank you.');
}


const DonationDetails = () => {

    const donations = useLoaderData();
    const { donationId } = useParams();

    const donation = donations.find(donation => donation.id === +donationId);

    const { id, title, image, color, description, donation_amount } = donation;
    const { text_and_btn_bg } = color;

    return (
        <main className='container mx-auto min-h-[calc(100vh-250px)]'>
            <section className="space-y-6">
                <div className="card my-12">
                    <figure className="max-h-[500px] xl:max-h-[720px] rounded-md"><img src={image.main} alt={`Banner image of ${title}`} /></figure>
                    <div className="relative z-20">
                        <div className="card-actions bottom-0 absolute bg-[#00000099] w-full rounded-md rounded-t-none">
                            <button
                                onClick={() => handleDonationConfirmation(id)}
                                style={{ backgroundColor: `${text_and_btn_bg}` }}
                                title={`Click to donate $${donation_amount} to "${title}" fund`}
                                className="btn border-0 my-8 ms-6 hover:scale-105 text-white font-bold normal-case">Donate ${donation_amount}</button>
                        </div>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-justify">{description}</p>
                </div>
            </section>
            <section>
                <ToastContainer
                    position="top-right"
                    autoClose={3500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={true}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={true}
                    theme="colored"
                />
            </section>
        </main>
    );
};

export default DonationDetails;