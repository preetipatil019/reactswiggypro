import {useState} from "react";


const Search =({filtermyData}) =>{
    
	const [searchtxt,setSearchtxt] = useState();
        return(	
        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchtxt}
        onChange={(e)=>setSearchtxt(e.target.value)}></input>
        <button className="search-btn" 
        onClick={()=> filtermyData(searchtxt)}>
            Search </button>
        </div>)
}

export default Search;