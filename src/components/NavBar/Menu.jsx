
const Menu = () => {
    return (
        <div>
            <ul className="sm:flex flex-row m-2 gap-10 no-underline ">
                <li className="hover:font-bold hover:bg-lime-400"><a href="/">ALL</a></li>
                <li className="hover:font-bold hover:bg-lime-400"><a href="/">Clothles</a></li>
                <li className="hover:font-bold hover:bg-lime-400"><a href="/">Electronics</a></li>
                <li className="hover:font-bold hover:bg-lime-400"><a href="/">Furniture</a></li>
                <li className="hover:font-bold hover:bg-lime-400"><a href="/">Toys</a></li>
                <li className="hover:font-bold hover:bg-lime-400"><a href="/">Others</a></li>
            </ul>
        </div>
    )
}

export default Menu;