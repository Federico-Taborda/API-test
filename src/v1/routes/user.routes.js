import { Router } from 'express';
import userController from '../../controllers/userController.js';

// Se crea un router para manejar las rutas de los usuarios
const userRouter = Router();

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userId', userController.getOneUser);

userRouter.post('/', userController.createNewUser)

userRouter.put('/:userId', userController.updateUser)

userRouter.delete('/:userId', userController.deleteUser)

export default userRouter;