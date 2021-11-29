// Import Mongoose
const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new Schema
const TeamSchema = new Schema({
    teamname: {
        type: String,
        required: true
    },
    participants: [
        {
            type: Schema.Types.ObjectId,
            ref: "Participant"
        }
    ]
});

// Initialise Schema
const Team = mongoose.model("Team", TeamSchema);

// Export Schema
module.exports = Team;