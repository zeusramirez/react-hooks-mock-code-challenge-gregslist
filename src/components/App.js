import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";



function App() {
// hooks
const [gregList, setGregList] = useState([])
const [searchText, setSearchText] = useState("")
// functions
let filterListings = gregList.filter(listing => listing.description.toLowerCase().includes(searchText))


const deleteListing = (listingId) => {
  let filterArray = gregList.filter(listing=> listing.id !== listingId)
  setGregList(filterArray)
}


// fetching data from db.json
useEffect(()=> {
  fetch("http://localhost:6001/listings")
  
  .then(res => res.json())
  .then(data => setGregList(data))
}, [])


  return (
    <div className="app">
      <Header searchText={searchText} setSearchText={setSearchText}/>
      <ListingsContainer deleteListing={deleteListing}  listings={filterListings}/>
    </div>
  );
}

export default App;
