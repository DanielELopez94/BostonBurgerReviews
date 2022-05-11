import React, { useState } from "react"

const NewBurgerReviewForm = ({ postBurger }) => {
  const [newBurgerReview, setNewBurgerReview] = useState({
    title: "",
    rating: null,
    comment: "",
  })

  const handleInputChange = (event) => {
    setNewBurger({
      ...newBurgerReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postBurger(newBurgerReview)
    clearForm()
  }

  const clearForm = () => {
    setNewBurgerReview({
      title: "",
      rating: null,
      comment: "",
    })
  }

  return (
    <div className="callout">
      <h1>Add a Burger Review</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title: 
          <input
          type="text"
          name="title"
          onChange={handleInputChange}
          value={newBurgerReview.title}
          />
        </label>
        <label>
          Rating:
          <select 
            value={newBurgerReview.rating} 
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>  
          </select>
        </label>
        <label>
          Comment:
          <input 
            type="text" 
            name="comment" 
            onChange={handleInputChange} 
            value={newBurgerReview.comment}
          />
        </label>
        <div className="button-group">
          <input
            className="button"
            type="submit"
            value="submit" 
          />
        </div>
      </form>
    </div>
  )
}

export default NewBurgerReviewForm