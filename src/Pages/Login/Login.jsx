import { Link } from 'react-router-dom';
import bgImg from '../../assets/others/authentication.png';
import authentication2 from '../../assets/others/authentication2.png';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div
            style={{ backgroundImage: `url('${bgImg}')` }}
            className='bg-no-repeat bg-cover lg:h-screen overflow-x-hidden lg:w-screen flex justify-center px-5 items-center'
        >
            <div className='grid lg:grid-cols-2 shadow-[11px_19px_31px_-8px_rgba(0,0,0,0.75)] my-5 px-5 lg:px-20 py-10 border rounded-md border-gray-300 items-center gap-10'>
                <div className='lg:block hidden'>
                    <img src={authentication2} alt='' />
                </div>
                <div>
                    <h3 className="text-center text-neutral-900 text-2xl mb-5 lg:text-[40px] font-bold font-['Inter']">
                        Login
                    </h3>
                    <form className='grid gap-4'>
                        <div className='flex gap-2 flex-col'>
                            <label
                                htmlFor='email'
                                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                placeholder='Enter Email'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <label
                                htmlFor='password'
                                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
                            >
                                Password
                            </label>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                placeholder='Enter Your Password'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                        </div>
                        <div className='mt-2'>
                            <p className="w-full h-[50px] px-5 py-2 mb-1 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300">
                                U A g l u o
                            </p>
                            <button className="text-indigo-500 text-start ps-2 text-lg hover:text-indigo-700 font-semibold font-['Inter']">
                                Reload Captcha
                            </button>
                        </div>
                        <div className=''>
                            <input
                                type='text'
                                name='captcha'
                                id='captcha'
                                placeholder='Enter Captcha Text'
                                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
                            />
                        </div>
                        <div className='mt-3'>
                            <input
                                type='submit'
                                value='Sign In'
                                className="w-full h-[50px] cursor-pointer duration-300 text-white text-xl font-bold font-['Inter'] bg-[#D1A054] hover:bg-[#ffb84e] hover:text-black bg-opacity-70 rounded-lg"
                            />
                        </div>
                    </form>
                    <div className="text-[#D1A054] text-center my-4 text-lg font-medium font-['Inter']">
                        <span>New here? </span>
                        <Link to='/register' className='font-bold hover:text-[#ffb84e]'>
                            Create a New Account
                        </Link>
                    </div>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;