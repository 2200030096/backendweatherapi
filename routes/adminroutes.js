const admincontroller = require("../controllers/admincontroller")



const express = require("express")
const adminrouter = express.Router()

// admin routes
adminrouter.get("/viewusers",admincontroller.viewusers)
adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.delete("/deleteuser/:email",admincontroller.deleteuser)

adminrouter.post("/addweather", admincontroller.addWeather);

module.exports = adminrouter