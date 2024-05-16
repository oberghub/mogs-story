import React from 'react'

type Props = {}

const SearchBar = (props: Props) => {
  return (
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
      />
    </div>
  )
}

export default SearchBar