import {useState, useEffect} from 'react';
import {products} from '../mock/Products';
import { useParams } from 'react-router-dom';

const useGetProduct = () => {
    const [ generalItem, setGeneralItem] = useState({});

    const value = useParams();
    const numberValue = parseFloat(value.id)

    useEffect(()=>{
        const getProducsMock = async () =>{
            return await new Promise((resolve, reject) => {
                const findProducts = products.find((prod) => 
                     prod.id === numberValue
                )
                setTimeout(() => {
                    resolve(findProducts);
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
    }, [numberValue])
  return (
    generalItem
  )
}

export default useGetProduct