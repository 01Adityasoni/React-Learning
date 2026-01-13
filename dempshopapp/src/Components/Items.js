import './Items.css'; 


function Items(props){
    const itemName = props.name;
    return(
   <p className ="paneer">{itemName}</p>
    )
}

export default Items;