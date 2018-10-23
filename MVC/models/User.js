const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({

    name: {
        last: {
            type: String,
        },
        first: {
            type: String,
        }
    },
    password: {
        type: String,
    }
 
});

let User = mongoose.model('User', UserSchema);

module.exports = User;