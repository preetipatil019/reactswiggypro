 import logo from "../assets/icon.png"
import { useState } from "react";
import { Link } from "react-router-dom";
 
import { UserAuth } from "../utils/context/UserAuth";
import { useSelector } from "react-redux";

 
export const Title = () => {
	return(
		<Link href="/">
			<img
				alt={"logo"}
				className="h-28 p-2"
				src={logo}
			/>
		</Link>
    
	)
}
export const Intro = () => {
	const { user } = ""
	let name;
	

	return (
		<div>
			{user ? `Welcome ${name}` :"Login Please"}
		</div>
	)
}
// 	export const Intro = () => {
//   const { user } = UserAuth();
//   let name;
//   if (user) {
//     if (user.displayName != null) {
//       name = user.displayName;
//     } else {
//       name = user.email;
//     }
//   }

//   return (
//     <div className="flex justify-center items-center">
//       <span className="py-2.5 px-1 mt-2.5 mr-1 font-bold text-green">
//         {" "}
//         {user ? `Hello ${name} ` : "Please Login"} !!!
//       </span>
//     </div>
//   );
// };


const Header = () => {
	const [title, setTitle] = useState("Please Login!")
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const cartItems = useSelector(store => store.cart.items)
	
	return (
		<div className="flex justify-between">
			<Title />
			<h1 className="py-10 px-10"><Intro/></h1>
			{/* <button onClick={()=>setTitle("Welcome Preeti")}>change title</button> */}
			<div className="nav-items">
				<ul className="flex py-10 px-10 justify-between">
					<li ><Link className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md" to ="/">Home</Link> </li>	
					<li ><Link className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md" to="/about">About</Link> </li>
					<li ><Link className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md" to="/contact">Contact </Link></li>
					<li ><Link className="px-10 py-2 hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md" to="/instamart">Instamart </Link></li>
					<li className="hover:bg-[#f8a30e] active:bg-yellow-700 focus:outline-none rounded-md">Cart - {cartItems.length} Items</li>
				</ul>
			</div>
			{isLoggedIn ?<button onClick={()=> setIsLoggedIn(false)}>LogOut</button>
				:<button onClick={()=> setIsLoggedIn(true) && setTitle("Welcome")}>Login</button>}
		</div>
	);
};

export default Header