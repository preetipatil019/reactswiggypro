import {RES_IMG_CDN_URL} from "../constants.js"


  const RestaurantCard = ({
    name,
    
    lastMileTravelString,
    slaString,
aggregatedDiscountInfo,
    cloudinaryImageId,
    avgRating,
    totalRatings,
  }) => {
    return (
      <div className="w-[200px] p-2 hover:shadow-md h-[220px]">
        <img
          src={
            RES_IMG_CDN_URL
            + cloudinaryImageId
          }
        />
        <h2 className="font-bold">{name}</h2>
        <h3><div className="flex text-sm">{lastMileTravelString}
          <span className="h-2 w-2 font-bold px-[2px]">.</span>{slaString.toLowerCase()}</div></h3>
        <h4>
          <div className="flex text-sm">{avgRating}
           <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="gray"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      class="mr-1 mt-1 h-3 w-4 text-warning">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
          <span>(</span>{totalRatings}<span>+)</span></div></h4>
      </div>
    );
  };

  export default RestaurantCard