// Here we will create an express server
const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 4000



app.get('/login',(req, res) => {
    res.send('Welcome to login page');
});

app.use('/',(req, res) => {
    res.send('Hello World!');
});


// Define the database URL to connect to.
const mongoDB = "";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log("Connected Successfully");
}


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})