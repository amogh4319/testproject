import React,{useState} from "react";
const ProductForm=(props)=>{
    const [sellPrice,setSellPrice]=useState('');
    const [productName,setProductName]=useState('');
    const [itemNumber,setItemNumber]=useState('');

    const itemHandler=(event)=>{
        setItemNumber(event.target.value);
    }
    
    const priceHandler=(event)=>{
        setSellPrice(event.target.value);
    }
    const nameHandler=(event)=>{
        setProductName(event.target.value);
    }

    const submissionHandler=(event)=>{
        event.preventDefault();
        
        props.onSave(itemNumber,sellPrice,productName);
        setItemNumber('');
        setProductName('');
        setSellPrice('');
    }
    return(
        <div>
            <form onSubmit={submissionHandler}>
            <div><label>Product id:</label>
            <input type="number" onChange={itemHandler}/></div>
            <div>
                <label>Selling Price:</label>
                <input type="number" onChange={priceHandler}/>
            </div>
            <div>
                <label>Product Name:</label>
                <input type="text" onChange={nameHandler}/>
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>

            </form>
            
        </div>
    )
}
export default ProductForm;