import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const { id, title, image, category, color } = donation;
    const { text_and_btn_bg, category_bg, card_bg } = color;

    return (
        <NavLink to={`/donation-details/${id}`} className="card card-compact rounded-md">
            <figure><img src={image.compressed} alt={`Donation Thumbnail of ${title}`} className='w-full' /></figure>
            <div style={{ backgroundColor: `${card_bg}`, color: `${text_and_btn_bg}` }} className="card-body rounded-md rounded-t-none bg-lime-600">
                <div className=''>
                    <p style={{ backgroundColor: `${category_bg}` }} className="px-2 py-[2px] rounded w-fit">{category}</p>
                </div>
                <div className='flex-grow flex items-center'>
                    <h2 className="card-title text-base md:text-lg lg:text-xl">{title}</h2>
                </div>
            </div>
        </NavLink>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonationCard;