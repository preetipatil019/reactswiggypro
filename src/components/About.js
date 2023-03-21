import React from "react";
import Banner from '../assets/banner.jpg';

const About = () => {
    return (<>
         <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[800px] w-full'>
         
            <img className="h-[400px] justify-center w-[800px]" src={Banner} />
         
          </div>
          <div className='flex flex-col justify-center items-center max-w-[800px] w-full px-4'>
         
              <h5 className='text-4xl font-bold m-2'>Who We Are</h5>
               
              <h2 className='text-base font-normal'> No one can deny the fact that Indian people are foodie and we love experimenting with new tastes and species.
                    You can imagine the Indian people’s love for food by the fact that there are 4,600 franchisors in India.  <br /><br />
                Our food represents our culture, community and uniqueness.
                Indian people have a special talent of cooking and celebrating delicious food and thus starting a food franchise is the biggest and most profitable opportunity in India.
                <br/><br/>
                
                Foodish- the daily chaska brings you the most amazing food franchise opportunity for you to grow and scale to the next level. 


                </h2>  
            </div>
        
        </div>
        
        {/* <div className="flex  w-auto flex-col">
            <div>
               
                </div>
        <p className="w-[800px]">
            No one can deny the fact that Indian people are foodie and we love experimenting with new tastes and species.
            You can imagine the Indian people’s love for food by the fact that there are 4,600 franchisors in India.
            <br /><br />
                Our food represents our culture, community and uniqueness.
                Indian people have a special talent of cooking and celebrating delicious food and thus starting a food franchise is the biggest and most profitable opportunity in India.
                <br/><br/>
                
                Foodish- the daily chaska brings you the most amazing food franchise opportunity for you to grow and scale to the next level. 

            </p>
        </div> */}
        </>
   ) 
}

export default About;