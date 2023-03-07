import { useState,useEffect } from "react";

const useRestaurant = (resId) => {
    const [restaurant,setRestaurant] = useState(null);
      useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9715987&lng=77.5945627&menuId=" + resId);
        const json = await data.json();
        setRestaurant(json.data);
   
    
    }
    return restaurant;
}
export default useRestaurant;