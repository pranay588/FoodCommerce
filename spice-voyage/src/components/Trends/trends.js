import "./trends.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import "swiper/css/autoplay";
// import required modules
import { Pagination,Navigation,Autoplay } from "swiper";


const Trends = ()=>{
    return (

        <section className="trends-sec">
            <p className="container-title">Dishes</p>
            <div className="container">
                
            
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation
            autoplay={{
                delay:4000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><div class="card-1 cards">
                <img src={img1}/>
                <p class="name">card 1</p>
                <div class="buying">
                    <p>$6.99</p><button>Add</button>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div class="card-1 cards">
                <img src={img2}/>
                <p class="name">card 2</p>
                <div class="buying">
                    <p>$6.99</p><button>Add</button>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div class="card-1 cards">
                <img src={img3}/>
                <p class="name">card 3</p>
                <div class="buying">
                    <p>$6.99</p><button>Add</button>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><div class="card-1 cards">
                <img src={img4}/>
                <p class="name">card 4</p>
                <div class="buying">
                    <p>$6.99</p><button>Add</button>
                </div>
            </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </section>
      );
}

export default Trends;