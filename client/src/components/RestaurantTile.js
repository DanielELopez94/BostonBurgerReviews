import React from "react";
import { Link } from "react-router-dom";

const RestaurantTile = (props) => {
  const { id, name, location } = props.restaurant;
  return (
    <div className="cell grid-x grid-margin-x small-6 align-center callout primary">
      <h3>
        <Link to={`/restaurants/${id}`}>{name}</Link>

        <div className="grid-x grid-margin-x align-center">
          {location}
        </div>
      </h3>
    </div>
  );
};

export default RestaurantTile;
