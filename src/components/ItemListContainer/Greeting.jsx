
const Greeting = () => {
    return (
        <div className="sm:m-0 m-10 h-auto text-center">
            <h5 className="font-bold sm:text-6xl text-2xl hover:scale-y-125 hover:duration-150 cursor-grabbing">Welcome,Bienvenue,Bienvenidos!</h5>
            <p>
                <br /> <br />
                <span>
                    This is a web shop store created in 2022 according to the incredible iniciative of CoderHouse school and his alumn <a className="hover:text-red-600 hover:font-bold" href="https://github.com/Archilargosergio">Sergio Archila.</a>
                </span>
                <br /> <br />
                <span>
                    You'll be able to buy 24/7 every day of the year and enjoy our discount program special just only available to our 24/7 shop buyers.
                </span>
                <br /> <br />
                <span>
                    Feel free to reach us out in order to look and accurate customer service.
                </span>
            </p>
        </div>
    )
}

export default Greeting;
