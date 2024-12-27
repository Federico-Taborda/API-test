import { readFile } from 'fs/promises';
import { saveToDatabase } from './utils.js';

const DB = JSON.parse(await readFile(new URL('./db.json', import.meta.url), 'utf-8'));

const getAllUsers = () => {
  return DB.users;
};

const getOneUser = (userId) => {
    const user = DB.users.find((user) => user.id === userId);
    if(!user) return
    return user;
}

const createNewUser = (newUser) => {
    const isAlreadyAdded = DB.users.findIndex((user) => user.name === newUser.name) > -1;
    if (isAlreadyAdded) return;

    DB. users.push(newUser);
    saveToDatabase(DB);
    return newUser;
};

const updateUser = (userId, changes) => {
    const indexForUpdate = DB.users.findIndex((user) => user.id === userId);
    if (indexForUpdate === -1) return;

    const updatedUser = { 
        ...DB.users[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    };

    DB.users[indexForUpdate] = updatedUser;
    saveToDatabase(DB);
    return updatedUser;
}

const deleteUser = (userId) => {
    const indexForDelete = DB.users.findIndex((user) => user.id === userId);
    if (indexForDelete === -1) return;

    DB.users.splice(indexForDelete, 1);
    saveToDatabase(DB);
}

export default { getAllUsers, createNewUser, getOneUser, updateUser, deleteUser };