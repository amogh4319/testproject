import React from "react";
const ProductList=(props)=>{
    const handleDelete = (productId, productPrice) => {
        
        props.onDelete(productId, productPrice);
      };
    
    return(
        <div>
            <ul>
                {props.users.map((user)=>(
                    <li key={user.id}>
                        {user.itemNumber} {user.price} {user.name}
                    <button onClick={() => handleDelete(user.id, user.price)} >Delete Product</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductList