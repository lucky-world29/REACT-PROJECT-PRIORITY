import { useDispatch, useSelector } from 'react-redux';
import './_products.scss';
import productSlice from '../../Redux/Product/productSlice';
import { useEffect } from 'react';
import { getProducts } from '../../Redux/Product/productAction';

const Products = ()=>{
    
    const productData = useSelector(productSlice.getInitialState) || [];
    // console.log(productData);
    const cart = useSelector(state => state.cr);
    const dispatch = useDispatch;

    console.log(cart);
    

    // useEffect(()=>{
    //     dispatch(getProducts());
    // },[]);

    const addToCart = (itemData)=>{
        // console.log(itemData);
        dispatch(addToCart(itemData));
    };
    // console.log(cart);
    


    return(
        <div className='products-container'>
            {
                productData.products.map((product,index)=>{
                    return(
                        <div className='mx-5 p-3 product-card' key={product.id || index}>
                            <div className='product-image-container'>
                                <img src={require('../../assets/images/shop/'+product.img)}/>
                            </div>
                            <div className='product-info'>
                                <h5> <a href='#'>{product.pName}</a> </h5>
                                <p className='product-price'> ${product.price} </p>
                            </div>
                            <div className='my-3' onClick={()=>addToCart(product)}>
                                <div className='cart-button'>
                                    <div className='cart-icon-container'>
                                    <i className='fa fa-shopping-cart mx-4'></i>
                                    </div>
                                    <div className='cart-text-container mx-3'>
                                    <p>Add to Cart</p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products;


