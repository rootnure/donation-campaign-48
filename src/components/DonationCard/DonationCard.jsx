import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const {id, title, image, category, color} = donation;
    const {main, light, water} = color;

    return (
        <NavLink to={`/donation-details/${id}`} className="card card-compact rounded-md">
            <figure><img src={image.compressed} alt={`Donation Thumbnail of ${title}`} className='w-full' /></figure>
            <div style={{backgroundColor: `${water}`, color: `${main}`}} className="card-body rounded-md rounded-t-none bg-lime-600">
                <p style={{backgroundColor: `${light}`}} className="px-2 py-[2px] rounded w-fit">{category}</p>
                <h2 className="card-title">{title}</h2>
            </div>
        </NavLink>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonationCard;