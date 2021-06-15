import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer(props) {
  const {listings, deleteListing} = props
  const listingCards = listings.map(listings => <ListingCard key={listings.id} deleteListing={deleteListing} {...listings}/>)

  return (
    <main>
      <ul className="cards">
        {listingCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
