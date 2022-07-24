import React, { useState, useRef } from 'react'
import instagramPhoto from '../assets/instagram-photo.PNG';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import facebookWhite from '../assets/facebook-white.png';
import appStore from '../assets/app-store.png';
import googlePlay from '../assets/google-play.png';
import { useSignInWithFacebook, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Login = () => {

    // Create Account with Email, Full name, Username, Password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);

    // Login with Email and Password
    const [emailLogin, setEmailLogin] = useState('');
    const [passwordLogin, setPasswordLogin] = useState('');
    const [ signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);

    // Login with Facebook
    const [signInWithFacebook] = useSignInWithFacebook(auth);

    // Change UI from Login to SignUp Component
    const [signUp, setSignUp] = useState(false);

    // Login field
    const [isEmailFalse, setIsEmailFalse] = useState(false);
    const [isPasswordFalse, setIsPasswordFalse] = useState(false);

    const isEmailSetRef = useRef(null);
    const isPasswordSetRef = useRef(null);

    const loginForm = (emailLogin, passwordLogin) => {
        if(!isEmailSetRef.current.value) {
            setIsEmailFalse(true);
            setIsPasswordFalse(false);
            return;
        } else if(!isPasswordSetRef.current.value) {
            setIsPasswordFalse(true);
            setIsEmailFalse(false);
            return;
        }

        signInWithEmailAndPassword(emailLogin, passwordLogin);
    }

    // Create account field
    const [isAccountEmailFalse, setIsAccountEmailFalse] = useState(false);
    const [isAccountPasswordFalse, setIsAccountPasswordFalse] = useState(false);

    const isAccountEmailSetRef = useRef(null);
    const isAccountPasswordSetRef = useRef(null);

    const signUpForm = (email, password) => {
        if(!isAccountEmailSetRef.current.value) {
            setIsAccountEmailFalse(true);
            setIsAccountPasswordFalse(false);
            return;
        } else if(!isAccountPasswordSetRef.current.value) {
            setIsAccountPasswordFalse(true);
            setIsAccountEmailFalse(false);
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

  return (
    <div className='bg-[#fafafa] w-full min-h-screen flex justify-center items-center'>
        <div className='max-w-5xl w-full md:mt-10 px-4'>
            <div className='flex gap-10 justify-center items-center'>
                <img src={instagramPhoto} alt="Instagram" className='hidden md:block' />
                <div className='w-96 flex flex-col gap-4'>

                    { !signUp ? 

                    // Login
                    <div className='bg-white md:border border-gray-300 border-solid pt-10 pb-6 px-4 flex flex-col items-center'>
                        <img src={logo} alt="Instagram" width="181px" />
                        <div className='mt-6 flex flex-col mb-6'>
                            <input ref={isEmailSetRef} placeholder='Email' type="email" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} className='rounded-sm mt-3 border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            { isEmailFalse && <span className='text-red-500 text-sm'>This field is required</span> }
                            <input ref={isPasswordSetRef} placeholder='Password' type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} className='rounded-sm mt-3 border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            { isPasswordFalse && <span className='text-red-500 text-sm'>This field is required</span> }
                            <button type="submit" onClick={() => loginForm(emailLogin, passwordLogin)} className='w-[270px] mt-4 bg-[#0095f6] py-1 text-white text-sm font-medium rounded-sm'>Log In</button>
                        </div>
                        <h2 className="w-[270px] text-center text-gray-400 text-xs font-medium border-b border-gray-300 border-solid leading-[0.1em]"><span className='bg-white px-[20px]'>OR</span></h2>
                        <div onClick={() => signInWithFacebook()} className='flex justify-center items-center gap-2 mt-6 cursor-pointer'><img src={facebook} alt="Facebook" width="17px" /><span className="text-[#475993] font-medium text-sm">Log in with Facebook</span></div>
                        <p className='text-[#00376b] text-xs mt-4 cursor-pointer'>Forgot password?</p>
                    </div>
                    :

                    // Create Account
                    <div className='bg-white md:border border-gray-300 border-solid pt-10 pb-6 px-4 flex flex-col items-center'>
                        <img src={logo} alt="Instagram" width="181px" />
                        <h3 className='text-gray-400 text-lg font-medium text-center mt-2 px-6 leading-5'>Sign up to see photos and videos from your friends</h3>
                        <button onClick={() => signInWithFacebook()} className='w-[270px] bg-[#0095f6] py-2 text-white text-sm font-medium rounded-sm flex justify-center items-center gap-4 mt-4 cursor-pointer'><img src={facebookWhite} alt="Facebook" width="17px" /><span className="text-white font-medium text-sm">Log in with Facebook</span></button>
                        <h2 className="w-[270px] text-center mt-6 text-gray-400 text-xs font-medium border-b border-gray-300 border-solid leading-[0.1em]"><span className='bg-white px-[20px]'>OR</span></h2>
                        <div className='mt-6 flex flex-col items-center gap-2 mb-6'>
                            <input ref={isAccountEmailSetRef} placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='rounded-sm border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            { isAccountEmailFalse && <span className='text-red-500 text-sm'>This field is required</span> }
                            {/* <input placeholder='Full Name' type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='rounded-sm border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            <input placeholder='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-sm border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' /> */}
                            <input ref={isAccountPasswordSetRef} placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' className='rounded-sm border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            { isAccountPasswordFalse && <span className='text-red-500 text-sm'>This field is required</span> }
                            <p className='text-gray-400 text-xs text-center md:px-12 pt-2'>People who use our service may have uploaded your contact information to Instagram. <strong>Learn More</strong>.</p>
                            <p className='text-gray-400 text-xs text-center md:px-10 py-1'>By signing up, you agree to our <strong>Terms</strong>, <strong>Data Policy</strong> and <strong>Cookies Policy</strong>.</p>
                            <button type="submit" onClick={() => signUpForm(email, password)} className='w-[270px] mt-2 bg-[#0095f6] py-1 text-white text-sm font-medium rounded-sm'>Sign up</button>
                        </div>
                    </div> }

                    { !signUp ?
                        <div className='bg-white md:border border-gray-300 border-solid py-5 px-4 flex flex-col items-center'>
                            <p className='text-sm flex gap-1 text-[#262626]'>Don't have an account?<span className='font-medium text-[#0095f6] cursor-pointer' onClick={() => setSignUp(true)}>Sign up</span></p>
                        </div>
                    :
                        <div className='bg-white md:border border-gray-300 border-solid py-5 px-4 flex flex-col items-center'>
                            <p className='text-sm flex gap-1 text-[#262626]'>Have an account?<span className='font-medium text-[#0095f6] cursor-pointer' onClick={() => setSignUp(false)}>Log in</span></p>
                        </div>  
                    }

                    <div className='py-2 px-4 flex flex-col items-center'>
                        <p className='text-sm text-[#262626]'>Get the app.</p>
                        <div className="flex gap-2 mt-4">
                            <img src={appStore} alt="App Store" width="138px" height="43px" className='cursor-pointer' />
                            <img src={googlePlay} alt="Google Play" width="138px" height="43px" className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-10">
                <ul className='flex flex-wrap gap-x-4 gap-y-2 justify-center max-w-4xl mb-4 mt-10 px-4 md:px-0'>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Meta</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">About</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Blog</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Jobs</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Help</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">API</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Privacy</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Terms</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Top Accounts</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Hashtags</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Locations</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Instagram Lite</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Contact Uploading &amp; Non-Users</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Dance</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Food &amp; Drink</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Home &amp; Garden</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Music</li>
                    <li className="text-xs text-[#8e8e8e] cursor-pointer">Visual Arts</li>
                </ul>
                <p className='text-xs text-[#8e8e8e] text-center flex gap-4'><span>English</span><span>&copy; 2022 Instagram from Meta</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login