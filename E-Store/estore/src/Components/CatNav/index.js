
import { useSelector } from 'react-redux';
import './_cat-nav.scss';
import categorySlice from '../../store/slices/categorySlice';

const CatNav = () => {
    // Static array of categories
    const categories = useSelector(categorySlice.getInitialState);

    return (
        <div className='cat-nav-container container'>
            <ul>
                {categories.map((category, index) => (
                    <li key={index} className='list-items'><a href='#'>{category}</a></li>
                ))}
            </ul>
        </div>
    );
}

export default CatNav;
