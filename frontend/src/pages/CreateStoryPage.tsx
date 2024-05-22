import { Fragment, useState, useEffect } from 'react'
import AddIcon from '../assets/AddIcon.svg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CreateStoryPage = () => {
    enum contentType {
        PARAGRAPH = "PARAGRAPH",
        IMAGE = "IMAGE",
        HEADER2 = "HEADER2"

    }
    interface storyStruc {
        title: string;
        description: string;
        img_title: string;
        img_caption: string;
        author: string;
        byUserId: string;
        publish_date: string;
        content: content[];
        categories: string[];
    }
    interface content {
        type: contentType;
        content: string;
        img_caption?: string;
    }
    const token = localStorage.getItem('access_token')
    const [user, setUser] = useState({userName: ""})
    //get user profile
    useEffect(() => {
        axios.get('http://localhost:3000/user/profile', {
        headers: {
            Authorization: 'Bearer ' + token
        }
        }).then(res => {
            setUser(res.data)
        })
    }, [])
    const [data, setData] = useState<storyStruc>({
        title: "",
        img_title: "",
        img_caption: "",
        description: "",
        author: "",
        byUserId: "",
        publish_date: "",
        content: [
            // {
            //     type: "PARAGRAPH",
            //     content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae accusamus eligendi autem omnis itaque, mollitia molestiae laboriosam consequatur pariatur perferendis cumque ducimus, totam laudantium illo tempora fuga nam amet cum!"
            // },
            // {
            //     type: "IMAGE",
            //     content: Cat,
            //     img_caption: ""
            // },
        ],
        categories: []
    })
    const [isShownInsertContent, setIsShownInsertContent] = useState(false);
    const [focusOnContent, setFocusOnContent] = useState(null)
    const setTextContent = (forIndex: number, value: string) => {
        setData(() => (
            {
                ...data,
                content: data.content.map((item, index) => (
                    index == forIndex ? ({ ...item, content: value }) : item
                ))
            }
        ))
    }
    const getImageDimension = (imageURL) => {
        const img = new Image()
        img.src = imageURL;
        img.onload = () => { }
        return { width: img.width, height: img.height }
    }
    async function setImageContent (value) {
        const img_base64 = await convertBase64(value)
        // console.log(img_base64)
        // const createImage = URL.createObjectURL(value)
        const imgData = {
            type: "IMAGE",
            content: img_base64,
            img_caption: ""
        }
        setData(() => (
            {
                ...data,
                content: [...data.content, imgData]
            }
        ))
    }
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
              resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    async function setImageTitle (value) {
        const createImage = URL.createObjectURL(value)
        const img_base64 = await convertBase64(value)
        setData(() => (
            {
                ...data,
                img_title: img_base64
            }
        ))
    }
    const setImgCaptionContent = (forIndex: number, value: string) => {
        setData(() => (
            {
                ...data,
                content: data.content.map((item, index) => (
                    index == forIndex ? ({ ...item, content: item.content, img_caption: value }) : item
                ))
            }
        ))
    }
    const addContent = (type: string) => {
        if (type == contentType.PARAGRAPH || type == contentType.HEADER2) {
            const content = {
                type: type,
                content: ""
            }
            setData(() => (
                {
                    ...data,
                    content: [...data.content, content]
                }
            ))
        }
        else if (type == contentType.IMAGE) {
            const content = {
                type: type,
                content: "",
                img_caption: ""
            }
            setData(() => (
                {
                    ...data,
                    content: [...data.content, content]
                }
            ))
        }
    }
    const removeContent = (forIndex: number) => {
        setData(() => (
            {
                ...data,
                content: data.content.filter((item, index) => index != forIndex)
            }
        ))
    }
    const navigate = useNavigate()
    const publishContent = () => {
        const story = data;
        const date = new Date()
        const day = date.getDate()
        const month = date.getMonth() + 1 //Jan = 0
        const year = date.getFullYear()
        story.publish_date = `${day}/${month}/${year}`
        story.author = user.userName;
        story.byUserId = user.userName
        axios.post('http://localhost:3000/stories', story, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then(res => {
            console.log(res)
            alert("เพิ่มสำเร็จ!")
            navigate('/')
        }).catch((e) => {
            alert("ไม่สำเร็จ: เกิดข้อผิดพลาด หรือ token หมดอายุ")
        })
    }
    return (
        <div className="w-[1040px] h-screen">
            <div className="w-full h-fit flex justify-between items-center py-3 gap-5 sm:gap-0 mt-6">
                <p onClick={() => console.log(data)} className="text-2xl sm:text-3xl font-bold text-left">Create Your Story</p>
                <button onClick={() => publishContent()} className="p-3 sm:w-[90px] sm:h-[45px] bg-[#47CA18] rounded outline-none">
                    <p className="font-bold text-white text-xs sm:text-sm">Publish</p>
                </button>
            </div>
            {/* <div className="w-full h-fit flex gap-3 py-3 items-center">
                <img src={AddIcon} className='w-[40px] sm:w-[55px]' />
                <p className='text-base sm:text-xl text-gray-300'>Add Tags</p>
            </div> */}
            <div className="w-full h-fit flex gap-3 py-3 items-center my-5">
                <input value={data.title} onChange={(e) => { setData(() => ({ ...data, title: e.target.value })) }} type='text' className='text-2xl font-bold sm:text-3xl flex flex-wrap pl-3 outline-none w-full' placeholder='Title' />
            </div>
            <div className="relative w-full h-fit flex flex-col gap-3 py-3 items-center justify-center">
                <div className={`reltive flex flex-wrap items-center justify-center pl-3 outline-none w-1/2 sm:w-1/3 ${!data.img_title && "bg-gray-300"}`}>
                    {!data.img_title
                    ?
                    <>
                    <input type='file' id='img-title' className='cursor-pointer absolute left-0 top-[11px] opacity-0 w-1/2 sm:w-1/3 h-[50px] bg-red-200' onChange={(e) => setImageTitle(e.target.files[0])} />
                    <label htmlFor="img-title">
                        <img src={AddIcon} />
                    </label>
                    </>
                    :
                    <img className='w-full h-full object-scale-down rounded' src={data.img_title} />
                    }
                </div>
                <input value={data.img_caption} onChange={(e) => { setData(() => ({ ...data, img_caption: e.target.value })) }} type='text' className='w-full sm:w-1/2 text-center text-sm sm:text-base flex flex-wrap pl-3 outline-none' placeholder='Insert image caption.' />
            </div>
            <div className="w-full h-fit flex gap-3 py-3 items-center">
                <textarea value={data.description} onChange={(e) => { setData(() => ({ ...data, description: e.target.value })) }} className='h-auto text-sm sm:text-base flex pl-3 outline-none w-full' placeholder='Write your paragraph here.' />
            </div>
            {data.content.map((item, index) => (
                <Fragment key={`contentIndex-${index}`}>
                    {item.type == contentType.PARAGRAPH
                        ?
                        <div style={{ backgroundColor: focusOnContent == index ? "#F6F6F6" : "white" }} className="w-full h-fit flex gap-3 py-3 items-center justify-between px-1 rounded">
                            <textarea onChange={(e) => { setTextContent(index, e.target.value) }} className='rounded h-auto text-sm sm:text-base flex pl-3 outline-none w-full' placeholder='Write your paragraph here.' >
                                {item.content}
                            </textarea>
                        </div>
                        : item.type == contentType.IMAGE
                            ?
                            <div className="w-full h-fit flex items-center justify-center relative">
                                <div style={{ backgroundColor: focusOnContent == index ? "#F6F6F6" : "white" }} className='w-full flex flex-col gap-3 items-center my-6'>
                                    <div className={`relative flex flex-wrap items-center justify-center outline-none w-full`}>
                                        <img onClick={() => { console.log(getImageDimension(item.content)) }} className='w-1/2 sm:w-1/3 object-scale-down rounded' src={item.content} />
                                        <input value={item.img_caption} onChange={(e) => { setImgCaptionContent(index, e.target.value) }} type='text' className='text-gray-400 w-full text-center text-sm sm:text-base flex flex-wrap pl-3 outline-none' placeholder='Insert image caption.' />
                                    </div>
                                </div>
                            </div>
                            : item.type == contentType.HEADER2
                            &&
                            <div style={{ backgroundColor: focusOnContent == index ? "lightgray" : "white" }} className="w-full h-fit flex gap-3 py-3 items-center justify-between px-1 rounded">
                                <input value={item.content} onChange={(e) => { setTextContent(index, e.target.value) }} type='text' className='rounded text-xl font-bold sm:text-2xl flex flex-wrap pl-3 outline-none w-full' placeholder='Header2' />
                            </div>
                    }
                </Fragment>
            ))}
            <div className="w-full h-fit flex gap-3 py-3 items-center cursor-pointer">
                <img onClick={() => setIsShownInsertContent(!isShownInsertContent)} className='w-[40px] sm:w-[55px]' src={AddIcon} />
                {isShownInsertContent
                    ?
                    <div className='flex gap-3'>
                        <div onClick={() => addContent(contentType.PARAGRAPH)} className='w-[45px] h-[45px] rounded-full bg-gray-200 flex items-center justify-center'>
                            <p className='font-bold text-sm'>P</p>
                        </div>
                        {/* <div className='w-[45px] h-[45px] rounded-full bg-gray-200 flex items-center justify-center'>
                        <p className='font-bold text-xl'>H1</p>
                    </div> */}
                        <div onClick={() => addContent(contentType.HEADER2)} className='w-[45px] h-[45px] rounded-full bg-gray-200 flex items-center justify-center'>
                            <p className='font-bold text-lg'>H2</p>
                        </div>
                        <div className='relative w-[45px] h-[45px] rounded-full bg-gray-200 flex items-center justify-center'>
                            <p className='font-bold text-sm'>IMG</p>
                            <input type='file' id='img-title' className='rounded-full cursor-pointer opacity-0 absolute left-0 top-0 w-full bg-red-200 h-full' onChange={(e) => setImageContent(e.target.files[0])} />
                        </div>
                    </div>
                    :
                    <p className='text-sm sm:text-base text-gray-400'>Insert content.</p>
                }
            </div>
        </div>
    )
}

export default CreateStoryPage
