// Import Dependencies
const express = require("express");
const mongojs = require("mongojs");
const routes = require("./routes");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

// Express Setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(routes);

// DB Setup
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ptp", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Open Port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});