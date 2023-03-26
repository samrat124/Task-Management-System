 
let apiURL='https://attractive-underclothes-goat.cyclic.app/api/'


export const getTasks =async()=>{
    try{
        const response = await fetch(apiURL+'findtask',{method:"GET",headers:{
        
            token:localStorage.getItem("token")

        }});
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err.message);
    }
}

export const CreateTask =async(body,id)=>{
    try{
        const response = await fetch(apiURL+`/createtask/:${id}`,{
            method:'POST',
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err.message);
    }
}


 export const signUpAPI =async(body)=>{
    try{
        const response = await fetch(apiURL+'register',{
            method:'POST',
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err.message);
    }
}

export const loginAPI = async(body)=>{
    try{
        const response = await fetch(apiURL+'login',{
            method:'POST',
            body:JSON.stringify(body),
            headers:{
                'Content-Type':'application/json'
            }
        });
        const data = await response.json();
        return data;
    }catch(err){
        console.log(err.message);
    }
}


