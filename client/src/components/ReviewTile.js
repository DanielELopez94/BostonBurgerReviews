import React from 'react'

const ReviewTile = (props) => {
  console.log(props)
  const { id, title, comment } = props.review

  return (
    <div className="callout primary small-6 grid-x grid-x-margin">
      <h4>
        {title}
      </h4>
      <p>
        {comment}
      </p>
    </div>
  )
}

export default ReviewTile