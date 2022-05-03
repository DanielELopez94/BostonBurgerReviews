/* eslint-disable no-console */
import RestaurantSeeder from "./seeders/RestaurantSeeders.js";
import { connection } from "../boot.js";

class Seeder {
  static async seed() {
    console.log("seeding restaurants...");
    await RestaurantSeeder.seed();

    console.log("Done!");
    await connection.destroy();
  }
}

export default Seeder;
