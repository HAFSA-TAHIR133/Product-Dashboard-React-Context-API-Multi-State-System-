import { useState } from 'react';
import {useProductContext} from '../contexts/productContext'
import { useThemeContext } from '../contexts/themeContext';
import {useNewProductCountContext} from '../contexts/newProductCountContext'

function NewProduct(){
    const {productItem,setProductItem} =useProductContext();
    const [newProduct,setNewProduct]=useState("");
    const [newProductPrice,setNewProductPrice]=useState("");

    const {newProductCount,setNewProductCount} = useNewProductCountContext();
    const {theme}  = useThemeContext();
    const nextId = productItem.length+1;
    const handleSubmit=(e)=>{
        e.preventDefault();

        const product={
            id:nextId,
            name:newProduct,
            price:newProductPrice
        }

        setProductItem((prev)=> [...prev,product]);
        setNewProductCount(newProductCount +1);
        setNewProduct("");
        setNewProductPrice("");
    }
    return(
        <>
            <div className={`new-product theme-setting ${theme}`}>
                {console.log(nextId)}
                <form onSubmit={handleSubmit}>
                    <label>Enter Product Name:</label>
                    <input type='text' placeholder='Enter Product Name' value={newProduct} onChange={(e)=> setNewProduct(e.target.value)}/>
                    <label>Enter Product Price:</label>
                    <input type='number' placeholder='Enter Product Price' value={newProductPrice} onChange={(e)=> setNewProductPrice(e.target.value)}/>
                    <button type='submit'>Add Product</button>
                </form>
            </div>
        </>
    );
};
export default NewProduct;