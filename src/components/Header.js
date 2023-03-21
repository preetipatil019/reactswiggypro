 import logo from "../assets/icon.png"
import { useState } from "react";
 import { Link } from "react-router-dom";
 
 export const Title= () => (
    <a href="/">
            <img
                alt="logo"
                className="h-28 p-2"
                src={logo}
            />
        </a>
    
    )

const Header = () => {
	const [title, setTitle] = useState("Please Login!")
const[isLoggedIn, setIsLoggedIn] =useState(false)
	return (
		<div className="flex justify-between">
			<Title />
			<h1 className="py-12 px-10">{title}</h1>
			{/* <button onClick={()=>setTitle("Welcome Preeti")}>change title</button> */}
			<div className="nav-items">
				<ul className="flex py-10 px-10 justify-between">
					<li className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md"><Link  to ="/">Home</Link> </li>	
					<li className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md"><Link to="/about">About</Link> </li>
					<li className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md"><Link to="/contact">Contact </Link></li>
					<li className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md">Cart </li>
				</ul>
			</div>
			{isLoggedIn ?<button onClick={()=> setIsLoggedIn(false)}>LogOut</button>
				:<button onClick={()=> setIsLoggedIn(true) && setTitle("Welcome")}>Login</button>}
		</div>
	);
};

export default Header