import { readFile } from 'fs/promises';
import { saveToDatabase } from './utils.js';

const DB = JSON.parse(await readFile(new URL('./db.json', import.meta.url), 'utf-8'));

const getAllUsers = () => {
    try {
        return DB.users;
    }catch (error) {
        throw { status: 500, message: error };
    }
};

const getOneUser = (userId) => {
    try {
        const user = DB.users.find((user) => user.id === userId);
        if(!user) throw { status: 404, message: "User not found." };

        return user;
    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
}

const createNewUser = (newUser) => {
    const isAlreadyAdded = DB.users.findIndex((user) => user.name === newUser.name) > -1;
    if (isAlreadyAdded) throw {
        status: 400,
        message: "User already exists."
    }

    try {
        DB. users.push(newUser);
        saveToDatabase(DB);
        return newUser;
    }catch (error) {
        throw { status: 500, message: error?.message || error };
    }
};

const updateUser = (userId, changes) => {
    try {
        const isAlreadyAdded = DB.users.findIndex((user) => user.name === changes.name) > -1;
        if (isAlreadyAdded) throw { status: 400, message: "User already exists." };
        
        const indexForUpdate = DB.users.findIndex((user) => user.id === userId);
        if (indexForUpdate === -1) throw { status: 404, message: "Cannot find user" };

        const updatedUser = { 
            ...DB.users[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
        };
    
        DB.users[indexForUpdate] = updatedUser;
        saveToDatabase(DB);
        return updatedUser;

    } catch (error) {
        throw { status: 500, message: error?.message || error };
    }
}

const deleteUser = (userId) => {
    try {
        const indexForDelete = DB.users.findIndex((user) => user.id === userId);
        if (indexForDelete === -1) throw { status: 404, message: "Cannot find user" };
    
        DB.users.splice(indexForDelete, 1);
        saveToDatabase(DB);
        
    }catch (error) {
        throw { status: 500, message: error?.message || error };
    }

}

export default { getAllUsers, createNewUser, getOneUser, updateUser, deleteUser };