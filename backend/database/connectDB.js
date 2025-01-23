const mongoose=require('mongoose')

const uri="mongodb://localhost:27017/energyproject"
const ConnectDB=()=>{
    mongoose.connect(uri);
    console.log("Connect successfuly")
}
module.exports=ConnectDB;