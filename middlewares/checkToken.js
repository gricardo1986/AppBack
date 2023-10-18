const jwt=require("jsonwebtoken")

const checkToken=(req, res, next)=>{

    if(!req.headers['authorization']){
        res.json({error: "Debe incluir la cabecera con el Token"})
    }
    const token=req.headers['authorization']

    let payload;
    try{
        payload=jwt.verify(token,"Pr0Gr4mm1nG")
    }catch(error){
        res.json({error:"Token Incorrecto"})
    }

    next();
}

module.exports={checkToken}