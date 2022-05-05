class RestaurantSerializer {
  static getSummary(restaurant) {
    const allowedAttributes = ["id", "name", "location"]
    let serializedRestaurant = {}

    for (const attribute of allowedAttributes) {
      serializedRestaurant[attribute] = restaurant[attribute]
    }

    return serializedRestaurant
  }
}

export default RestaurantSerializer