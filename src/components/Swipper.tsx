import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../assets/gallery/image1.jpg";

const stories = [
    {
        title: "First Date",
        image: image1,
        desc: "Awal pertama kali bertemu dan saling mengenal.",
    },
    {
        title: "Coffee Time",
        image: image1,
        desc: "Mulai sering menghabiskan waktu bersama.",
    },
    {
        title: "Vacation",
        image: image1,
        desc: "Liburan pertama yang tak terlupakan.",
    },
    {
        title: "Engagement",
        image: image1,
        desc: "Momen lamaran penuh kebahagiaan.",
    },
    {
        title: "Prewedding",
        image: image1,
        desc: "Mengabadikan perjalanan cinta.",
    },
    {
        title: "Wedding Day",
        image: image1,
        desc: "Hari bahagia yang dinanti.",
    },
];

export default function StorySlider() {
    return (
        <div className="story-section">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
                centeredSlides={false}
                speed={900}
                slideToClickedSlide={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {stories.map((story, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="story-card"
                            style={{
                                backgroundImage: `url(${story.image})`,
                            }}
                        >
                            <div className="overlay">
                                <h3>{story.title}</h3>
                                <p>{story.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}