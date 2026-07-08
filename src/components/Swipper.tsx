import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import image1 from "../assets/gallery/7R405831.jpg";
import prewed from "../assets/gallery/PREWED.jpeg"
import Vacation from "../assets/gallery/VECATION.jpeg"
import Engagement from "../assets/gallery/ENGEGMENT.jpeg"
import first from "../assets/gallery/first.jpeg"
const stories = [
    {
        title: "First Meet",
        image: first,
        desc: "Awal kisah kami dimulai di kampus Fajri. Sebuah pertemuan sederhana yang membawa kami saling mengenal."
    },
    {
        title: "Liburan",
        image: Vacation,
        desc: "Perjalanan pertama kami di Jakarta, menciptakan banyak cerita dan kenangan yang tak terlupakan. dan tentu nya pasti ditemanin keluarga :)"
    },
    {
        title: "Engagement",
        image: Engagement,
        desc: "Hari istimewa ketika sebuah janji terucap. Alhamdulillah, langkah menuju masa depan dipermudah."
    },
    {
        title: "Prewedding",
        image: prewed,
        desc: "Sebuah sesi foto penuh cinta sebagai kenangan menuju hari bahagia yang telah dinantikan."
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
                slidesPerView={2}
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
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 16,
                    },
                    1024: {
                        slidesPerView: 2,
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
                                <h5>{story.title}</h5>
                                <p>{story.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}