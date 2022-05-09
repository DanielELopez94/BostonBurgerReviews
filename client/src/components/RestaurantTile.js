import React from "react";
import { Link } from "react-router-dom";

const RestaurantTile = (props) => {
  const { id, name, location } = props.restaurant;
  return (
    <div className="indexPageList">
      <h1>
        <Link id ="restaurantName" to={`/restaurants/${id}`}>{name}</Link>

        <div className="indexPageList">{location}</div>
      </h1>
    </div>
  );
};

export default RestaurantTile;
