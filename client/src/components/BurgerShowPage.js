import React, { useState, useEffect } from "react"
import NewBurgerReviewForm from "./NewBurgerReviewForm"

const BurgerShowPage = props => {
  const [burger, setBurger] = useState({
    name: "", 
    vegetarian: null
  })
  const getBurger = async () => {
      const burgerId = props.match.params.id
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

  return (
    <div>
      <h2>{burger.name}</h2>
      <h2>{burger.vegetarian}</h2>
      <h2> Reviews:</h2>
      <div>
      <NewBurgerReviewForm />
      </div>
    </div>
  )
  
}

export default BurgerShowPage