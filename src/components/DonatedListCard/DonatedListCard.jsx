import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedListCard = ({ donated }) => {

    const { id, title, category, image, color, donation_amount } = donated;
    const { text_and_btn_bg, category_bg, card_bg } = color;

    return (
        <div className="card card-compact flex-row rounded">
            <figure className='w-5/12 md:w-4/12'>
                <img src={image.thumbnail} alt={`Thumbnail of ${title} donation`} className='rounded rounded-r-none h-full w-full' />
            </figure>
            <div style={{ backgroundColor: `${card_bg}` }} className="card-body text-left space-y-0 rounded rounded-s-none w-7/12 md:w-8/12">
                <div>
                    <p style={{ backgroundColor: `${category_bg}`, color: `${text_and_btn_bg}` }} className='px-2 py-1 h-fit w-fit rounded flex items-center'>{category}</p>
                </div>
                <h2 className="card-title">{title}</h2>
                <p style={{ color: `${text_and_btn_bg}` }} className='font-bold'>${donation_amount}</p>
                <div className="card-actions">
                    <Link to={`/donation-details/${id}`}>
                        <button
                            style={{ backgroundColor: `${text_and_btn_bg}` }}
                            className="px-3 py-1 mt-4 rounded text-lg text-white font-semibold normal-case">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DonatedListCard.propTypes = {
    donated: PropTypes.object.isRequired
}

export default DonatedListCard;