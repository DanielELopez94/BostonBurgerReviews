import React from "react"

const BurgerTile = (props) => {
  const { name, vegetarian } = props.burger
  let veggieMessage

  if (vegetarian) {
    veggieMessage = <h5>This burger is vegetarian!</h5>
  }

  return (
    <div className="callout primary small-4 grid-x grid-x-margin">
      <h4>{name}</h4>
      {veggieMessage}
    </div>
  )
}

export default BurgerTile