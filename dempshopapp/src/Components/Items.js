import './Items.css'; 
import { useState } from 'react';


function Items(props){
    const [itemName, setItemName] = useState(props.name);
    function chickHandler(){
        setItemName("popcorn");
        console.log("Item added to cart");
    }
    return(
        <div>
   <p className ="paneer">{itemName}</p>
   <button onClick={chickHandler}>Add to cart</button> 
   </div>
    )
}

export default Items;