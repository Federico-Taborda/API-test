import { Router } from 'express';
import { middleware } from '../middlewares/user.middleware.js';
import userController from '../../controllers/userController.js';

// Se crea un router para manejar las rutas de los usuarios
const userRouter = Router();

// Se aplica el middleware a todas las rutas de userRouter
userRouter.use(middleware)

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userId', userController.getOneUser);

userRouter.post('/', userController.createNewUser)

userRouter.put('/:userId', userController.updateUser)

userRouter.delete('/:userId', userController.deleteUser)

export default userRouter;