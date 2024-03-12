import React from "react";
import "../css/profile.css";
import Carousel from "react-elastic-carousel";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import profileImg from "../Assets/demo.jpg";
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
}

const categories = [
  "man_dancing",
  "gift",
  "microphone",
  "cricket_bat_and_ball",
  "soccer",
  "writing_hand",
  "performing_arts",
];

function Profile({ viewportWidth }) {
  return (
    <>
      <div className="background-grey"></div>
      <div className="profile-main">
        <div className="profile-upper">
          <div className="profile-upper-first">
            <div></div>
          </div>

          <div className="profile-upper-second">
            <div className="profile-upper-middle">
              <h2>Alisha Kapoor</h2>
            </div>
            <div className="profile-upper-second-numbers">
              <div className="profile-num">
                <div className="profile-num-container">
                  <div className="numbers">120</div>
                  <div style={{ textAlign: "center" }}>Posts</div>
                </div>
                <div className="profile-num-container">
                  <div className="numbers">1200</div>
                  <div>Followers</div>
                </div>
                <div className="profile-num-container">
                  <div className="numbers">400</div>
                  <div>Following</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-bottom">
          <div className="profile-bottom-container">
            <div className="profile-cat">
              <Carousel
                itemsToShow={
                  viewportWidth > 900 ? 8 : viewportWidth > 600 ? 4 : 3
                }
              >
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
            </div>
            <div className="profile-data">
              <div className="profile-data-container">
                <div className="profile-data-post"></div>
                <div className="profile-data-post"></div>
                <div className="profile-data-post"></div>
                <div className="profile-data-post"></div>
                <div className="profile-data-post"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
