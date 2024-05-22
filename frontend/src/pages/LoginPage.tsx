import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import { useState } from "react";
import axios from "axios";

type Props = {};

const LoginPage = (props: Props) => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    userName: "",
    password: "",
  });
  const handleChangeUsername = (value: string) => {
    setData(() => ({ ...data, userName: value }));
  };
  const handleChangePassword = (value: string) => {
    setData(() => ({ ...data, password: value }));
  };
  const login = () => {
    axios
      .post("http://localhost:3000/auth/login", data)
      .then((res) => {
        alert("เข้าสู่ระบบสำเร็จ!");
        const tk = res.data.access_token;
        localStorage.setItem("access_token", tk);
        navigate('/')
      })
      .catch((e) => alert("พบข้อผิดพลาด"));
  };
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
          <p className="text-xl sm:text-2xl font-bold py-5" onClick={() => console.log(data)}>Sign in</p>
        </div>
        <TextInput
          placeholder="username"
          setValue={handleChangeUsername}
          type={"text"}
        />
        <TextInput
          placeholder="password"
          setValue={handleChangePassword}
          type={"password"}
        />
        <div className="w-full flex justify-center items-center py-[15px] sm:py-[30px] gap-[10px]">
          <button onClick={() => login()} className="p-[10px] bg-black rounded">
            <p className="text-white text-sm sm:text-base">Let's Go</p>
          </button>
          <p className="text-sm sm:text-base">Or</p>
          <Link to={"/signup"}>
            <p className="underline font-bold cursor-pointer text-sm sm:text-base">
              Sign up
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
