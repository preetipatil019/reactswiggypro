import React from 'react';

export const RestMenuShimmer = () => {
  return (
    <div className="container animate-pulse">
      <div className="flex basis-full h-60 justify-evenly items-center p-8 bg-gray ">
        <img className="h-[144px] w-[230px] bg-bio " />
        <div className="flex flex-col basis-[540px] m-5">
          <h2 className="shimmer-w40"></h2>
          <p className="shimmer-w20"></p>
          <div className="shimmer-w60">
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-7 w-[848px]">
          <div className="p-5">
            <h3 className="shimmer-w40"></h3>
            <p className="shimmer-w20"></p>
          </div>
          <div className="menu-items-list  flex flex-col justify-evenly">
            { Array(4).fill("").map( (element, index)  => 
            <div className="flex justify-evenly w-[848px] p-2.5 mb-2.5 shadow animate-pulse" key={index}>
              <div className="w-[438px]">
                <h3 className="shimmer-w40"></h3>
                <p className="shimmer-w20"> </p>
                <p className="shimmer-w60"></p>
              </div>
              <div className="flex flex-col justify-center items-center w-[118px] h-[150px]">
                <img className="w-[118px] h-[96px] bg-bio" /> 
                <div className="w-[94px] h-[34px] mt-2.5 bg-bio"> </div>
              </div>
            </div>
            )}
          </div>
        </div>
        <div className="cart-widget"></div>

      </div>
    </div>
  )
}

const Shimmer = () => {
  return (
      <div className='restaurant-list'>
          {Array(10).fill("").map((e,index) => (<div key={index} className='shimmer-card'>
          </div>) )}
      
      </div>
  );
}

export default Shimmer;
