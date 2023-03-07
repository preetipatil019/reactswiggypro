 import logo from "../assets/icon.png"
import { useState } from "react";
 import { Link } from "react-router-dom";
 
 export const Title= () => (
    <a href="/">
            <img
                alt="logo"
                className="logo"
                src={logo}
            />
        </a>
    
    )

const Header = () => {
	const [title, setTitle] = useState("Please Login")
const[isLoggedIn, setIsLoggedIn] =useState(false)
	return (
		<div className="header">
			<Title />
			<h1>{title}</h1>
			{/* <button onClick={()=>setTitle("Welcome Preeti")}>change title</button> */}
			<div className="nav-items">
				<ul>
					<li><Link to ="/">Home</Link> </li>	
					<li><Link to="/about">About</Link> </li>
					<li><Link to="/contact">Contact </Link></li>
					<li>Cart </li>
				</ul>
			</div>
			{isLoggedIn ?<button onClick={()=> setIsLoggedIn(false)}>LogOut</button>
				:<button onClick={()=> setIsLoggedIn(true) && setTitle("Welcome")}>Login</button>}
		</div>
	);
};

export default Header