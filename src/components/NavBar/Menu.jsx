
const Menu = () => {
    return (
        <div className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded w-auto">
            <ul className="sm:flex flex-row m-2 gap-10 no-underline w-auto">
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/category">ALL</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/item">Clothes</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/">Electronics</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/">Furniture</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/">Toys</a></li>
                <li className="sm:bg-inherit bg-slate-200 sm:rounded-none rounded hover:font-bold hover:bg-lime-400 hover:scale-110 hover:duration-150"><a href="/">Others</a></li>
            </ul>
        </div>
    )
}

export default Menu;