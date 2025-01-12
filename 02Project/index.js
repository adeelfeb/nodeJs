const express = require("express");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);  // Fixed parentheses

const app = express();
const PORT = 8000;

// midddleware for the encoded data posted on the req
app.use(express.urlencoded({extended: false}))

mongoose.connect("mongodb://127.0.0.1:27017/usersdb")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(`Error while connecting to DB: ${err.message}`));

app.route("/").get((req, res) => {
//   console.log("Home page accessed");
  res.status(200).json({ message: "Everything went well" });
});


app.route("/api/user/:id")
.get(async(req, res)=>{
    if(!req.params.id){
        return res.status(401).json({message: "please provide a valid Id"})
    }
    const result = await User.findById(req.params.id)
    if(!result){
        return res.status(501).json({message: "Unable to fetch user from db"})
    }
    return res.status(201).json({message: "Successfull", result})
})
.patch(async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ message: "Please provide a valid ID" });
      }
  
      const {newEmail} = req.body; // Data for updating the document
      console.log(newEmail)
  
      const result = await User.findByIdAndUpdate(id, {email: newEmail}, { new: true }); // Pass the update object
  
      if (!result) {
        return res.status(404).json({ message: "Unable to find user in the database" });
      }
  
      return res.status(200).json({ message: "Successfully updated", result });
    } catch (err) {
      return res.status(500).json({ message: "An error occurred", error: err.message });
    }
  })
  .delete(async(req, res)=>{
    try {
        const { id } = req.params;
    
        if (!id) {
          return res.status(400).json({ message: "Please provide a valid ID" });
        }
    
        const result = await User.findByIdAndDelete(id); // Pass the update object
    
        if (!result) {
          return res.status(404).json({ message: "Unable to find user in the database" });
        }
    
        return res.status(200).json({ message: "Successfully deleted", result });
      } catch (err) {
        return res.status(500).json({ message: "An error occurred", error: err.message });
      }
  });
  

app.route("/api/user").get(async (req, res)=>{
    const result = await User.find({})
    if(!result){
        return res.status(501).json({message: "Error with database"})
    }
    return res.status(201).json({message: "SuccessFull", result})
})

app.route("/api/user").post(async (req, res)=>{
    const newUser = req.body
    if( !(newUser || newUser.firstName || newUser.email || newUser.gender)){
        res.status(400).json({message: "please provide all the details"})
    }
    let newUser2 = {}
    try {
            newUser2 = await User.create({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            gender: newUser.gender
    
        })
    } catch (error) {
        const errorMessage = error.message
        // console.log(errorMessage)
        return res.status(400).json({message: 'error while creating user', errorMessage})
    }
    return res.status(201).json({message: "User created successfully", newUser2})
})




app.listen(PORT, (err) => {
  try {
    if (err) throw err;  // In case of an error in app.listen
    console.log(`Now listening on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
