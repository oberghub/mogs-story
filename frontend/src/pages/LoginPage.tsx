import TextInput from "../components/TextInput";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <>
      <div className="w-[500px] h-fit gap-[20px] p-[20px] sm:p-[40px] bg-white shadow">
        {/* <div className="w-full flex justify-end cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#33363F"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div> */}
        <div className="w-full flex justify-start">
            <p className="text-xl sm:text-2xl font-bold py-5">Sign in</p>
        </div>
        <TextInput placeholder="username" />
        <TextInput placeholder="password" />
        <div className="w-full flex justify-center items-center py-[15px] sm:py-[30px] gap-[10px]">
            <button className="p-[10px] bg-black rounded">
                <p className="text-white text-sm sm:text-base">Let's Go</p>
            </button>
            <p className="text-sm sm:text-base">Or</p>
            <p className="underline font-bold cursor-pointer text-sm sm:text-base">Sign up</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
