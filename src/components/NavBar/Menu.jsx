
const Menu = () => {
    return (
        <div className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded w-auto">
            <ul className="sm:flex flex-row m-2 gap-10 no-underline w-auto">
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/">ALL</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/category/clothes">Clothes</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/category/electronics">Electronics</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/category/furniture">Furniture</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/category/toys">Toys</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/category/others">Others</a></li>
            </ul>
        </div>
    )
}

export default Menu;