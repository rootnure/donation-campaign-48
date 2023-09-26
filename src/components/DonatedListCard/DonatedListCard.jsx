import PropTypes from 'prop-types';

const DonatedListCard = ({ donated }) => {

    const {title, category, image, color, donation_amount} = donated;

    return (
        <div className="card card-compact flex-row rounded border-2">
            <figure className='w-6/12'><img src={image.main} alt="Shoes" className='rounded rounded-r-none h-full' /></figure>
            <div style={{backgroundColor: `${color.water}`}} className="card-body text-left">
                <p>{category}</p>
                <h2 className="card-title">{title}</h2>
                <p style={{color: `${color.main}`}}>${donation_amount}</p>
                <div className="card-actions">
                    <button style={{backgroundColor: `${color.main}`}} className="btn text-white font-bold normal-case">View Details</button>
                </div>
            </div>
        </div>
    );
};

DonatedListCard.propTypes = {
    donated: PropTypes.object.isRequired
}

export default DonatedListCard;