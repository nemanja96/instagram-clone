import React from 'react'
import instagramPhoto from '../assets/instagram-photo.png';
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import appStore from '../assets/app-store.png';
import googlePlay from '../assets/google-play.png';

const Login = () => {
  return (
    <div className='bg-[#fafafa] w-full h-screen flex justify-center'>
        <div className='max-w-5xl w-full md:mt-10 px-4'>
            <div className='flex gap-10 justify-center items-center'>
                <img src={instagramPhoto} alt="Instagram" className='hidden md:block' />
                <div className='w-96 flex flex-col gap-4'>
                    <div className='bg-white md:border border-gray-300 border-solid pt-10 pb-6 px-4 flex flex-col items-center'>
                        <img src={logo} alt="Instagram" width="181px" />
                        <form className='mt-6 flex flex-col gap-2 mb-6'>
                            <input placeholder='Phone number, username, or email' className='border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            <input placeholder='Password' className='border border-gray-300 bg-[#fafafa] border-solid p-2 w-[270px] text-sm' />
                            <button className='w-[270px] mt-2 bg-[#0095f6] py-1 text-white text-sm font-medium rounded-sm'>Log In</button>
                        </form>
                        <h2 className="w-[270px] text-center text-gray-400 font-medium border-b border-gray-300 border-solid leading-[0.1em]"><span className='bg-white px-[20px]'>OR</span></h2>
                        <button className='flex justify-center items-center gap-2 mt-6 cursor-pointer'><img src={facebook} alt="Facebook" width="17px" /><span className="text-[#475993] font-medium text-sm">Log in with Facebook</span></button>
                        <p className='text-[#475993] text-xs mt-3 cursor-pointer'>Forgot password?</p>
                    </div>
                    <div className='bg-white md:border border-gray-300 border-solid py-5 px-4 flex flex-col items-center'>
                        <p className='text-sm flex gap-1 text-[#262626]'>Don't have an account?<span className='font-medium text-[#0095f6] cursor-pointer'>Sign up</span></p>
                    </div>
                    <div className='py-2 px-4 flex flex-col items-center'>
                        <p className='text-sm text-[#262626]'>Get the app.</p>
                        <div className="flex gap-2 mt-4">
                            <img src={appStore} alt="App Store" className='cursor-pointer' />
                            <img src={googlePlay} alt="Google Play" className='cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center py-10">
                <ul className='flex flex-wrap gap-3 justify-center max-w-4xl mb-4 px-4 md:px-0'>
                    <li className="text-xs text-gray-400 cursor-pointer">Meta</li>
                    <li className="text-xs text-gray-400 cursor-pointer">About</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Blog</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Jobs</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Help</li>
                    <li className="text-xs text-gray-400 cursor-pointer">API</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Privacy</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Terms</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Top Accounts</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Hashtags</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Locations</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Instagram Lite</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Contact Uploading & Non-Users</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Dance</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Food & Drink</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Home & Garden</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Music</li>
                    <li className="text-xs text-gray-400 cursor-pointer">Visual Arts</li>
                </ul>
                <p className='text-xs text-gray-400 text-center flex gap-4'><span>English</span><span>© 2022 Instagram from Meta</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login