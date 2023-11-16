// Here we will create an express server
const express = require('express')
const mongoose = require('mongoose');
const app = express()

require('dotenv').config();
// console.log(process.env);



app.get('/login',(req, res) => {
    res.send('Welcome to login page');
});

app.use('/',(req, res) => {
    res.send('Hello World!');
});




// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB);
  console.log("Connected Successfully");
}


app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});