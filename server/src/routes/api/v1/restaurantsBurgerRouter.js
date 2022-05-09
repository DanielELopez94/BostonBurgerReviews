import express from "express";
import objection from "objection";
const { ValidationError } = objection;
import cleanUserInput from "../../../services/cleanUserInput.js";

const restaurantBurgersRouter = new express.Router({ mergeParams: true });

restaurantBurgersRouter.post("/", async (req, res) => {
  const { body } = req;
  const formInput = cleanUserInput(body);
  const { name, description } = formInput;
  const { burgerId } = req.params;
  try {
    const newReview = await Event.query().insertAndFetch({ name, description, burgerId });
    return res.status(201).json({ review: newReview });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default restaurantBurgersRouter