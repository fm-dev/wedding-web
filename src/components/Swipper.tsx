import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import firstMeetPhoto from "../assets/photos/gw6xiwfavle0tyzpf1bf.webp";
import holidayPhoto from "../assets/photos/liburan.webp";
import engagementPhoto from "../assets/photos/l11wjtbngwn08izi6nuv.webp";
import preweddingPhoto from "../assets/photos/oecri36sknamgyyjcuqh.webp";
import weddingPhoto from "../assets/photos/fadfadf.webp";

import "swiper/css";
import "swiper/css/pagination";

const stories = [
    {
        title: "First Meet",
        image: firstMeetPhoto,
        desc: "Awal kisah kami dimulai di kampus Fajri. Sebuah pertemuan sederhana yang membawa kami saling mengenal."
    },
    {
        title: "Liburan",
        image: holidayPhoto,
        desc: "Perjalanan pertama kami di Jakarta, menciptakan banyak cerita dan kenangan yang tak terlupakan. dan tentu nya pasti ditemanin keluarga :)"
    },
    {
        title: "Engagement",
        image: engagementPhoto,
        desc: "Hari istimewa ketika sebuah janji terucap. Alhamdulillah, langkah menuju masa depan dipermudah."
    },
    {
        title: "Prewedding",
        image: preweddingPhoto,
        desc: "Sebuah sesi foto penuh cinta sebagai kenangan menuju hari bahagia yang telah dinantikan."
    },
    {
        title: "Wedding Day",
        image: weddingPhoto,
        desc: "Kupikir pertemuan kita hanya singkat. Ternyata, kamu menjadi bagian terpenting dan alasan terbesar dalam bahagiaku.",
    }
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
                        <div className="story-card">
                            <img
                                src={story.image}
                                alt=""
                                loading="lazy"
                                decoding="async"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
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
