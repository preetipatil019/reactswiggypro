import { useState, useEffect } from "react";
import { GET_RESTAURANT_MENU,restrautList} from "../../constants";

const useRestautant = (resId) => {
  const [restaurant, setRestaurant] = useState(null); 

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    try {
      /* Live Data */
      const response = await fetch(GET_RESTAURANT_MENU + resId);
      const res_data = await response.json();
      /* Mock Data */
      //const res_data =  restrautList;
     
      setRestaurant(res_data.data)
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant;

}

export default useRestautant;
