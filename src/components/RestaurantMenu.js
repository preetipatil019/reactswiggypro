import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL ,RES_IMG_CDN_URL} from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const param = useParams();
    const { resId } = param;

    const [menuData, setMenuData] = useState({});

    useEffect(() => {
        getResturantMenu();
    }, []);

    async function getResturantMenu() {
        const data = await fetch(MENU_API_URL + resId)
        const json = await data.json();
        console.log(json.data.cards[0].card.card);
        setMenuData(json?.data?.cards[0]?.card?.card?.info);
    }

    return (
        <main className="main__content container">
            <br />
            {
          menuData.length === 0 ? <Shimmer/> :
          
           <div className="container">
      <div className="restaurant-summary flex basis-full h-60 justify-evenly items-center bg-blue-dark text-gray p-8">
        <img className="restaurant-img w-[254px] h-[165px]" src={ RES_IMG_CDN_URL  + menuData?.cloudinaryImageId } alt={menuData?.name}/>
        <div className="restaurant-summary-details flex flex-col basis-[540px] m-5 ">
          <h2 className="restaurant-title text-3xl max-w-[538px] font-semibold">{menuData?.name}</h2>
          <p className="restaurant-tags overflow-hidden whitespace-nowrap text-[15px] max-w-[538px]">{menuData?.cuisines?.join(", ")}</p>
          <div className="restaurant-details flex mt-5 justify-between items-center text-sm font-semibold pb-2.5 max-w-[200px]">
            <div className="restaurant-rating flex items-center px-1 py-0 gap-1">
              <span>{menuData?.avgRating}*</span>
            </div>
            <div>|</div>
            <div>{menuData?.sla?.slaString}</div>
               <div>|</div>
            <div>{menuData?.costForTwoMessage}</div>
                    
          </div>
        </div>
              </div>
              
              <div className="flex justify-center">
        <div className=" mt-7 w-[848px]">
          <div className="p-5">
            <h3 className="font-bold text-lg">Recommended</h3>
            <p className="mt-3.5 w-3/5 text-gray-desc text-sm"> ITEMS</p>
                  </div>
                </div>
                </div>
                </div>
            }
        </main>
    )
}

export default RestaurantMenu