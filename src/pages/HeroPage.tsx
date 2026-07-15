import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import left from "../assets/left.png";
import { FaInstagram } from "react-icons/fa";
import Audio from "../components/Audio";
import { Gallery } from "../components/Galery";
import CountDown from "../components/CountDown";
import WeddingEvent from "../components/WeddingEvent";
import Swipper from "../components/Swipper";
import RSVP from "../components/RSVP";
import GiftCard from "../components/GiftCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from "react";
import Typewriter from "typewriter-effect";
// import AutoScrollPage from "../components/AutoScrollPage";
import BubbleBackground from "../components/BubbleBackground";
import ThankYouSection from "../components/ThankYouSection";
export default function Hero() {
    AOS.init({ once: false, duration: 1000, })
    return (
        <div className="relative">
            <BubbleBackground />
            {/* Musik Icon Fixed di pojok kanan bawah */}
            {/* <AutoScrollPage /> */}
            <Audio />

            {/* Hero Image */}
            <div className="relative w-full  mx-auto overflow-hidden ">
                <img
                    src="https://wedding-fajri.s3.nevaobjects.id/hero.jpg"
                    alt="Wedding Background"
                    className="w-full h-[650px] object-cover"
                />

                {/* Overlay gelap */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-transparent"></div>

                {/* Tulisan */}
                <div data-aos="fade-down" className="absolute top-6 left-1/2 -translate-x-1/2 text-center z-10 w-100">
                    <h1
                        className="text-white text-5xl leading-tight"
                        style={{ fontFamily: "August Script" }}
                    >
                        {weddingData.bride} & {weddingData.groom}
                    </h1>
                </div>
            </div>

            {/* Hero Text Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-section  px-10 py-20 "
            >

                <div className="text-[#E0CD67] text-center text-4xl p-4 "
                    style={{ fontFamily: "Noto Sans NKo Unjoined" }}
                    data-aos="fade-down"
                >
                    <br />
                    وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                    <br />
                </div>
                <div
                    className="text-[#FFDBCC] text-center text-xl p-4"
                    style={{ fontFamily: "Noto Sans NKo Unjoined" }}
                    data-aos="fade-down"
                >

                    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan
                    di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian
                    itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi
                    kaum yang berpikir."<br />
                    (QS. Ar-Rum: 21)

                </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="hero-section "
            >
                <div data-aos="fade-right" className="h-[300px] flex flex-col justify-end px-10 pb-6 text-center">

                    <div
                        className="text-white text-3xl italic text-left"
                        style={{ fontFamily: "August Script" }}
                    >
                        Celebrating our

                    </div>

                    <div className="text-white text-[160px] leading-none">LO</div>
                </div>

                <div className="bg-gradient-to-b from-[#fffaf6] via-[#fdf4ee] to-[#f8ebe2] px-10">
                    <div data-aos="fade-left" className="text-[#5b0000] text-[160px] leading-none -mt-10 text-center">
                        VE
                    </div>
                    <div
                        className="text-[#5b0000] text-3xl italic text-right"
                        style={{ fontFamily: "August Script" }}
                        data-aos="fade-left"
                    >
                        With You
                    </div>
                    <div >
                        <img
                            src={left}
                            alt="Wedding Background"
                            className="w-[200px]"
                        />
                    </div>
                    <div className="mt-[100px]">
                        <img
                            src="https://wedding-fajri.s3.nevaobjects.id/lwfmvuggr4mn4iwkzuz3.webp"
                            alt="Wedding Background"
                            className="w-full h-[650px] object-cover"
                            data-aos="fade-down-right"
                        />
                        <div
                            className="text-3xl text-[#5b0000] font-bold"
                            style={{ fontFamily: "TheSeasonsRegular" }}
                        >
                            <Typewriter
                                options={{
                                    strings: ["Dea Ayu Ananda"],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />

                        </div>
                        <div data-aos="zoom-in-right">
                            <a target="_blank" href="https://www.instagram.com/deayuananda?igsh=MWxpajVuZWlxNTV6dw==" className="text-[#5b0000] text-xl flex items-center">
                                <FaInstagram className="" />
                                Deaayuananda
                            </a>
                            <div className="text-xl">
                                <span className="text-[#5b0000]" style={{ fontFamily: "TheSeasonsRegular" }}>
                                    Anak ke dua dari
                                </span>{" "}
                                Ibu yanti dan <br /> Bapak sudimianto
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] pb-[100px] ">
                        <img
                            src="https://wedding-fajri.s3.nevaobjects.id/iicgiqfxyynudgg4gjll.webp"
                            alt="Wedding Background"
                            className="w-full h-[650px] object-cover"
                            data-aos="fade-down-left"
                        />
                        <div
                            className="text-3xl text-[#5b0000] font-bold text-right"
                            style={{ fontFamily: "TheSeasonsRegular" }}
                        >
                            <Typewriter
                                options={{
                                    strings: ["M.Fajri Afriyansyah"],
                                    autoStart: true,
                                    loop: true,

                                }}
                            />
                        </div>
                        <div data-aos="zoom-in-left">

                            <a target="_blank" href="https://www.instagram.com/fajriafriyansyah_?igsh=MWxpajVuZWlxNTV6dw%3D%3D"  className="text-[#5b0000] text-xl flex items-center text-right">
                                <FaInstagram className="" />
                                fajriafriyansyah_
                            </a>
                            <div className="text-xl text-right ">
                                <span className="text-[#5b0000]" style={{ fontFamily: "TheSeasonsRegular" }}>
                                    Anak ke pertama dari
                                </span>{" "}
                                Ibu Salmadiati dan <br /> Bapak Afrizal
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className=" p-2 pb-[100px] " data-aos="fade-up">
                <div className="w-full pb-6 text-center mt-5">
                    <div className="text-white text-4xl italic" style={{ fontFamily: "August Script" }}>
                        Our Galery
                    </div>
                </div>
                <Gallery />
            </div>
            <div className=" p-2 pb-[100px] " >
                <div className="w-full pb-6 text-center mt-5">
                    <div className=" mb-4 text-2xl italic text-white" style={{ fontFamily: "August Script" }}>
                        Our Beloved
                    </div>
                    <div
                        className="text-4xl text-[#5b0000] font-bold text-white"
                        style={{ fontFamily: "TheSeasonsRegular" }}>
                        STORY
                    </div>
                </div>

                <Swipper />
            </div>
            <div className=" p-2 pb-[100px] bg-gradient-to-b from-[#fffaf6] via-[#fdf4ee] to-[#f8ebe2]">
                <div className=" pb-6 text-center mt-5">
                    <div className=" mb-4 text-2xl italic" style={{ fontFamily: "August Script" }}>
                        Jangna Lupa
                    </div>
                    <div
                        className="text-4xl text-[#5b0000] font-bold"
                        style={{ fontFamily: "TheSeasonsRegular" }}>
                        WEDDING SCHEDULE
                    </div>
                    <div
                        className=" mt-2 text-2xl text-[#5b0000] "
                        style={{ fontFamily: "TheSeasonsRegular" }}>
                        <CountDown />
                    </div>
                    <div
                        className=" mt-[10%] text-[#5b0000]  p-4 "
                        style={{ fontFamily: "TheSeasonsRegular", }}
                    >
                        <div className="mt-3 ">
                            <WeddingEvent />
                            {/* <div className="font-bold text-3xl">Akad Nikah</div>
                            <div className="text-xl">Senin, 27 Juli 2026</div>
                            <div className="text-xl">Pukul 09.00 WIB</div>
                            <div className="text-xl font-bold">Rumah Mempelai Wanita</div>
                            <div className="text-sm">Jl. Merdeka No. 123</div> */}
                        </div>
                        <a target="_blank" href='https://maps.app.goo.gl/agDSoRBU3eCr6jqo8' className="mt-5 bg-[#3a0000] text-white px-6 py-3 tracking-[2px] text-sm hover:opacity-90 transition">
                            SEE LOCATION
                        </a>
                        <div className="mt-10 space-y-2">

                            <h2 className="text-3xl font-serif">
                                Resepsi
                            </h2>

                            <p className="text-lg">
                                Senin, 27 Juli 2026
                            </p>

                            <p className="text-lg">
                                Pukul 10.00 WIB s/d Selesai
                            </p>

                            <p className="font-semibold text-lg">
                                Rumah Mempelai Wanita
                            </p>

                            <p className="text-sm leading-7 text-gray-700">
                                Jl. Rawa Putaran, RT 01, RW 07,
                                Peranap,Indragiri Hulu, RIAU,
                                Indonesia.
                            </p>

                            {/* Button */}

                        </div>
                    </div>
                    <div className="mt-10 w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4744.52013328137!2d101.96176658795906!3d-0.5263405067505245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1780834458242!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokasi Acara"
                        />
                    </div>



                </div>


            </div>
            <div>
                <GiftCard />
            </div>
            <div className=" p-2 bg-[#3d2115] ">
                <RSVP />
            </div>
            <div>
                <ThankYouSection
                    brideName={weddingData.bride}
                    groomName={weddingData.groom}
                />
            </div>

        </div>
    );
}   