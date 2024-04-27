const Admin = require("../models/Admin")
const User = require("../models/User")
const Weather= require("../models/Weather")


 const viewusers = async (request, response) => 
 {
    try 
    {
      const users= await User.find();
      if(users.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(users);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const deleteuser = async (request, response) => 
 {
    try 
    {
      const email = request.params.email
      const user = await User.findOne({"email":email}) 
      if(user!=null)
      {
        await User.deleteOne({"email":email})
        response.send("Deleted Successfully")
      }
      else
      {
        response.send("Email ID Not Found")
      }

    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };

  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body 
       console.log(input)
       const admin = await Admin.findOne(input) 
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message); // 409 (duplicate) , 504(gateway error)
     }
   };

   const addWeather = async (req, res) => {
    try {
      
      const { timestamp, temperature, humidity, windSpeed, windDirection, precipitation, uvIndex, airQuality } = req.body;
  
      // Validate data (optional, add validation logic as needed)
      if (!timestamp || !temperature || !humidity) {
        return res.status(400).send('Missing required weather data fields.');
      }
  
      // Create a new Weather document using the Mongoose schema
      const newWeather = new Weather({
        timestamp,
        temperature,
        humidity,
        windSpeed, // Optional
        windDirection, // Optional
        precipitation, // Optional
        uvIndex, // Optional
        airQuality, // Optional
      });
  
      await newWeather.save();
  
      res.status(201).send('Weather data created successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send('Error creating weather data');
    }
  };
  

  module.exports = {viewusers,deleteuser,checkadminlogin,addWeather}