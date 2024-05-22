import { Link, useLocation } from "react-router-dom";
import Cat from "../assets/cat.jpg";
import ChaingMai from "../assets/chiangmai.jpg";
import { Fragment } from "react/jsx-runtime";
const ViewStoryPage = () => {
  const location = useLocation();
  const story = location.state;
  enum contentType {
    PARAGRAPH = "PARAGRAPH",
    IMAGE = "IMAGE",
    HEADER2 = "HEADER2",
  }
  return (
    <>
      <div className="w-[1040px] h-screen">
        <div className="w-full flex flex-col gap-3 mt-6">
          <div className="w-full py-3 flex gap-5 sm:gap-0  justify-between items-center">
            <p
              onClick={() => {
                console.log(story);
              }}
              className="text-2xl sm:text-4xl text-left font-bold"
            >
              {story.title}
            </p>
            <Link to={"/"}>
              <p className="underline text-sm sm:text-base cursor-pointer">
                Back
              </p>
            </Link>
          </div>
          <div className="w-full py-3 flex justify-between items-center">
            <p className="text-xs sm:text-[14px] text-gray-400 text-left">
              Author: {story.author}
            </p>
            <p className="text-xs sm:text-[14px] text-gray-400 text-left">
              Publish Date: {story.publish_date}
            </p>
          </div>
          <div className="w-full h-fit flex flex-wrap">
            <p className="text-sm sm:text-base text-left">
              {story.description}
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 items-center">
                  <div
                    className={`relative flex flex-col flex-wrap items-center justify-center outline-none w-full`}
                  >
                    <img
                      className="w-1/2 sm:w-1/3 object-scale-down rounded"
                      src={story.img_title}
                    />
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {story.img_caption}
                    </p>
                  </div>
                </div>
          {story.content.map((item, index) => (
            <Fragment key={`contentIndex-${index}`}>
              {item.type == contentType.PARAGRAPH ? (
                <div className="w-full h-fit flex flex-wrap">
                  <p className="text-sm sm:text-base text-left">
                    {item.content}
                  </p>
                </div>
              ) : item.type == contentType.IMAGE ? (
                <div className="w-full flex flex-col gap-3 items-center">
                  <div
                    className={`relative flex flex-col flex-wrap items-center justify-center outline-none w-full`}
                  >
                    <img
                      className="w-1/2 sm:w-1/3 object-scale-down rounded"
                      src={item.content}
                    />
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {item.img_caption}
                    </p>
                  </div>
                </div>
              ) : (
                item.type == contentType.HEADER2 && (
                  <div className="w-full h-fit flex gap-3 py-3 items-center justify-between px-1 rounded">
                    <p>{item.content}</p>
                  </div>
                )
              )}
            </Fragment>
          ))}
        </div>
        <div className="w-full h-[100px]"></div>
      </div>
    </>
  );
};

export default ViewStoryPage;
