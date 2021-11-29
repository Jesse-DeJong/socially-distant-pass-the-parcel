// Import Mongoose
const mongoose = require("mongoose");

// Mongoose Schema
const Schema = mongoose.Schema;

// Create new Schema
const ParticipantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    moniker: {
        type: String,
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    }
});

// Initialise Schema
const Participant = mongoose.model("Participant", ParticipantSchema);

// Export Schema
module.exports = Participant;