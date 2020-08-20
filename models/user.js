const mongoose = require('mongoose');

new Userschema = new.mongoose.Schema({
    image:{
        type: String,
    },
    email:{
        type: String,
        required: true
    }
});

const User = mongoose.model('User',UserSchema);
module.exports = User;