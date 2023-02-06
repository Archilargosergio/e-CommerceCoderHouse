import { useState } from "react";
import './ItemCount.css';

const ItemCount = ({ itemStock, handleAdd }) => {
    const [counter, setCounter] = useState(1);

    const addItem = () =>{
        if(counter < itemStock) {
            setCounter(counter + 1);
        }
    }
     const restItem = () =>{
        if(counter > 1){
            setCounter(counter - 1);
        }
    }
 const handleConfirm = () => {
   handleAdd(counter);
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