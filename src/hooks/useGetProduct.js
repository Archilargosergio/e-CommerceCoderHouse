import {useState, useEffect} from 'react';
import {products} from '../mock/Products';

const useGetProduct = () => {
    const [ generalItem, setGeneralItem] = useState([]);

    useEffect(()=>{
        const getProducsMock = async () =>{
            return await new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 500);
            })
        }
        getProducsMock()
        .then((resolve) =>{
            setGeneralItem(resolve);
        })
        .catch((error) =>{
            console.log(error);
        })
    })
  return  {
    generalItem,
}
}

export default useGetProduct