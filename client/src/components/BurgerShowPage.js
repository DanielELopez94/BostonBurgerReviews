import React, { useState, useEffect } from "react"
import ReviewTile from "./ReviewTile.js"

const BurgerShowPage = props => {
  const [burger, setBurger] = useState({
    name: "", 
    vegetarian: null,
    reviews: []
  })

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
    }catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(()=> {
    getBurger()
  }, [])
  
  const reviewTiles = burger.reviews.map((review) => {
    return (
      <ReviewTile
        key={review.id}
        review={review}
      />
    )
  })

  return (
    <div className="grid-container">
      <div className="grid-y text-center">
        <h2 className="cell small-6 align-justify align-middle">
          {burger.name}
        </h2>
        <h2 className="cell small-6">
          {burger.vegetarian}
        </h2>
        <div className="grid-x grid-margin">
          {reviewTiles}
        </div>
      </div>
    </div>
  )
}

export default BurgerShowPage