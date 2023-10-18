const mongoose = require("../config/connect");

const User = mongoose.model('User', 
{
  name: String, // String is shorthand for {type: String}
  email: String,
  rol_id: String,
  password: String
}
);

module.exports=User