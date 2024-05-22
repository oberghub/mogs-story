import React, { useEffect, useState } from "react";
import useScreenSize from "../useScreenSize";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

type Props = {};

const Navbar = (props: Props) => {
  const location = useLocation()
  const navigate = useNavigate()
  const token = localStorage.getItem('access_token')
  const [user, setUser] = useState({userName: ""})
  const { hash, pathname, search } = location;
  const [isShown, setIsShown] = useState(false)
  const screenSize = useScreenSize();
  useEffect(() => {
    if (screenSize.width > 1024) {
      setIsShown(false)
    }
  }, [screenSize.width])

  //get user profile
  useEffect(() => {
    axios.get('http://localhost:3000/user/profile', {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }).then(res => {
      setUser(res.data)
    }).catch((e) => {
      alert("เกิดข้อผิดพลาด หรือ token หมดอายุ")
      logout();
    })
  }, [])
  const logout = () => {
    localStorage.removeItem('access_token')
    navigate('/login')
  }
  return (
    <div style={{display: pathname != "/login" && pathname != "/signup" ? 'flex' : 'none'}} className="relative z-50">
      <div className="w-full flex justify-between items-center bg-white h-[80px] sm:px-[20px] py-[10px] border-b border-[#BABABA]">
        <div className="w-fit h-fit gap-[40px] p-[10px] flex justify-between items-center">
          <Link to={"/"}>
            <svg
              width="57"
              height="22"
              viewBox="0 0 57 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.872 15.828V16.5H12.296V15.828L13.616 15.66C13.872 15.628 14.024 15.564 14.072 15.468C14.12 15.356 14.144 15.028 14.144 14.484V2.148L9.752 14.58H7.184L2.84 2.22V14.484C2.84 15.028 2.864 15.356 2.912 15.468C2.96 15.564 3.112 15.628 3.368 15.66L4.688 15.828V16.5H0.032V15.828L1.352 15.66C1.608 15.628 1.76 15.564 1.808 15.468C1.856 15.356 1.88 15.028 1.88 14.484V2.196C1.88 1.652 1.856 1.332 1.808 1.236C1.76 1.124 1.608 1.052 1.352 1.02L0.032 0.852V0.18H5.096L9.488 12.66L13.952 0.18H18.872V0.852L17.552 1.02C17.296 1.052 17.144 1.124 17.096 1.236C17.048 1.332 17.024 1.652 17.024 2.196V14.484C17.024 15.028 17.048 15.356 17.096 15.468C17.144 15.564 17.296 15.628 17.552 15.66L18.872 15.828ZM32.1463 10.164V10.644C32.1463 12.484 31.6663 13.964 30.7063 15.084C29.7623 16.188 28.4103 16.74 26.6503 16.74C24.8903 16.74 23.5303 16.188 22.5703 15.084C21.6263 13.964 21.1543 12.484 21.1543 10.644V10.164C21.1543 8.324 21.6263 6.852 22.5703 5.748C23.5303 4.644 24.8903 4.092 26.6503 4.092C28.4103 4.092 29.7623 4.644 30.7063 5.748C31.6663 6.852 32.1463 8.324 32.1463 10.164ZM29.1943 9.684C29.1943 7.972 28.9783 6.756 28.5463 6.036C28.1143 5.3 27.4823 4.932 26.6503 4.932C25.8343 4.932 25.2023 5.3 24.7543 6.036C24.3223 6.756 24.1063 7.972 24.1063 9.684V11.124C24.1063 12.82 24.3223 14.044 24.7543 14.796C25.2023 15.532 25.8343 15.9 26.6503 15.9C27.4823 15.9 28.1143 15.532 28.5463 14.796C28.9783 14.044 29.1943 12.82 29.1943 11.124V9.684ZM45.6468 17.748C45.6468 19.06 45.1508 20.068 44.1588 20.772C43.1828 21.492 41.8388 21.852 40.1268 21.852C38.2388 21.852 36.8308 21.54 35.9028 20.916C34.9748 20.308 34.4708 19.548 34.3908 18.636L36.9588 18.228C36.8948 19.076 37.0948 19.748 37.5588 20.244C38.0388 20.756 38.8948 21.012 40.1268 21.012C41.2788 21.012 42.2068 20.796 42.9108 20.364C43.6308 19.932 43.9908 19.308 43.9908 18.492C43.9908 17.916 43.7748 17.476 43.3428 17.172C42.9268 16.884 42.2308 16.74 41.2548 16.74H38.5188C37.6708 16.74 36.9988 16.62 36.5028 16.38C36.0228 16.14 35.6868 15.844 35.4948 15.492C35.3028 15.124 35.2068 14.748 35.2068 14.364C35.2068 13.9 35.3348 13.444 35.5908 12.996C35.8468 12.532 36.2868 12.076 36.9108 11.628C36.2228 11.324 35.6628 10.876 35.2308 10.284C34.7988 9.692 34.5828 8.956 34.5828 8.076C34.5828 7.18 34.7908 6.444 35.2068 5.868C35.6228 5.276 36.1828 4.836 36.8868 4.548C37.5908 4.244 38.3748 4.092 39.2388 4.092H39.6468C40.5748 4.092 41.3748 4.244 42.0468 4.548L45.5028 2.844L45.7908 5.196H43.0548C43.4388 5.532 43.7348 5.94 43.9428 6.42C44.1668 6.884 44.2788 7.436 44.2788 8.076C44.2788 8.94 44.0708 9.668 43.6548 10.26C43.2388 10.852 42.6788 11.3 41.9748 11.604C41.2868 11.908 40.5108 12.06 39.6468 12.06H39.2388C38.7588 12.06 38.2868 12.012 37.8228 11.916C37.4228 12.188 37.1428 12.452 36.9828 12.708C36.8388 12.948 36.7668 13.18 36.7668 13.404C36.7668 13.66 36.8788 13.852 37.1028 13.98C37.3428 14.108 37.7268 14.172 38.2548 14.172H41.3748C42.7508 14.172 43.8068 14.484 44.5428 15.108C45.2788 15.716 45.6468 16.596 45.6468 17.748ZM39.6468 11.22C40.1588 11.22 40.5988 10.996 40.9668 10.548C41.3348 10.1 41.5188 9.276 41.5188 8.076C41.5188 6.876 41.3348 6.052 40.9668 5.604C40.5988 5.156 40.1588 4.932 39.6468 4.932H39.2388C38.7268 4.932 38.2788 5.156 37.8948 5.604C37.5268 6.052 37.3428 6.876 37.3428 8.076C37.3428 9.276 37.5268 10.1 37.8948 10.548C38.2788 10.996 38.7268 11.22 39.2388 11.22H39.6468ZM52.1803 11.964L50.5243 11.58C49.4523 11.324 48.6523 10.868 48.1243 10.212C47.6123 9.54 47.3563 8.748 47.3563 7.836C47.3563 7.164 47.5003 6.548 47.7883 5.988C48.0923 5.412 48.5643 4.956 49.2043 4.62C49.8443 4.268 50.6763 4.092 51.7003 4.092C52.8043 4.092 53.7003 4.268 54.3883 4.62C55.0763 4.972 55.5643 5.436 55.8523 6.012C56.1403 6.588 56.2283 7.204 56.1163 7.86L53.4763 8.34C53.7003 7.252 53.6363 6.412 53.2843 5.82C52.9483 5.228 52.3803 4.932 51.5803 4.932C51.0203 4.932 50.5563 5.1 50.1883 5.436C49.8203 5.756 49.6363 6.22 49.6363 6.828C49.6363 7.388 49.7963 7.884 50.1163 8.316C50.4363 8.732 50.9083 9.012 51.5323 9.156L53.1883 9.54C54.3723 9.812 55.2283 10.244 55.7563 10.836C56.2843 11.412 56.5483 12.132 56.5483 12.996C56.5483 14.068 56.1483 14.964 55.3483 15.684C54.5643 16.388 53.3883 16.74 51.8203 16.74C51.2763 16.74 50.6763 16.66 50.0203 16.5C49.3803 16.324 48.7883 16.012 48.2443 15.564C47.7163 15.116 47.3323 14.476 47.0923 13.644L48.6523 13.02C48.7643 14.076 49.1243 14.82 49.7323 15.252C50.3563 15.684 51.0523 15.9 51.8203 15.9C52.5403 15.9 53.1243 15.74 53.5723 15.42C54.0363 15.084 54.2683 14.604 54.2683 13.98C54.2683 13.548 54.1163 13.156 53.8123 12.804C53.5243 12.436 52.9803 12.156 52.1803 11.964Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className="relative">
            <svg
              className="hidden lg:flex absolute top-[10px] ml-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2" />
              <path
                d="M20 20L17 17"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>

            <input
              type="text"
              className="hidden lg:flex pl-[40px] pr-[10px] bg-[#ECECEC] rounded w-[320px] h-[44px] outline-none"
              placeholder="search stories"
              onChange={() => console.log(user)}
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-[40px]">
          <Link to={"/story/create"}><p className="hidden lg:flex text-base cursor-pointer">Create</p></Link>
          <div className="flex gap-3">
            <div className="flex gap-1">
              <p>Hi!</p>
              <b>{user.userName}</b>
            </div>
            <p className="underline hidden lg:flex text-base cursor-pointer" onClick={() => {logout()}}>Log out</p>
          </div>
          <svg className="cursor-pointer flex lg:hidden" onClick={() => { setIsShown(!isShown) }} width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H27" stroke="black" stroke-width="3" stroke-linecap="round" />
            <path d="M2 20H27" stroke="black" stroke-width="3" stroke-linecap="round" />
            <path d="M2 11H27" stroke="black" stroke-width="3" stroke-linecap="round" />
          </svg>
        </div>
      </div>
      {isShown &&
        <div className="w-full absolute flex flex-col top-[80px] gap-2 p-2 mt-2 shadow-md bg-white">
          <div className="flex relative w-full h-[40px] rounded bg-gray-100">
            <svg
              className="flex lg:hidden absolute top-[8px] ml-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="11" cy="11" r="7" stroke="#33363F" stroke-width="2" />
              <path
                d="M20 20L17 17"
                stroke="#33363F"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="cursor-pointer flex items-center justify-center w-full h-[40px] rounded bg-white">
            <Link to={"/story/create"}><p className="underline" onClick={() => {setIsShown(false)}}>Create</p></Link>
          </div>
          <div className="cursor-pointer flex items-center justify-center w-full h-[40px] rounded bg-white">
            <p className="underline" onClick={() => {logout(), setIsShown(false)}}>Log out</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
