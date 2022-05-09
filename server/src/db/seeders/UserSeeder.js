import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const userData = [
      {
        email: "email@gmail.com",
        password: "sdjnfadsfkljdajdsfnasfjdajksd"
      },
      {
        email: "email1@gmail.com",
        password: "sdjnfadsfkljdajdsf"
      },
      {
        email: "email2@gmail.com",
        password: "sdjnfa"
      },
      {
        email: "email3@gmail.com",
        password: "sdjnfadsfdajksd"
      }
    ]

    for (const userObject of userData) {
      const currentUser = await User.query().findOne({ 
        email: userObject.email
      })

      if (!currentUser) {
        await User.query().insert(userObject)
      }
    }
  }
}

export default UserSeeder