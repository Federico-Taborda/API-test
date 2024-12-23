export const middleware = (req, res, next) => {
    const { saludo }  = req.body;
    if(saludo === "Hola"){
        console.log("Paso por el middleware")
        next()
    }else{
        res.status(401).send({message: "No tienes permisos"})
    }
}