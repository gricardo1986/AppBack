const router=require("express").Router();

const Rol=require("../../models/rol.model")

router.get('/', async (req, res) => {
    try{
        const roles = await Rol.find({});
        res.json(roles)
    }catch(error){
        res.json({error: error.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id}=req.params
    try{
        const rol=await Rol.findOne({_id:id})
        res.json(rol)
    }
    catch(error){
        res.json({error: error.message})
    }
})

router.post("/", async (req, res)=>{
    try{
        const rol=await Rol.create(req.body)
        res.json(rol)
    }
    catch(error){
        res.json({error: error.message})
    }
})


router.put("/:id", async (req, res)=>{
    const {id}=req.params
    try{
        const rol=await Rol.updateOne({ _id: id }, { $set: req.body })
        res.json(rol)
    }
    catch(error){
        res.json({error: error.message})
    }
})


router.delete('/:id', async (req, res) => {
    const {id}=req.params
    try{
        const rol=await Rol.findOne({_id:id});
        await rol.deleteOne();
        res.json(rol)
    }
    catch(error){
        res.json({error: error.message})
    }
})

module.exports=router