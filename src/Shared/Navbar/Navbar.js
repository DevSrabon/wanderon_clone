import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const menuItems = (
		<>
			<Link to={"/"} className="relative group">
				<li>Leh Ladakh 2023</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue-400 transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
			<Link to={"/"} className="relative group">
				<li>Spiti Valley 2023</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue-400 transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
			<Link to={"/blogs"} className="relative group">
				<li>Blogs</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-blue-400 transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
			<Link to={"/blogs"} className="relative group">
				<li>About Us</li>
				<span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-white transition-all rounded-xl duration-300 group-hover:w-full"></span>
			</Link>
		</>
	);

	return (
		<nav className="flex justify-between items-center h-[7vh] bg-transparent font-semibold sticky top-0 z-50 text-white">
			<div className="ml-[4vh]  w-[8vh]">Logo</div>
			<div className="text-[1vw]">+88-01864361681</div>
			<div>
				<ul className="uppercase flex space-x-8 pr-[15vh] cursor-pointer text-[1.8vh] ">
					{menuItems}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;
