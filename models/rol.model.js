const mongoose = require("../config/connect");

const Rol = mongoose.model('Rol', { name: String });

module.exports=Rol