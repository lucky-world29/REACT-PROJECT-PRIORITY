import './_main-component.scss';
import SideNav from '../SideNav'
import Products from '../Products';

const MainComponent =()=>{
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-lg-2 col-md-3 col-sm-4'>
                    <SideNav/>
                </div>
                <div className='col-lg-10 col-md-9 col-sm-8'>
                    <Products/>
                </div>
                </div>
            </div>
        </>
    )
}

export default MainComponent;