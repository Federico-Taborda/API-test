// Es una buena practica nombrar los metodos de los servicios con el mismo nombre que del controlador

import user from "../database/user.js";
import { v4 as uuidv4 } from 'uuid';
import { express } from 'express';

const getAllUsers = () => {
    try {
        const allUsers = user.getAllUsers();
        return allUsers;
    } catch (error) {
        throw error;
    }
};
  
const getOneUser = (userId) => {
    try {
        const getUser = user.getOneUser(userId);
        return getUser;
    } catch (error) {
        throw error;
    }
};
  
const createNewUser = (newUser) => {
    const userToInsert = {
        ...newUser,
        id: uuidv4(),
        createdAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"}),
    }

    try {
        const createdUser = user.createNewUser(userToInsert);
        return createdUser;
    } catch (error) {
        throw error;
    }
};
  
const updateUser = (userId, changes) => {
    try {
        const updatedUser = user.updateUser(userId, changes);
        return updatedUser;
    } catch (error) {
        throw error;
    }
};
  
const deleteUser = (userId) => {
    try {
        user.deleteUser(userId);
    } catch (error) {
        throw error;
    }
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};