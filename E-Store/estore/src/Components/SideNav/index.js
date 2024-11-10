import { useDispatch, useSelector } from 'react-redux';
import './_side-nav.scss';
import accordionSlice from '../../Redux/Accordion';
import { useEffect } from 'react';
import { getCategories } from '../../Redux/Category/actions';

const SideNav = () =>{

    const accordionData = useSelector(state=>state.categoryReducer.categories);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCategories());
    },[]);

    return(
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            
            <div className='accordion'>
                {
                    accordionData.map((accordionCategory,key)=>{
                        if(accordionCategory.parent_category_id === null){
                            return(
                                <div className='accordion-item individual-category' key={accordionCategory.id || key}> 
                                <div className='accordion-header'>
                                    <button className='accordion-button' data-bs-target={"#collapse"+key} data-bs-toggle="collapse">
                                        <div className='category-title'>
                                            <a href='#'>{accordionCategory.category}</a>
                                            {/* Here i del .category and the code run correctly but I don't know how  */}
                                        </div>
                                    </button>
                                </div>
                                <div className='accordion-collapse collapse show ' id={"collapse"+key}>
                                    <div className='accordion-body'>
                                        <ul>
                                            {
                                                accordionData.map((subCategory,subKey)=>{
                                                    if (accordionCategory.id === subCategory.parent_category_id) {
                                                        return <li key={subCategory.id || subKey} className='sub-items'><a href='#'>{subCategory.category} </a></li>
                                                    }
                                                })
                                                
                                            }   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            )   
                        }
                        
                    })
                }
               
            </div>

        </div>
    )
}
export default SideNav;