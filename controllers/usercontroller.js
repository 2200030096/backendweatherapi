const User = require("../models/User")  //importing models

//async is used to return the response,here insertjobseeker is variable

const insertuser = async (request, response) => {
    try 
    {
        //await must present beside input
      const input =  request.body;  //json input
      //JobSeeker.js is class
      const user = new User(input);
      //save the record => object_name.save()
      await user.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkuserlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const user = await User.findOne(input)
       response.json(User)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {insertuser,checkuserlogin}