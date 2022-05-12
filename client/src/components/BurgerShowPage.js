import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile.js"
import { withRouter } from "react-router-dom"

const BurgerShowPage = props => {
  const [burger, setBurger] = useState({
    name: "", 
    vegetarian: null,
    reviews: []
  })
  const { currentUser } = props
  const burgerId = props.match.params.id

  const getBurger = async () => {
    try {
      const response = await fetch(`/api/v1/burgers/${burgerId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const body = await response.json() 
      setBurger(body.burger)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(()=> {
    getBurger()
  }, [])
  
  const deleteReview = async (reviewId) => {
    try {
      const response = await fetch(`/api/v1/reviews/${reviewId}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      if (!response.ok) {
        const error = new Error(`Error in fetch: ${response.status} (${response.statusText})`)
        throw error
      }
      const body = await response.json()
      const updatedReviews = burger.reviews.filter(review => {
        if (review.id !== reviewId) {
          return review
        }
      })
      setBurger({
        ...burger,
        reviews: updatedReviews
      })
    } catch (error) {
      console.error(`Error in deletion: ${error.message}`)
    }
  }
  
  const reviewTiles = burger.reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        review={review}
        deleteReview={deleteReview}
        currentUser={currentUser}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-y text-center">
        <h2 className="cell small-4 align-justify align-middle">
          {burger.name}
        </h2>
        <h2 className="cell small-6">
          {burger.vegetarian}
        </h2>
        <div className="grid-x grid-margin-x">
          {reviewTiles}
        </div>
      </div>
    </div>
  )
}

export default withRouter(BurgerShowPage)