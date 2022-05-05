import { Burger } from "../../models/index.js"

class BurgerSeeder {
  static async seed() {
    const burgerData = [
      {
        restaurantId: 1,
        name: "WTF Burger",
        vegetarian: false,
      },
      {
        restaurantId: 2,
        name: "Shack Stack",
        vegetarian: false,
      },
      {
        restaurantId: 3,
        name: "Chris Burger",
        vegetarian: false,
      },
      {
        restaurantId: 4,
        name: "Black & Blue Burger",
        vegetarian: false,
      }
    ]

    for (const burgerObject of burgerData) {
      const currentBurger = await Burger.query().findOne({ name: burgerObject.name })

      if (!currentBurger) {
        await Burger.query().insert(burgerObject)
      }
    }
  }
}

export default BurgerSeeder