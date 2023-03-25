const initialState ={
    showLogin:false,
    showSignup:false,
    auth:{isLogin:false,details:null},
    tasks:[]
}

export const reducer =(state=initialState,action)=>{

    switch (action.type) {
        case "login":return{
            ...state,
            showLogin:action.payload
        }
        case "signup":return {
            ...state,
            showSignup:action.payload
        }
        case 'auth':return {
            ...state,
            auth:action.payload
        }
        case 'tasks':return {
            ...state,
            tasks:action.payload
        }
        default: return state;
    }



}