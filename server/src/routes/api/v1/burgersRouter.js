import express from "express"
import { Burger } from "../../../models/index.js"
import BurgerSerializer from "../../../serializers/BurgerSerializer.js"

const burgersRouter = new express.Router()

burgersRouter.get("/:id", async (req, res) => {
  const { id } = req.params

  try {
    const burger = await Burger.query().findById(id)
    const serializedBurger = await BurgerSerializer.getDetail(burger)
    return res.status(200).json({ burger: serializedBurger })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

burgersRouter.post("/restaurants/id/burgers", async (req,res) => { 
  const { body } = req 
  const { title, rating } = formInput
  const { userId } = req.params

  try {
    const burger = await Burger.query().insertAndFetch({title, rating, userId})
    return res.status(201).json({burger: burger}) 
  } catch (error) {
    console.log(error)
    return res.status(500).json({error: error})
  }
})

export default burgersRouter