// Es una buena practica nombrar los metodos de los servicios con el mismo nombre que del controlador

import user from "../database/user.js";

const getAllUsers = (req, res) => {
    const allUsers = user.getAllUsers();
    return allUsers;
};
  
const getOneUser = (req, res) => {
    return;
};
  
const createNewUser = (req, res) => {
    const isAlreadyAdded = DB.users.findIndex((user) => user.name === newUser.name) > -1;
    if (isAlreadyAdded) return;

    DB. users.push(newUser);
    saveToDatabase(DB);
    return newUser;
};
  
const updateUser = (req, res) => {
    return;
};
  
const deleteUser = (req, res) => {
    return;
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};