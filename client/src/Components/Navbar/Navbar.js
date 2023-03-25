import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth, setLogin } from '../../Redux/Action';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css'
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
const Navbar = () => {
    const { showLogin, showSignup, isLogin, auth } = useSelector((store) => store);
    console.log(showLogin)
    console.log(showSignup)
    console.log(isLogin)
    console.log(auth)
    let success=localStorage.getItem('success');
    const dispatch = useDispatch();
    const istrue=useSelector((e)=>e.showLogin)
    console.log(istrue);
    const loginHandler = () => {
        if (!isLogin) {
            setLogin(true, dispatch);
        }
    }

    const logoutHandler =()=>{
        setAuth({isLogin:false,details:null},dispatch);
    }
    useEffect(()=>{
    
console.log(1);
return ()=>{
    localStorage.setItem("success",false);
}

    },[])


    return (
        <>
            <nav id='navbar'>
                <div>
                    <button className='iconButton'><i className="fa-solid fa-house"></i>Home</button>
                </div>
                <h1>TaskManager.com</h1>
                <div>
                    {
                        auth.details ? <div id='userContainer'>
                            <div>
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <p>{auth.details.name}</p>
                            <button>
                                <i onClick={logoutHandler} class="fa-solid fa-right-from-bracket"></i>
                            </button>
                        </div> : <div id='userInfo'>
                            <button className='iconButton' onClick={loginHandler}>
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                {isLogin?<span>Logout</span>:<span>Login</span> }
                            </button>
                            
                        </div>
                    }
                </div>
            </nav>
            {showLogin ? <Login/> : ""}
            {showSignup ?<Signup/>  : ""}
            <ToastContainer
                className='toaster'
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer />
        </>
    )
}

export default Navbar