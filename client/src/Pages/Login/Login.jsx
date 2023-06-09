import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setAuth, setLogin, setSignup } from '../../Redux/Action'
import { loginAPI } from '../../utils/api';
import { showAlert } from '../../utils/commonFunction';
import './Login.css';
import {Link, useNavigate} from 'react-router-dom'

const initalForm = {
    email:'',
    password:''
}


const Login = () => {
    const istrue=useSelector((e)=>e.showLogin)
    const [form,setForm] = useState(initalForm);

    const dispatch = useDispatch();

    let navigate=useNavigate();

    const closeModal = () => {
        setLogin(false, dispatch);
    }

    const goToSignUp =(e)=>{
        e.preventDefault();
        setLogin(false,dispatch);
        setSignup(true,dispatch);
        navigate('/signup')
    }

    const changeHandler =(e)=>{
        const {name,value}= e.target;
        setForm({...form,[name]:value});
    }

    const loginHandler=(e)=>{
        closeModal();
        e.preventDefault();
        loginAPI(form)
        .then(res => {
            if (res.token) {
                showAlert('Login Sucessfully');
                localStorage.setItem("token",res.token);
                setLogin(false, dispatch);
                setAuth({isLogin:true,details:res.data},dispatch);
               
            } else {
                showAlert(res.err);
            }
        })
    }



    return (
        <div id='loginMainContainer'>
            
            <div id='loginContainer'>
            <h1 style={{color:'white',fontSize:'40px',letterSpacing:'2px'}}>Task Management System</h1>
                <h2 style={{letterSpacing:'2px',marginBottom:'20px'}}>LogIn</h2>
                <form onSubmit={loginHandler}>
                    <input type='email' name='email' onChange={changeHandler} value={form.email} placeholder='Enter Your Mail' />
                    <input type='password' name='password' onChange={changeHandler} value={form.password} placeholder='Enter Password' />
                    <div>
                        
                        
                        <button type='submit' >Login</button>
                        <button onClick={goToSignUp} >Create Account</button>
                    </div>
                </form>
                <i onClick={closeModal} id='closeModal' className="fa-solid fa-xmark"></i>

            </div>
        </div>
    )
}

export default Login