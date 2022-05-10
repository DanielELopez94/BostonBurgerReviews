import React from "react"
import { Link } from "react-router-dom"

const BurgerTile = (props) => {
  const { id, name, vegetarian } = props.burger
  let veggieMessage

  if (vegetarian) {
    veggieMessage = <h5>This burger is vegetarian!</h5>
  }

  return (
    <div className="callout primary small-6 grid-x grid-x-margin">
      <h4>
        <Link to={`/burgers/${id}`}>
          {name}
        </Link>
      </h4>
      {veggieMessage}
    </div>
  )
}

export default BurgerTile