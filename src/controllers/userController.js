import userService from "../services/userService.js";

const getAllUsers = (req, res) => {
    const allUsers = userService.getAllUsers();
    res.send({status: "OK", data: allUsers});
};
  
const getOneUser = (req, res) => {
    const { params: { userId }, } = req;
    if(!userId) return;

    const user = userService.getOneUser(userId);
    res.send({status: "OK", data: user});
};
  
const createNewUser = (req, res) => {
    const {body} = req;
    if(!body.name) return;

    const newUser = { name: body.name };
    const createdUser = userService.createNewUser(newUser);
    
    res.status(201).send({status: "OK", data: createdUser});
};
  
const updateUser = (req, res) => {
    const { params: { userId }, body } = req;
    if(!userId) return;

    const updatedUser = userService.updateUser(userId, body);
    res.send({status: "OK", data: updatedUser});
};
  
const deleteUser = (req, res) => {
    const { params: { userId } } = req;
    if(!userId) return;

    userService.deleteUser(userId);
    res.status(204).send({status: "OK"});
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};