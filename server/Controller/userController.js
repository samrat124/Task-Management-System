const userModel = require('../Models/userModel');
const { updateMovieRating } = require('./movieControllers');

const registerUser =async({name,email,password})=>{

    //Checking User Already Exist Or Not
    const foundUser = await userModel.findOne({email:email});
    if(foundUser){
        throw new Error('Already Registered');
    }

    //Creating New User
    const newUser = await userModel.create({name,email,password});
    return newUser

}


const loginUser =async({email,password})=>{

    //Checking User Exist Or Not
    const foundUser = await userModel.findOne({email:email});
    if(!foundUser){
        throw new Error('User Not Found');
    }

    if(foundUser.password!=password){
        throw new Error('Wrong Password');
    }

    return foundUser

}

const addTask =async({taskId,status},userId)=>{

    //Checking User Exist Or Not
    const foundUser = await userModel.findOne({_id:userId});
    if(!foundUser){
        throw new Error('User Not Found');
    }

    const userTasks = foundUser.userTasks || [];
    let foundIndex;
    userTasks.forEach((ele,idx)=>{
        if(ele.taskId==taskId){
            foundIndex=idx;
            return;
        }
    })

    if(foundIndex){
        throw new Error('Already Rated Movie');
    }

    userTasks.push({taskId,status});
    const updatedUser = await userModel.findOneAndUpdate({_id:userId},{userTasks});
    await updateMovieRating(true,taskId,status);
    return updatedUser

}

const deleteRating =async({taskId},userId)=>{

    //Checking User Exist Or Not
    const foundUser = await userModel.findOne({_id:userId});
    if(!foundUser){
        throw new Error('User Not Found');
    }

    const userTasks = foundUser.userTasks|| [];
    let foundIndex;
    
    for(let i=0;i<userTasks.length;i++){
        if(userTasks[i].taskId==taskId){
            foundIndex=i;
            break;
        }
    }


    if(foundIndex==undefined){
        throw new Error('Movie Not Found');
    }

    await updateTaskStatus(false,taskId,userTasks[foundIndex].status);
    userTasks.splice(foundIndex,1);
    // console.log(ratedMovies)
    const updatedUser = await userModel.findOneAndUpdate({_id:userId},{userTasks});
    return updatedUser;

}

module.exports = {registerUser,loginUser,addTask,deleteRating};