import React, { useState } from "react"

const NewBurgerReviewForm = ({ postBurger }) => {
  const [newBurgerReview, setNewBurgerReview] = useState({
    name: "",
    vegetarian: null
  })

  const handleInputChange = review => {
    setNewBurger({
      ...newBurgerReview,
      [review.currentTarget.name]: review.currentTarget.value
    })
  }

  const handleSubmit = (burger) => {
    burger.preventDefault()
    postBurger(newBurgerReview)
    clearForm()
  }

  const clearForm = () => {
    setNewBurgerReview({
      name: "",
      vegetarian: null
    })
  }

  return (
    <div>
      <h1>Add a Burger Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Review: 
          <input
          type="Text"
          review="review"
          onChange={handleInputChange}
          value={newBurgerReview.name}
          />
        </label>
        <div>
          <input
          type="submit"
          value="submit" 
          />
        </div>
      </form>
    </div>
  )
}
export default NewBurgerReviewForm

