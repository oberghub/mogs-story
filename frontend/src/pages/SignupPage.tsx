import React, { useState } from 'react'
import TextInput from '../components/TextInput'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

type Props = {}

const SignupPage = (props: Props) => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const handleChangeUsername = (value: string) => {
    setData(() => ({...data, userName: value}))
  }
  const handleChangeEmail = (value: string) => {
    setData(() => ({...data, email: value}))
  }
  const handleChangePassword = (value: string) => {
    setData(() => ({...data, password: value}))
  }  
  const handleChangeConfirmPassword = (value: string) => {
    setData(() => ({...data, confirmPassword: value}))
  }
  const register = () => {
    const checkPwd = data.password == data.confirmPassword
    if(checkPwd) {
      axios.post('http://localhost:3000/user/register', data).then(res => {
        if(res.status == 201){
          alert("สมัครสมาชิกสำเร็จ")
          navigate("/login")
        }
      }).catch((e) => {
        alert("พบข้อผิดพลาด")
      })
    }
    else {
      alert("รหัสผ่านไม่ตรงกัน")
    }
  }
  return (
    <>
      <div className="w-[500px] h-fit gap-[20px] p-[20px] sm:p-[40px] bg-white shadow">
        {/* <div className="w-full flex justify-end cursor-pointer">
          <svg
           className='z-10'
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
        <div className="w-full flex justify-start py-5">
            <p className="text-xl sm:text-2xl font-bold">Sign up</p>
        </div>
        <form>
          <TextInput placeholder="username" setValue={handleChangeUsername} type={'text'} />
          <TextInput placeholder="email" setValue={handleChangeEmail} type={'text'} />
          <TextInput placeholder="password" setValue={handleChangePassword} type={'password'} />
          <TextInput placeholder="confirm password" setValue={handleChangeConfirmPassword} type={'password'} />
        </form>
        <div className="w-full flex justify-center items-center py-[15px] sm:py-[30px] gap-[10px]">
          <button onClick={() => register()} className="p-[10px] bg-black rounded">
                <p className="text-white text-sm sm:text-base">Let's Go</p>
            </button>
            <p className="text-sm sm:text-base">Or</p>
            <Link to={"/login"}>
              <p className="underline font-bold cursor-pointer text-sm sm:text-base">Sign in</p>
            </Link>
        </div>
      </div>
    </>
  )
}

export default SignupPage