import NavBar from '../NavBar/NavBar.jsx';
const Header = () => {
    return (
        <div className=' z-10 w-full '>
            <header className=' bg-slate-700 text-center text-white sm:text-7xl text-5xl font-bold '>
                <h1>24/7 SHOP</h1>
            </header>
            < NavBar />
        </div>
    )
}

export default Header;