import userService from "../services/userService.js";

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers();
    res.send({status: "OK", data: allUsers});
};
  
const getOneUser = (req, res) => {
    const user = userService.getOneUser();
    res.send("Get an existing User");
};
  
const createNewUser = (req, res) => {
    const {body} = req;
    if(!body.name) return;

    const newUser = { name: body.name };
    const createdUser = userService.createNewUser(newUser);
    
    res.status(201).send({status: "OK", data: createdUser});
};
  
const updateUser = (req, res) => {
    const updatedUser = userService.updateUser();
    res.send("Update an existing User");
};
  
const deleteUser = (req, res) => {
    const deletedUser = userService.deleteUser();
    res.send("Delete an existing User");
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};