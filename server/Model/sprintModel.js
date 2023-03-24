const mongoose=require('mongoose');

const sprintSchema=new mongoose.Schema({
    name:{type:String,required:true},
    tasks:{type:[object]}
})