import React from 'react'

const ReviewTile = (props) => {
  const { id, title, comment } = props.review

  return (
    <div className="review-tile cell callout primary small-4">
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