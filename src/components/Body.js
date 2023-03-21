import {restrautList} from "../constants.js";
import RestaurantCard from "./RestaurantCard.js";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer.js";
import {Link} from "react-router-dom"
import {filterData} from "../utils/helper"


const Body = () => {
	const [allRestaurants, setAllRestaurants] = useState([]);
	const [filteredRestaurants,setFilteredRestaurants] =useState([]);
	const [searchtxt,setSearchtxt] = useState("");

	useEffect(()=>{
		//api call
		getRestaurants();
	},[])

	async function getRestaurants(){
		const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
		const json = await data.json();
		//optional chaining
		setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
	}
	//early return
	if (!allRestaurants) return null;

	
	return (allRestaurants.length === 0 ?
		<Shimmer /> : (<>
	<div className="flex justify-center">
		<input type="text"
			className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray"
			placeholder="Search"
			value={searchtxt}
			onChange={(e) => setSearchtxt(e.target.value)}>
		</input>
		<button className="px-10 mx-2 bg-[#f8a30e] active:bg-yellow-700 focus:bg-[#f8a30e] rounded-md" 
			onClick={()=> {
			const data = filterData(searchtxt,allRestaurants);
			setFilteredRestaurants(data);
		}}>
			Search </button>
		</div>
			<div className='flex flex-wrap'>
				
		{filteredRestaurants.map((restaurant)=>{
			return <Link to={"/restaurant/" +restaurant.data.id }><RestaurantCard {...restaurant.data} key={restaurant.data.id} /></Link>
		})}  
		</div>
		</>));
};

export default Body;