import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SocialLogin = ({handleGoogleLogin, handleGithubLogin}) => {
  return (
    <div className="grid justify-center gap-4">
      <p className="text-neutral-700 text-xl font-medium font-['Inter']">
        Or sign in with
      </p>
      <div className="flex gap-10">
        <button onClick={handleGithubLogin} className="w-[52px] h-[52px] bg-gray-100 rounded-full border-2 flex justify-center items-center text-2xl hover:text-white duration-300 hover:bg-blue-500 border-neutral-700">
          <FaGithub className="text-black" />
        </button>
        <button onClick={handleGoogleLogin} className="w-[52px] h-[52px] bg-gray-100 rounded-full border-2 flex justify-center items-center text-3xl hover:bg-sky-200 duration-300 border-neutral-700">
          <FcGoogle />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
