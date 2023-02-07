import './Item.css';

const Item = ({ item }) => {


    return (

        <main className="ProductItem">

            <a href={`/item/${item.id}`}>
                <img src={item.img} alt={item.id} />
            </a>

            <div className="productInfo">
                <p>${item.price}</p>
                <p>{item.title}</p>
            </div>
        </main>
    )

}

export default Item;