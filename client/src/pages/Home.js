import React from "react";
import Navbar from "../components/navbar";
import "../css/home.css";
import demo from "../Assets/demo.jpg";
import images from "../Assets/images.png";
import video from "../Assets/video.png";
import clip from "../Assets/clip.png";
import attachment from "../Assets/attachment.png";
import heart from "../Assets/heart.png";
import comment from "../Assets/comment.png";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import Carousel from "react-elastic-carousel";

init({ data });
function Home({ viewportWidth }) {
  const responsive = {
    desktop1: {
      breakpoint: { max: 3000, min: 1300 },
      items: 5,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet1: {
      breakpoint: { max: 1024, min: 760 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 760, min: 520 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 520, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const categories = [
    "man_dancing",
    "gift",
    "microphone",
    "cricket_bat_and_ball",
    "soccer",
    "writing_hand",
    "performing_arts",
  ];
  return (
    <>
      <div className="home-main">
        <div className="home-container">
          <div className="home-container-right">
            <div className="home-container-create">
              <div className="home-container-create-text">
                <div className="post-profile">
                  <img src={demo} alt="" />
                </div>
                <div className="post-text">
                  <button>
                    <b>Start a Post</b>
                  </button>
                </div>
              </div>
              <hr
                style={{
                  border: "0.2px solid rgb(211, 211, 211)",
                  width: "100%",
                }}
              />
              <div className="home-container-create-media">
                <div className="media-options">
                  <img src={images} alt="" />
                  <div>Images</div>
                </div>
                <div className="media-options">
                  {" "}
                  <img src={clip} alt="" />
                  <div>clip</div>
                </div>
                <div className="media-options">
                  {" "}
                  <img src={video} alt="" />
                  <div>video</div>
                </div>
                <div className="media-options">
                  {" "}
                  <img src={attachment} alt="" />
                  <div>attachment</div>
                </div>
              </div>
            </div>

            <Carousel itemsToShow={viewportWidth > 600 ? 6 : 4}>
              {categories.map((i) => {
                return (
                  <div className="home-categories-circle">
                    <em-emoji id={i}></em-emoji>
                  </div>
                );
              })}
              <div
                className="home-categories-circle"
                style={{ opacity: "0.4" }}
              >
                <em-emoji id="heavy_plus_sign"></em-emoji>
              </div>
            </Carousel>

            <div className="home-container-post">
              <div className="home-container-create-text">
                <div className="post-profile">
                  <img src={demo} alt="" />
                </div>
                <div className="post-text">
                  <div>
                    <b>Kunal Akhade</b>
                    <p>Khed, Konkan</p>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  border: "0.2px solid rgb(211, 211, 211)",
                  width: "100%",
                  height: "0",
                }}
              />

              <div className="post-media">
                <img src={demo} alt="" />
              </div>
              <div className="post-bottom">
                <img src={heart} alt="" />
                <img src={comment} alt="" />
              </div>
            </div>
            <div className="home-container-post">
              <div className="home-container-create-text">
                <div className="post-profile">
                  <img src={demo} alt="" />
                </div>
                <div className="post-text">
                  <div>
                    <b>Kunal Akhade</b>
                    <p>Khed, Konkan</p>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  border: "0.2px solid rgb(211, 211, 211)",
                  width: "100%",
                  height: "0",
                }}
              />
              <div className="post-media">
                <img src={demo} alt="" />
              </div>
              <div className="post-bottom">
                <img src={heart} alt="" />
                <img src={comment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
