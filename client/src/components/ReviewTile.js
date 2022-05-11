import React from 'react'

const ReviewTile = (props) => {
  const { id, title, comment } = props.review
  const { deleteReview } = props

  const handleDelete = (event) => {
    event.preventDefault()
    deleteReview(id)
  }

  return (
    <div className="callout primary small-6 grid-y grid-x-margin">
      <h4>
        {title}
      </h4>
      <p>
        {comment}
      </p>
      <div className="button-group grid-x grid-margin align-spaced">
        <button 
          className="button small-4 secondary"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ReviewTile