import { useState, useContext } from "react";
import { context } from "../Context/CartContext";
import './ItemCount.css';

const ItemCount = ({ handleAdd }) => {
    const [counter, setCounter] = useState(1);
    const {removeCart} = useContext(context);

    const addItem = () =>{
            setCounter(counter + 1);
        
    }
     const restItem = () =>{
            setCounter(counter - 1);
        
    }
 const handleConfirm = () => {
   handleAdd(counter);
 }
 const secondNewRemovecart = () => {
  removeCart(counter)
 }

  return (
    <div className='counterItem'>
      <div className="counterItem-button">
         <button onClick={restItem}>
               -
         </button>
         <span>{counter}</span>
            <button onClick={addItem}>
                  +
             </button>
      </div>
             <div className="counterConfirmButton">
              <button className="" onClick={handleConfirm}>Confirm</button>
             </div>
</div>
  )
}

export default ItemCount;