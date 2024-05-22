import React, { Fragment, useEffect, useState } from "react";
import Chaingmai from "../assets/chiangmai.jpg";
import Cat from "../assets/cat.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
type Props = {};

const HomePage = (props: Props) => {
  const navigate = useNavigate()
  enum contentType {
    PARAGRAPH = "PARAGRAPH",
    IMAGE = "IMAGE",
    HEADER2 = "HEADER2",
  }
  interface storyStruc {
    _id: string;
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
  const token = localStorage.getItem("access_token");
  const [stories, setStories] = useState<storyStruc[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/stories/user", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setStories(res.data));
  }, []);
  const deleteStory = (id: string) => {
    console.log(id)
    console.log(token)
    axios.delete("http://localhost:3000/stories" + `/${id}`, {
      headers: {
        Authorization: token,
      },
    }).then(res => {
      alert(`status: ${res.status} ลบสำเร็จ!`)
      setStories(() => stories.filter(item => item._id !== id))
    }).catch((e) => {
      alert(`ไม่สำเร็จ: เกิดข้อผิดพลาด หรือ token หมดอายุ`);
      console.log(e)
    });
  };
  const viewStory = (story: storyStruc) => {
    navigate('/story/view', { state: story })
  }
  return (
    <>
      <div className="w-[1040px] h-screen flex flex-col">
        <div className="w-full flex py-5 mt-6">
          <p
            onClick={() => console.log(stories)}
            className="text-2xl sm:text-3xl font-bold text-left"
          >
            Your Recent Stories
          </p>
        </div>
        {stories.length > 0 ? (
          <>
            {stories.map((item, index) => (
              <Fragment key={`stories-${index}`}>
                <div className="relative flex gap-2 sm:gap-5 py-5 justify-between w-full sm:h-fit bg-white border-b border-gray-400 items-center">
                  <div className="w-10 flex justify-center">
                    {/* <img
                      src={item.img_title}
                      className="w-3/4 object-scale-down rounded"
                    /> */}
                    <p>{index+1}</p>
                  </div>
                  <div className="flex gap-3 flex-col justify-between w-full sm:w-[100%] h-fit text-left">
                    <div className="w-full flex justify-between">
                      <p onClick={() => viewStory(item)} className="text-xl sm:text-2xl font-bold line-clamp-1">
                        {item.title}
                      </p>
                      <u
                        className="cursor-pointer"
                        onClick={() => deleteStory(item._id)}
                      >
                        ลบ
                      </u>
                    </div>
                    <p className="text-sm sm:text-base line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex justify-between w-full text-gray-400">
                      <p className="text-xs sm:text-sm">
                        Author: {item.author}
                      </p>
                      <p className="text-xs sm:text-sm">
                        Publish Date: {item.publish_date}
                      </p>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </>
        ) : (
          <div className="flex gap-1 flex-wrap text-left">
            <p className="text-[28px] sm:text-[38px] text-gray-400">
              Not found your stories.
            </p>
            <Link to={"/story/create"}>
              <p className="text-[28px] sm:text-[38px] text-[#0CD3E0] underline cursor-pointer">
                Write your story!
              </p>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
