const { MongoClient } = require("mongodb");
require("dotenv").config();
// Create a new MongoClient
const client = new MongoClient(process.env.DATABASE);
console.log("database connected");
module.exports = { client };
