import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setLogin, setsignup, setSignup } from '../../Redux/Action'
import { signUpAPI } from '../../utils/api';
import { showAlert } from '../../utils/commonFunction';
import './Signup.css';


const initialForm = {
    name: '',
    email: '',
    password: ''
}


const Signup = () => {

    const [form, setForm] = useState(initialForm)

    const dispatch = useDispatch();

    let navigate=useNavigate();

    const closeModal = () => {
        setSignup(false, dispatch);
    }

    const goToLogin = () => {
        setSignup(false, dispatch);
        setLogin(true, dispatch);
    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const signupHandler = (e) => {
        e.preventDefault();
        closeModal()
        signUpAPI(form)
        .then(res => {
            console.log(res)
            if(res.token){
            localStorage.setItem('token',res.token)
           navigate('/tasks')
            }
            
            showAlert('Registred Sucessfully');
            setSignup(false, dispatch);
            if (res.data) {
                     
                } else {
                    showAlert(res.err);
                }
            })

    }

    return (
        <div id='signupMainContainer'>
            <div id='signupContainer'>
                <h2>Signup</h2>
                <form onSubmit={signupHandler}>
                    <input type='text' onChange={changeHandler} value={form.name} name='name' placeholder='Enter Your Name' />
                    <input type='email' onChange={changeHandler} value={form.email} name='email' placeholder='Enter Your Mail' />
                    <input type='password' onChange={changeHandler} value={form.password} name='password' placeholder='Enter Password' />
                    <div>
                    <button onClick={(e)=>{
                     e.preventDefault();
                     navigate('/');
                     closeModal();
                    }}>Back</button>
                        <button type='submit' >SignUp</button>
                    </div>
                </form>
                <i onClick={closeModal} id='closeModal' className="fa-solid fa-xmark"></i>
            </div>
        </div>
    )
}

export default Signup