const Regdb = require('../models/regdb')
const bcrypt = require('bcrypt')

exports.reginsert = async(req,res)=>{
    const{username,password} = req.body
    const pass = await bcrypt.hash(password,10)
    const usercheck = await Regdb.findOne({username:username})
    if(usercheck==null){
    const record = new Regdb({username:username, password:pass})
    await record.save()
    res.json(record)
    }else{
        res.json({message:"Username Already Taken"})
    }
}

exports.reglogin = async(req,res)=>{
    const{username,password} = req.body
    const record = await Regdb.findOne({username:username})
    if(record!==null){
        const passcompare = await bcrypt.compare(password,record.password)
        if(passcompare){
            res.json(record)
        }else{
            res.json({message:"Wrong Password"})
        }
    }else{
        res.json({message:"Wrong Username"})
    }    
}

