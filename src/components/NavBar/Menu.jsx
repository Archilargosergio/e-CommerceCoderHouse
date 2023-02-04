import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded w-auto">
            <ul className="sm:flex flex-row m-2 gap-10 no-underline w-auto">
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><Link to="/">ALL</Link></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><Link to="/category/clothes">Clothes</Link></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><Link to="/category/electronics">Electronics</Link></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><Link to="/category/furniture">Furniture</Link></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><Link to="/category/toys">Toys</Link></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><Link to="/category/others">Others</Link></li>
            </ul>

        </div>
    )
}

export default Menu;