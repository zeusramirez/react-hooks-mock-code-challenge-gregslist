import React, {useState} from "react";

function ListingCard(props) {

  // Hooks
  const [favorite, setFavorite] = useState(false)
  const {image, location, description, id, deleteListing} = props
  

    // useEffect (()=>{
    //   fetch(`http://localhost:6001/listings/${id}`,{
    //     method: "DELETE",
    //     headers: {"Content-Type": "application/json"}
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    // })
  function deleteCard() {
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    deleteListing(id)
    }

  function handleFavorite(){
    setFavorite(favorite => !favorite)
  }
  return (
    <li className="card">
        <div className="image">
          <span className="price">$0</span>
          <img src={image} alt={description} />
        </div>
        <div className="details">
          {favorite ? (
            <button className="emoji-button favorite active" onClick={handleFavorite}>★</button>
          ) : (
            <button className="emoji-button favorite" onClick={handleFavorite}>☆</button>
          )}
          <strong>{description}</strong>
          <span> · {location}</span>
          <button className="emoji-button delete" onClick={deleteCard}>🗑</button>
        </div>
      </li>
  );
}

export default ListingCard;
