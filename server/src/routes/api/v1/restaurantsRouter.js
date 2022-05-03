import express from "express"
import { Restaurant } from "../../../models/index.js"

const restaurantsRouter = new express.Router()

restaurantsRouter.get("/", async (req, res) => {
  try {
    const restaurants = await Restaurant.query()
    return res.status(200).json({ restaurants })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default restaurantsRouter