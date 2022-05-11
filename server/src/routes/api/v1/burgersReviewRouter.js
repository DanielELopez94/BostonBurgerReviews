import express from "express"
import objection from "objection"
const { ValidationError } = objection
import cleanUserInput from "../../../services/cleanUserInput.js"

const restaurantBurgersRouter = new express.Router();

export default restaurantBurgersRouter;

restaurantBurgersRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { name, description } = formInput
  
	const { burgerId } = req.params
  try {
  const newReview = await review.query().insertAndFetch({ name, description, review })
  return res.status(201).json({ review: newReview })
  } catch (error) {
  if (error instanceof ValidationError) {
  return res.status(422).json({ errors: error.data })
  }
  return res.status(500).json({ errors: error })
}
})
