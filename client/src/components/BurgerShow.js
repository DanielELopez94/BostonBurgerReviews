import React, { useState, useEffect } from "react"

const BurgerShow = props => {
  const [burger, setBurger] = useState({
    name: "", 
    vegetarian: null
  })
  const getBurger = async () => {
      const burgerId = props.match.params.id
      const restaurantId = props.restaurant.id
    try {
      const response = await fetch(`/api/v1/restaurants/${restaurantId}/${burgerId}`)
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
    </div>
  )
}

export default BurgerShow