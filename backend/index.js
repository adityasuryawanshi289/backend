const express = require('express');
require('./db/config');
const User = require("./db/User");
const Patient=require("./db/patient.js")
const app = express();
const cors=require("cors");
const patient = require('./db/patient');
app.use(express.json());
app.use(cors());
app.get("/", async(req,resp)=>{
  let result =await User.find();
   resp.send(result);
  });

  app.post("/login", async (req, resp) => {
  
      if (req.body.password && req.body.name) {
          let user = await User.findOne(req.body).select("-password");
          if (user) {
              resp.send(user);
          }
          else {
              resp.send({ result: "Not Found" })
          }
      }
      else {
          resp.send({ result1: "Not Found" })
      }
  
  });
  app.post("/register", async(req,resp)=>{
    let user = new User(req.body);
    let result =await user.save();
     resp.send(result);
     console.log(result)
  });

app.get("/patient/:name", async (req, resp) => {
  let result = await patient.findOne({ name:req.params.name});
  console.log(req.params.name)
  if (result) {
    resp.send(result);
}
else {
    resp.send({ result: "No Record Found..!" });
}
})



app.get("/patient", async(req,resp)=>{
  let result =await patient.find();
   resp.send(result);
});



app.post("/patientP", async(req,resp)=>{
  let patient = new Patient(req.body);
  let result =await patient.save();
   resp.send(result);
   console.log(result)
});







app.listen(5000);

