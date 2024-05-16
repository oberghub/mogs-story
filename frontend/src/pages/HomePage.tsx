import React, { Fragment } from 'react'
import Chaingmai from '../assets/chiangmai.jpg'
import Cat from '../assets/cat.jpg'
type Props = {}

const HomePage = (props: Props) => {
    const data = [
    {
        img: Chaingmai,
        title: "บันทึกเที่ยวเชียงใหม่ 2024",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus eligendi autem omnis itaque, mollitia molestiae laboriosam consequatur pariatur perferendis cumque ducimus, totam laudantium illo tempora fuga nam amet cum!",
        author: "Oberg",
        publishDate: "14 May 2024"
    },
    {
        img: Cat,
        title: "เที่ยวเดินเล่น ไปกับ เท Flea Market",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus eligendi autem omnis itaque, mollitia molestiae laboriosam consequatur pariatur perferendis cumque ducimus, totam laudantium illo tempora fuga nam amet cum!",
        author: "Oberg",
        publishDate: "15 May 2024"
    },
    ]
    return (
        <>
            <div className='w-[1040px] h-screen flex flex-col'>
                <div className='w-full flex py-5 mt-6'>
                    <p className='text-2xl sm:text-3xl font-bold text-left'>Your Recent Stories</p>
                </div>
                {data.length > 0 
                ?
                <>
                {data.map((item, index) => (
                    <Fragment key={`stories-${index}`}>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-5 py-5 sm:py-0 justify-between w-full sm:h-[250px] bg-white border-b border-gray-400 items-center'>
                            <img src={item.img} className='w-full rounded sm:w-[30%] h-auto' />
                            <div className='flex gap-3 flex-col w-full sm:w-[70%] text-left'>
                                <p className='text-xl sm:text-2xl font-bold'>
                                    {item.title}
                                </p>
                                <p className='text-sm sm:text-base line-clamp-3'>{item.desc}</p>
                                <div className='flex justify-between w-full text-gray-400'>
                                    <p className='text-xs sm:text-sm'>Author: {item.author}</p>
                                    <p className='text-xs sm:text-sm'>Publish Date: {item.publishDate}</p>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                ))}
                </>
                :
                <div className='flex gap-1 flex-wrap text-left'>
                    <p className='text-[28px] sm:text-[38px] text-gray-400'>Not found your stories.</p>
                    <p className='text-[28px] sm:text-[38px] text-[#0CD3E0] underline cursor-pointer'>Write your story!</p>
                </div>
                }
            </div>
        </>
    )
}

export default HomePage