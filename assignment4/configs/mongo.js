const mongoose = require("mongoose");

const connectionString = 
"mongodb+srv://shumnaashfaq:humna2000@database.tgckigb.mongodb.net/?retryWrites=true&w=majority"


function connect(){
    mongoose.connect(connectionString);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

}
module.exports = connect;
