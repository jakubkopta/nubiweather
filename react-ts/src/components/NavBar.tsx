import nubisoftLogo from "../assets/nubisoft.svg";

const NavBar = () => {
    return (
        <div className="flex items-center absolute top-0 left-0 w-full h-1/4 bg-cyan-950">
            <a className="p-5" href="https://nubisoft.io/" target="_blank">
                <img src={nubisoftLogo} className="" alt="Nubisoft logo"/>
            </a>
            <h1 className="p-5 text-4xl sm:text-6xl text-gray-300">NubiWeather</h1>
        </div>
    )
}

export default NavBar;