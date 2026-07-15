import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import first from "../assets/gallery/first.jpeg"
const stories = [
    {
        title: "First Meet",
        image: "https://wedding-fajri.s3.nevaobjects.id/gw6xiwfavle0tyzpf1bf.webp",
        desc: "Awal kisah kami dimulai di kampus Fajri. Sebuah pertemuan sederhana yang membawa kami saling mengenal."
    },
    {
        title: "Liburan",
        image: "https://wedding-fajri.s3.nevaobjects.id/liburan.jpeg" ,
        desc: "Perjalanan pertama kami di Jakarta, menciptakan banyak cerita dan kenangan yang tak terlupakan. dan tentu nya pasti ditemanin keluarga :)"
    },
    {
        title: "Engagement",
        image: "https://wedding-fajri.s3.nevaobjects.id/l11wjtbngwn08izi6nuv.webp",
        desc: "Hari istimewa ketika sebuah janji terucap. Alhamdulillah, langkah menuju masa depan dipermudah."
    },
    {
        title: "Prewedding",
        image: "https://wedding-fajri.s3.nevaobjects.id/oecri36sknamgyyjcuqh.webp",
        desc: "Sebuah sesi foto penuh cinta sebagai kenangan menuju hari bahagia yang telah dinantikan."
    },
    {
        title: "Wedding Day",
        image: "https://wedding-fajri.s3.nevaobjects.id/z16oluuzkmc3mwtqshco.webp",
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