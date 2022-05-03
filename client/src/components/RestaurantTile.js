import React from "react"
import { Link } from "react-router-dom"

const RestaurantTile = (props) => {
  const { id, name, location } = props.restaurant
  return (
    <div>
      <h3>
        <Link to={`/restaurants/${id}`}>
          {name}
        </Link>
      </h3>
      <h5>
        {location}
      </h5>
    </div>
  )
}

export default RestaurantTile