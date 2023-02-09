import './Item.css';

const Item = ({ secondProduct }) => {


    return (

        <main className="ProductItem">

            <a href={`/item/${secondProduct.id}`}>
                <img src={secondProduct.img} alt={secondProduct.id} />
            </a>

            <div className="productInfo">
                <p>${secondProduct.price}</p>
                <p>{secondProduct.title}</p>
            </div>

        </main>
    )

}

export default Item;