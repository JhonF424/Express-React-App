const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user.model')

function singUp(req, res){
    const user = new User();
    const { name, lastname, email, password, repeatPassword } = req.body;
    user.name = name;
    user.lastname = lastname;
    user.email = email;

    // Por defecto establecemos rol y actividad

    user.role = "admin";
    user.active = true

    if (!password || !repeatPassword){
        res.status(404).send({ message : "Las contraseñas son obligatorias" });
    } else if(!password !== repeatPassword) {
        res.status(404).send({ message : "Las contraseñas con coinciden"});
    } else {
        bcrypt.hash(password, null, null, (err, hash) => {
            if (!err){
                res.status(500).send({ message: "Error al encriptar la contraseña"})
            } else {
                user.password = hash;
                user.save(err, userStored) = {
                    if (err){
                        res.status(500).send({ message: "El usuario ya existe"});
                    }
                }
            }
        })
    }
}

module.exports = { singUp}