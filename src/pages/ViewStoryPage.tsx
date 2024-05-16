import Cat from '../assets/cat.jpg'
import ChaingMai from '../assets/chiangmai.jpg'
const ViewStoryPage = () => {
    return (
        <>
            <div className="w-[1040px] h-screen">
                <div className="w-full flex flex-col gap-3 mt-6">
                    <div className="w-full py-3 flex gap-5 sm:gap-0  justify-between items-center">
                        <p className="text-2xl sm:text-4xl text-left font-bold">บันทึกเที่ยวเชียงใหม่ 2023 ความทรงจำอันแสนดี</p>
                        <p className="underline text-sm sm:text-base cursor-pointer">Back</p>
                    </div>
                    <div className="w-full py-3 flex justify-between items-center">
                        <p className="text-xs sm:text-[14px] text-gray-400 text-left">Author: Obergdasoosadas</p>
                        <p className="text-xs sm:text-[14px] text-gray-400 text-left">Publish Date: 14 May 2023</p>
                    </div>
                    <div className="w-full h-fit flex flex-wrap">
                        <p className="text-sm sm:text-base text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur minus rerum eveniet repellendus? Minus quibusdam vero aliquid sint iure adipisci possimus sapiente vel ipsa eos. Placeat aut adipisci dolorem repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda accusantium nihil provident et consequuntur, voluptatibus a ea eligendi dignissimos quidem sit nemo recusandae numquam, iure labore facere repellendus eveniet!</p>
                    </div>
                    <div className="w-full my-3 h-fit flex flex-col flex-wrap gap-2 justify-center items-center">
                        <img src={Cat} className='w-full sm:w-3/4' />
                        <p className='text-gray-400 text-xs sm:text-sm'>Orange cat.</p>
                    </div>
                    <div className="w-full h-fit flex flex-wrap">
                        <p className="text-sm sm:text-base text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nostrum deserunt aliquam. Voluptate sequi beatae non quibusdam nulla dolor quae iure a quisquam, necessitatibus perferendis praesentium, ratione asperiores ea sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur minus rerum eveniet repellendus? Minus quibusdam vero aliquid sint iure adipisci possimus sapiente vel ipsa eos. Placeat aut adipisci dolorem repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum assumenda accusantium nihil provident et consequuntur, voluptatibus a ea eligendi dignissimos quidem sit nemo recusandae numquam, iure labore facere repellendus eveniet!</p>
                    </div>
                    <div className="w-full my-3 h-fit flex flex-col flex-wrap gap-2 justify-center items-center">
                        <img src={ChaingMai} className='w-full sm:w-3/4' />
                        <p className='text-gray-400 text-xs sm:text-sm'>กิ่วแม่ปาน จังหวัดเชียงใหม่</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewStoryPage