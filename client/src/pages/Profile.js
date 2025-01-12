import React, { useEffect, useState } from "react";
import "../css/profile.css";
import Carousel from "react-elastic-carousel";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import profileImg from "../Assets/demo.jpg";
import demo from "../Assets/demo.jpg";
import heart from "../Assets/heart.png";
import comment from "../Assets/comment.png";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../app/features/post/postSlice.js";
import { useNavigate } from "react-router-dom";

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
  const { token } = useSelector((state) => state.auth);
  const { page, totalPages, posts, status } = useSelector(
    (state) => state.post
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetch = async (page) => {
    dispatch(fetchPostsStart());
    try {
      const user = await axios.get(
        // `/v2/posts?page=${page}&totalPages=${totalPages}`,
        `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (user.data.message) {
        dispatch(fetchPostsFailure({ error: user.data.error }));
      } else {
        console.log(user.data);
        dispatch(
          fetchPostsSuccess({
            posts: user.data.posts,
            page: user.data.page,
            totalPages: user.data.Pages,
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(page);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight !== document.documentElement.offsetHeight) return;
      // if (status !== "Loading" && page < totalPages)
      fetch(page + 1);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const [show, setShow] = useState(false);
  const [showComment, setComment] = useState(false);
  const [clickedImage, setClickImage] = useState("");
  const handleShow = (image) => {
    window.scrollTo(0, 0);
    setShow(true);
    document.body.style.overflow = "hidden";
    setClickImage(image);
  };
  const handleClose = () => {
    setShow(false);
    setComment(false);
    document.body.style.overflow = "auto";
    setClickImage('');
  };

  const [user, setUser] = useState(null)
  const [post, setPost] = useState(null)

  useEffect(()=>{

    async function getUser(){
     // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZYXNoIiwiaWF0IjoxNzM2NjIxMDA4LCJleHAiOjE3MzY2MjQ2MDh9.L3uU0uwHCgpyGXKOT6p63tRZyOOUg3Mw5hdZWqjNNgE";
      try{
        const response = await axios.get("http://localhost:8080/api/v1/users/get/2",{
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        if(response?.data){
            console.log(response.data)
            setUser(response.data);
        }
        
    } catch(e) {
      console.log(e);
    }
      
    }

    async function getPosts() {
      console.log(localStorage.getItem('token'))
     // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZYXNoIiwiaWF0IjoxNzM2NjIxMDA4LCJleHAiOjE3MzY2MjQ2MDh9.L3uU0uwHCgpyGXKOT6p63tRZyOOUg3Mw5hdZWqjNNgE";
      try {
        const response = await axios.get("http://localhost:8080/api/v1/post/get/2/all",{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('token')}`
          }
        })
        if(response.status===401){
          navigate('/login')
        }
        setPost(response.data)
        
      } catch (error) {
        console.log(error)
      }
    }
 
    getUser();
    getPosts();

  },[]);

  return (
    <>
      <div className="background-grey"></div>
      <div className="profile-main">
        <div className="profile-upper">
          <div className="profile-upper-first">
            <div style={{backgroundImage:`url(data:image/jpeg;base64,${user?.profilePicture})`}} ></div>
          </div>
          {/* <div className="profile-upper-second-container">
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
                  </div> */}

          <div className="profile-upper-second">
            <div className="profile-upper-middle">
              <h2>{user?.username}</h2>
            </div>
            <div className="profile-upper-second-numbers">
              <div className="profile-num">
                <div className="profile-num-container">
                  <div className="numbers">{user?.post}</div>
                  <div style={{ textAlign: "center" }}>Posts</div>
                </div>
                <div className="profile-num-container">
                  <div className="numbers">{user?.followers}</div>
                  <div>Followers</div>
                </div>
                <div className="profile-num-container">
                  <div className="numbers">{user?.following}</div>
                  <div>Following</div>
                </div>
              </div>
            </div>
            <div className="profile-upper-second-second">
              <button className="follow-button">Follow</button>
              <button className="follow-button">Message</button>
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
          </div>
          <div className="profile-data">
            <div className="profile-data-container">
              {/* <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div>
              <div className="profile-data-post" onClick={handleShow}></div> */}

              {post?.map((item)=>{
                return <div className="profile-data-post" style={{backgroundImage: `url(data:image/jpeg;base64,${item.media})`}} onClick={() => handleShow(item.media)}></div>
              })  
              }

              <div className="profile-data-post"></div>
              <div className="profile-data-post"></div>
              <div className="profile-data-post"></div>
              <div className="profile-data-post"></div>
              <div className="profile-data-post"></div>
              <div className="profile-data-post"></div>
            </div>
          </div>
        </div>
      </div>

      {show ? (
        <>
          <div className="profile-modal"></div>
          <div className="profile-modal-outer-container">
            <div className="profile-modal-container">
              <div className="profile-modal-post">
                <div className="home-container-post">
                  <div className="home-container-create-text">
                    <div className="post-profile">
                      <img src={`data:image/jpeg;base64,${user?.profilePicture}`} alt="" />
                    </div>
                    <div className="post-text">
                      <div>
                        <b>Kunal Akhade</b>
                        <p>Khed, Konkan</p>
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <div
                        onClick={handleClose}
                        style={{ fontSize: "40px", cursor: "context-menu" }}
                      >
                        ×
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
                    <img src={`data:image/jpeg;base64,${clickedImage}`} alt="" />
                  </div>
                  <div className="post-bottom">
                    <img onClick={() => alert("Liked")} src={heart} alt="" />
                    <img
                      onClick={() => {
                        setComment((prev) => !prev);
                      }}
                      src={comment}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {showComment ? (
                <div className="profile-post-comment">
                  <div className="comment-section">
                    <div className="comment-box">
                      <div className="comment-img">
                        <img src={demo}></img>
                      </div>
                      <div className="comment-details">
                        <div className="comment-name">
                          <b>Yash Amre</b>
                          <div className="comment-time">
                            <div>9:22</div>
                          </div>
                        </div>
                        <div className="comment-text">
                          Both really looks prettier together
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            :
          </div>{" "}
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default Profile;
