const Model = require("./Model.js") 

class Restaurant extends Model {
    static get tableName() {
        return "restaurants"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "location"],
            properties: {
                name: { type: "string" },
                location: { type: "string" }
            }
        }
    }
}

module.exports = Restaurant