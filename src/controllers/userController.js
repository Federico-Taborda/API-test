const getAllUsers = (req, res) => {
    res.send("Get all Users");
};
  
const getOneUser = (req, res) => {
    res.send("Get an existing User");
};
  
const createNewUser = (req, res) => {
    res.send("Create a new User");
};
  
const updateUser = (req, res) => {
    res.send("Update an existing User");
};
  
const deleteUser = (req, res) => {
    res.send("Delete an existing User");
};
  
export default {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser,
};