const Productsdb = require('../models/productsdb')

exports.productsadd = async(req,res)=>{
    const{name,desc,price} = req.body
    const record = new Productsdb({name:name,desc:desc,price:price})
    await record.save()
    res.json(record)
}

exports.allproductsshow = async(req,res)=>{
    const record = await Productsdb.find()
    res.json(record)
}

exports.singleproductshow = async(req,res)=>{
    const id = req.params.id
    const record = await Productsdb.findById(id)
    res.json(record)
}

exports.singleproductupdate = async(req,res)=>{
    const id = req.params.id
    const{name,desc,price,status} = req.body
    await Productsdb.findByIdAndUpdate(id,{name:name,desc:desc,price:price,status:status})
    res.json({message:"Successfully Updated"})
}

exports.singleproductdelete = async(req,res)=>{
    const id = req.params.id
    const record = await Productsdb.findByIdAndDelete(id)
    res.json({message:"Successfully Deleted"})
}

exports.stockproductshow = async(req,res)=>{
    const record = await Productsdb.find({status:'IN STOCK'})
    res.json(record)
}

exports.cartproducts = async(req,res)=>{
    const{ids} = req.body
    const record = await Productsdb.find({_id:{$in:ids}})
    res.json(record)
}