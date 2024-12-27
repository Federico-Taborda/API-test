// Es una buena practica nombrar los metodos de los servicios con el mismo nombre que del controlador

import user from "../database/user.js";
import { v4 as uuidv4 } from 'uuid';

const getAllUsers = () => {
    const allUsers = user.getAllUsers();
    return allUsers;
};
  
const getOneUser = (userId) => {
    const getUser = user.getOneUser(userId);
    return getUser;
};
  
const createNewUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuidv4(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }

    const createdUser = user.createNewUser(userToInsert);
    return createdUser;
};
  
const updateUser = (userId, changes) => {
    const updatedUser = user.updateUser(userId, changes);
    return updatedUser;
};
  
const deleteUser = (userId) => {
    user.deleteUser(userId);
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};