import express from 'express';
import { PORT } from './config.js';
import v1UsersRouter from './v1/routes/user.routes.js';

// Inicializa la aplicacion de express
const app = express();

// Middleware para parsear el body de las peticiones en formato JSON
app.use(express.json());

// Middleware para loggear las peticiones de usuarios
app.use('/api/v1/users', v1UsersRouter);

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

