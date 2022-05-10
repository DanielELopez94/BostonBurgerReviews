import { Review } from "../../models/index.js"

class ReviewSeeder {
  static async seed() {
    const reviewData = [
      {
        userId: 1,
        burgerId: 1,
        title: "My Burger Review",
        rating: 5,
        comment: "Wow, what a great burger!"
      },
      {
        userId: 2,
        burgerId: 3,
        title: "Uh-MAZING",
        rating: 5,
        comment: "Literally speechless"
      },
      {
        userId: 3,
        burgerId: 3,
        title: "Really pretty great",
        rating: 4,
        comment: "Could be a little juicier but overall great taste"
      },
      {
        userId: 4,
        burgerId: 4,
        title: "Wutta Burger",
        rating: 5,
        comment: "What's juicy, black, and blue all over? This fantastic creation. Eat now."
      },
      {
        userId: 6,
        burgerId: 6,
        title: "Breakfast or Burger",
        rating: 3,
        comment: "I thought this was going to be a chicken burger, but mostly eggs and bacon."
      },
      {
        userId: 7,
        burgerId: 7,
        title: "Cowabunga! Hang 10 Dudes!",
        rating: 5,
        comment: "Like whoa!  Rad burger, bruh!  Like a Hawaiian Pizza but like, BURGER!"
      },      
      {
        userId: 8,
        burgerId: 5,
        title: "You can taste why it's a favorite.",
        rating: 5,
        comment: "It's because it's pure and simple, just like Master Splinter."
      }    
    ]

    for (const reviewObject of reviewData) {
      const currentReview = await Review.query().findOne({ title: reviewObject.title })

      if (!currentReview) {
        await Review.query().insert(reviewObject)
      }
    }
  }
}

export default ReviewSeeder