
const User = require("../models/user.model")


const handleGetUser = async(req, res)=>{
    if(!req.params.id){
        return res.status(401).json({message: "please provide a valid Id"})
    }
    const result = await User.findById(req.params.id)
    if(!result){
        return res.status(501).json({message: "Unable to fetch user from db"})
    }
    return res.status(201).json({message: "Successfull", result})
}


const handleUpdateUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      if (!id) {
        return res.status(400).json({ message: "Please provide a valid ID" });
      }
  
      const {newEmail} = req.body; // Data for updating the document
      
  
      const result = await User.findByIdAndUpdate(id, {email: newEmail}, { new: true }); // Pass the update object
  
      if (!result) {
        return res.status(404).json({ message: "Unable to find user in the database" });
      }
  
      return res.status(200).json({ message: "Successfully updated", result });
    } catch (err) {
      return res.status(500).json({ message: "An error occurred", error: err.message });
    }
  }

  const handleDeleteUser = async(req, res)=>{
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
  }

  const handleGetAllUsers = async (req, res)=>{
    const result = await User.find({})
    if(!result){
        return res.status(501).json({message: "Error with database"})
    }
    return res.status(201).json({message: "SuccessFull", result})
}

const handlePostUser = async (req, res)=>{
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
}

module.exports=  {
    handleGetAllUsers,
    handleUpdateUser,
    handleDeleteUser,
    handleGetUser,
    handlePostUser

}