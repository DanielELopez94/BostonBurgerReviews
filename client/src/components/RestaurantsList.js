import React, { useState, useEffect } from "react";
import RestaurantTile from "./RestaurantTile";

const RestaurantsList = (props) => {
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    try {
      const response = await fetch("/api/v1/restaurants");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setRestaurants(body.restaurants);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const restaurantListItems = restaurants.map((restaurantObject) => {
    return <RestaurantTile key={restaurantObject.id} restaurant={restaurantObject} />;
  });

  return (
    <div className="grid-container">
      <h1> Restaurants: </h1>
      <div className="grid-x grid-margin-x align-center">{restaurantListItems}</div>
    </div>
  );
};

export default RestaurantsList;
