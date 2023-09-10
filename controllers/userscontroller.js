const Regdb = require('../models/regdb')

exports.allusersfetch = async(req,res)=>{
    const record = await Regdb.find()
    res.json(record)
}

exports.singleuserdelete = async(req,res)=>{
    const id = req.params.id
    const record = await Regdb.findByIdAndDelete(id)
    res.json({message:"Successfully Deleted"})
}
