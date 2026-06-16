import {useProductContext} from '../contexts/productContext';
import { useState } from 'react';
import {useActivityContext} from '../contexts/activityContext';
import {useThemeContext} from '../contexts/themeContext';
import {useAuthnContext} from '../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import '../App.css'

function Home(){
    const {theme}=useThemeContext();
    const {user} =useAuthnContext();
    const navigate =useNavigate();

    
    const {productItem,setProductItem}=useProductContext();
    const {activityCount, setActivityCount} =useActivityContext();
    return(
        <>{
            user.isLoggedIn && <div className={`home theme-setting ${theme}`}>
                <h1>Welcome {user.name}</h1>
                <h2>Available Products</h2>
                {productItem.map((value,index)=>(
                    <div key={index} className="product-card">
                        <p>Product Item: {value.id}</p>
                        <p>Product Name: {value.name}</p>
                        <p>Product Price: {value.price}</p>
                <div className='home-btns'>
                        <button onClick={()=> {setProductItem(prev =>[...prev,value] );
                            setActivityCount(activityCount +1 );
                            alert("Item Added Successfully!")}}>
                        Add To Cart
                        </button> 
                        <button onClick={()=> navigate("/new-product")}>Click To Add New Item</button>  
                </div>               

                    </div>  
                )
                )}
                </div>
        }
            
        </>
    );
};
export default Home;