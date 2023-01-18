import { useState } from "react";
import './ItemCount.css';

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

  return (
    <div className='counterItem-button'>
                        <button onClick={() => {
                            setCounter(counter - 1)
                        }}>
                            -
                        </button>
                        <span>{counter}</span>
                        <button onClick={() => {
                            setCounter(counter + 1)
                        }}>
                            +
                        </button>

                    </div>
  )
}

export default ItemCount;