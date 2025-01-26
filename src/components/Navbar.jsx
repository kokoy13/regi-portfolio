function Navbar(){
    return (
        <nav className="uppercase text-xs flex items-center font-medium justify-center mb-5">
            <ul className="flex gap-5">
                <li><a href="#explore">Explore</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>
            <div className="gap-8 items-center hidden">
                <span>regihidayatullah666@gmail.com</span>
                <a href="#contact" className="border rounded-full py-2 px-3 hover:bg-black transition-colors duration-300 ease-in-out hover:text-white">
                    <span>lets connect</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar