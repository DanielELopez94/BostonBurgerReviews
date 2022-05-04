import React from "react";
import { Link } from "react-router-dom";

const RestaurantTile = (props) => {
  const { id, name, location } = props.restaurant;
  return (
    <div className="indexPageList">
      <h3>
        <Link id ="restaurantName" to={`/restaurants/${id}`}>{name}</Link>

        <h5 className="indexPageList">{location}</h5>
      </h3>
    </div>
  );
};

export default RestaurantTile;
