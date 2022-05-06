class BurgerSerializer {
  static async getSummary(burger) {
    const allowedAttributes = ["id", "name", "restaurantId", "vegetarian"]
    let serializedBurger = {}
    
    for (const attribute of allowedAttributes) {
      serializedBurger[attribute] = burger[attribute]
    }
    return serializedBurger
  }
}

export default BurgerSerializer