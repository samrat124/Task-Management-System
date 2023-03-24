const mongoose=require('mongoose');

const taskSchema=new mongoose.Schema({
    name:{type:String,required:true},
    status:{type:String,required:true},
    Assinged:{type:[object]}
})

const task=mongoose.model('task',taskSchema);

module.exports=task;