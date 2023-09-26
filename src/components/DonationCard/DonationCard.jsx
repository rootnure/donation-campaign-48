import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DonationCard = ({ donation }) => {

    const {id, title, image, category, color} = donation;
    const {main, light, water} = color;

    return (
        <NavLink to={`/donation-details/${id}`} className="card card-compact rounded-md">
            <figure><img src={image.compressed} alt={`Donation Thumbnail of ${title}`} /></figure>
            <div className={`card-body bg-${water} text-${main} rounded-md`}>
                <p className={`bg-${light} px-2 py-[2px] rounded w-fit`}>{category}</p>
                <h2 className="card-title">{title}</h2>
            </div>
        </NavLink>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object.isRequired
}

export default DonationCard;