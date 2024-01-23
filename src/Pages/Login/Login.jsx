import { Link, useLocation, useNavigate } from "react-router-dom";
import bgImg from "../../assets/others/authentication.png";
import authentication2 from "../../assets/others/authentication2.png";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { toast } from "react-toastify";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [captchaStatus, setCaptchaStatus] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const captchaRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = () => {
    const inputText = captchaRef.current.value;
    if (inputText.length <= 5) {
      return toast.error("Enter Captcha Text First");
    }
    if (validateCaptcha(inputText) === true) {
      toast.success("Captcha Successfully Matched");
      setIsDisabled(false);
      setCaptchaStatus(true);
    } else {
      setCaptchaStatus(false);
      toast.error("Wrong Captcha Input");
      captchaRef.current.value = "";
    }
  };

  const handleLogin = (data) => {
    setLoading(true);
    login(data.email, data.password)
      .then(() => {
        setLoading(false);
        reset();
        toast.success("Login SuccessFull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message.substr(10));
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login SuccessFull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message.substr(10));
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then(() => {
        toast.success("Login SuccessFull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message.substr(10));
      });
  };

  return (
    <div
      style={{ backgroundImage: `url('${bgImg}')` }}
      className="bg-no-repeat bg-cover lg:h-screen overflow-x-hidden lg:w-screen flex justify-center px-5 items-center"
    >
      <div className="grid lg:grid-cols-2 shadow-[11px_19px_31px_-8px_rgba(0,0,0,0.75)] my-5 px-5 lg:px-20 py-10 border rounded-md border-gray-300 items-center gap-10">
        <div className="lg:block hidden">
          <img src={authentication2} alt="" />
        </div>
        <div>
          <h3 className="text-center text-neutral-900 text-2xl mb-5 lg:text-[40px] font-bold font-['Inter']">
            Login
          </h3>
          <form onSubmit={handleSubmit(handleLogin)} className="grid gap-4">
            <div className="flex gap-2 flex-col">
              <label
                htmlFor="email"
                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="flex gap-2 flex-col">
              <label
                htmlFor="password"
                className="text-neutral-700 ps-1 text-lg font-semibold font-['Inter']"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
              />
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
            </div>
            <div className="mt-2">
              <div className="w-full h-[50px] px-5 py-2 mb-1 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300">
                <LoadCanvasTemplateNoReload />
              </div>
              <button
                onClick={() => loadCaptchaEnginge(6)}
                type="button"
                className="text-indigo-500 text-start ps-2 text-lg hover:text-indigo-700 font-semibold font-['Inter']"
              >
                Reload Captcha
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                id="captcha"
                placeholder="Enter Captcha Text"
                className="w-full h-[50px] px-5 py-3 text-neutral-800 text-lg font-normal font-['Inter'] bg-white rounded-lg border border-stone-300"
              />
              <button
                type="button"
                onClick={handleCaptcha}
                disabled={captchaStatus}
                className="btn btn-outline disabled:hidden mt-2 mr-2 absolute right-0 pb-1 btn-sm font-bold"
              >
                Check
              </button>
            </div>
            <div className="mt-3">
              <button
                disabled={isDisabled}
                type="submit"
                className="w-full h-[50px] cursor-pointer duration-300 text-white text-xl font-bold font-['Inter'] bg-[#D1A054] hover:bg-[#ffb84e] focus:bg-[#ffb84e] hover:text-black bg-opacity-70 rounded-lg flex items-center justify-center disabled:bg-gray-400 disabled:cursor-default disabled:hover:text-white"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sing In"
                )}
              </button>
            </div>
          </form>
          <div className="text-[#D1A054] text-center my-4 text-lg font-medium font-['Inter']">
            <span>New here? </span>
            <Link to="/register" className="font-bold hover:text-[#ffb84e]">
              Create a New Account
            </Link>
          </div>
          <SocialLogin handleGoogleLogin={handleGoogleLogin} handleGithubLogin={handleGithubLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
