import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {
    const [hamburger, setHamburger] = useState(true)
    const [navbar, setNavbar] = useState(false)
	const menuItems = (
		<>
			<Link to={"/"} className="relative group">
				<li>Leh Ladakh 2023</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
			<Link to={"/"} className="relative group">
				<li>Spiti Valley 2023</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
			<Link to={"/blogs"} className="relative group">
				<li>Blogs</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
			<Link to={"/blogs"} className="relative group">
				<li>About Us</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
		</>
    );
    const changeBackground = () => { 
        
        if (window.scrollY > 10) { 
            setNavbar(true)
        }
        else {
            
            setNavbar(false)
        }
        
    }
window.addEventListener('scroll', changeBackground)
	return (
		<nav
			className={`${
				navbar && "active"
			} flex flex-row justify-between items-center h-[7vh] bg-transparent duration-500 ease-linear text-white sticky top-[0vh] z-50`}>
			<div>
				<img
					src="https://www.wanderon.in/wanderon-logo.svg"
					alt=""
					className="ml-[4vh] md:ml-[4vh] w-[5vh] h-[5vh] md:w-[8vh] md:h-[8vh]"
				/>
			</div>
			<div className="text-[1vw] flex">
				<img
					src="https://www.wanderon.in/svg/nav/phone.svg"
					alt=""
					className="h-[1.3vw] mr-[1vh]"
				/>
				+88-01864361681
			</div>
			<div className="hidden lg:block">
				<ul className="uppercase flex space-x-9 pr-[18vh] cursor-pointer text-[1.8vh] ">
					{menuItems}
				</ul>
			</div>
			{/* hamburger menu icon*/}

			<div className="block lg:hidden pr-4 ">
				<div onClick={() => setHamburger((pre) => !pre)}>
					<button className={`relative ${!hamburger && "group"}`}>
						<div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent  duration-200">
							<div className="flex flex-col justify-between w-[20px] h-[16px] transform transition-all duration-300 origin-center overflow-hidden">
								<div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
								<div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
								<div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

								<div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12 ">
									<div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
									<div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
								</div>
							</div>
						</div>
					</button>
				</div>
				{/* mobile menu */}
				<div
					className={`${
						!hamburger ? " block" : "hidden"
					} "lg:hidden flex justify-center w-1/2 "`}>
					<div
						className={`${
							!hamburger ? " active" : "block"
						}  mobile-menu absolute top-23 w-1/2`}>
						<ul
							onClick={() => setHamburger((pre) => !pre)}
							className=" shadow-lg overflow-hidden leading-[10vh] md:leading-[15vh] font-semibold text-[#3a3a3a] text-[3.5vw] w-full h-[90vh]">
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white pl-4">
								<a href="https://google.com" className="block pl-7">
									Leh Ladakh 2023
								</a>
							</li>
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white pl-4">
								<a href="#" className="block pl-7">
									Spiti Valley 2023
								</a>
							</li>
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white pl-4">
								<a href="#" className="block pl-7">
									Backpacking Trips
								</a>
							</li>
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white pl-4">
								<a href="#" className="block pl-7">
									Weekend Trips
								</a>
							</li>
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white">
								<a href="#" className="block pl-11">
									Blogs <i className="fa-solid fa-chevron-down fa-2xs pt-4"></i>
								</a>
							</li>
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white pl-4">
								<a href="#" className="block pl-7">
									About Us
								</a>
							</li>
							<li className="border-b-2 border-[#c4c4c4] hover:bg-red-400 hover:text-white pl-4">
								<img
									src="https://www.wanderon.in/svg/home/cta-image.svg"
									alt=""
									className="block md:hidden h-48 pt-4"
								/>
								{/* <a href="#" className="block pl-7">
									About Us
								</a> */}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
