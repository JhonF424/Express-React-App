const jwt = require("jwt-simple");
const moment = require("moment")
const SECRET_KEY = "aPwQvN2I9q"

exports.createAccessWithToken = (user) => {

    const payload = {
        id: user.id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        expiration_date: moment().add(12, "hour").unix(),
    };
    return jwt.encode(payload, SECRET_KEY);
};

exports.createRefreshToken = (user) => {
    const payload = {
        id: user._id,
        expiration_date: moment().add(30, "days").unix(),
    };
    return jwt.encode(payload, SECRET_KEY);
};

exports.decodedToken = (token) => {
    return jwt.decode(token, SECRET_KEY, true);
};