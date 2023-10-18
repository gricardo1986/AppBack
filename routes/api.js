const router=require("express").Router();
const {checkToken}=require("../middlewares/checkToken")

router.use("/users", require("./api/users"))
router.use("/roles", checkToken, require("./api/roles"))

module.exports=router