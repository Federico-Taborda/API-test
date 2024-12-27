import userService from "../services/userService.js";

const getAllUsers = (req, res) => {
    try {
        const allUsers = userService.getAllUsers();
        res.send({status: "OK", data: allUsers});
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
    }
};
  
const getOneUser = (req, res) => {
    const { params: { userId }, } = req;
    if(!userId) res.status(400).send({status: "FAILED", data: { error: "User ID cannot be empty." }}); 

    try {
        const user = userService.getOneUser(userId);
        res.send({status: "OK", data: user});
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
    }
};
  
const createNewUser = (req, res) => {
    const {body} = req;
    if(!body.name) res.status(400).send({status: "FAILED", data: { error: "Keys missing or empty in request body." }});

    const newUser = { name: body.name };

    try {
        const createdUser = userService.createNewUser(newUser);
        res.status(201).send({status: "OK", data: createdUser});
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});   
    }
};
  
const updateUser = (req, res) => {
    const { params: { userId }, body } = req;
    if(!userId) res.send({status: "FAILED", data: { error: "User ID cannot be empty." }});

    try {
        const updatedUser = userService.updateUser(userId, body);
        res.send({status: "OK", data: updatedUser});
    } catch (error) {
        res.status(error?.status || 500).send({status: "FAILED", data: { error: error?.message || error }});
    }
};
  
const deleteUser = (req, res) => {
    const { params: { userId } } = req;
    if(!userId) res.send({status: "FAILED", data: { error: "User ID cannot be empty." }});

    try {
        userService.deleteUser(userId);
        res.status(204).send({status: "OK"});
    } catch (error) {
        res.send({status: "FAILED", data: { error: error?.message || error }});
    }
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};