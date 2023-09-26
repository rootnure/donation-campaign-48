import PropTypes from 'prop-types';

const DonatedListCard = ({ donated }) => {

    const {title, category, image, color, donation_amount} = donated;

    return (
        <div className="card card-compact flex-row rounded">
            <figure className='w-4/12'><img src={image.thumbnail} alt="Shoes" className='rounded rounded-r-none h-full w-full' /></figure>
            <div style={{backgroundColor: `${color.water}`}} className="card-body text-left space-y-0 rounded rounded-s-none">
                <p style={{backgroundColor: `${color.light}`, color: `${color.main}`}} className='px-2 h-fit w-fit rounded flex items-center'>{category}</p>
                <h2 className="card-title">{title}</h2>
                <p style={{color: `${color.main}`}} className='font-bold'>${donation_amount}</p>
                <div className="card-actions">
                    <button style={{backgroundColor: `${color.main}`}} className="px-3 py-1 mt-4 rounded text-lg text-white font-semibold normal-case">View Details</button>
                </div>
            </div>
        </div>
    );
};

DonatedListCard.propTypes = {
    donated: PropTypes.object.isRequired
}

export default DonatedListCard;