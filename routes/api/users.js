const router=require("express").Router();
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")

const User=require("../../models/user.model")

router.post("/register", async (req, res)=>{
    try{
        req.body.rol_id=1
        req.body.password=bcrypt.hashSync(req.body.password, 12)
        const user=await User.create(req.body)
        res.json(user)
    }
    catch(error){
        res.json({error: error.message})
    }
})

router.post("/login", async (req, res)=>{
    const user= await User.findOne({email: req.body.email})

    if(!user){
        return res.json({error: "Usuario no existe"})
    }

    const eq=bcrypt.compareSync(req.body.password, user.password)

    if(!eq){
        return res.json({error: "Hay un problema con la contraseña"})
    }

    return res.json(
        {
            success: "Login Correcto",
            token: createToken(user)
        }
    )
})

function createToken(user){
    const payload={
        user_id: user.id,
        user_rol: user.rol_id,
        user_name: user.name
    }

    return jwt.sign(payload,"Pr0Gr4mm1nG")
}



module.exports=router