const express = require("express");
require("dotenv").config({path:"./.env"});
const cors = require("cors");
const connectDB = require("./config/connectDB");
const RoutesProduct= require("./routes/productRoutes");
const RoutesClient= require("./routes/clientRoutes");
const RoutesOrder = require('./routes/orderRoutes')
const RoutesUser = require('./routes/userRoutes')

const App = express();

const PORT = process.env.PORT || 7011;

App.use(cors())
App.use(express.json())

App.use("/",(req,res)=>{
    res.send("Hello From Backend")
})
App.use('/api/products', RoutesProduct)
App.use('/api/clients', RoutesClient)  // middleware routing
App.use('/api/orders', RoutesOrder) 
App.use('/api/users', RoutesUser)


// App.get("/*", function (req, res) {
//     res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
//  })


connectDB();

App.listen(PORT, (err)=>{
    if(err){
    console.log(err) }else {
     console.log(`server is running on ${PORT}`)
}})
