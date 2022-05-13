const mongoose = require('mongoose');
// const user = mongoose.Schema({
//     name: {
//         type: String,
//         require: true,
//         min: 3,
//     },
//     lastname: {
//         type: String,
//         require: true,
//         min: 3,
//     },
//     email: {
//         type: String,
//         unique: true,
//     },
//     password: {
//         type: String,
//         require: true,
//     },
//     active: {
//         type: Boolean,
//         require: true,
//     },
//     role: {
//         type: String,
//         require: true
//     },
//     avatar: {
//         type: String,
//         require: false
//     }
// });

// module.exports = mongoose.model('testCollection', user)

const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    role: String,
    active: Boolean,
    avatar: String
});

module.exports = mongoose.model("User", UserSchema);