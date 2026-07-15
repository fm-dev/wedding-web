import { motion } from "framer-motion";
import { weddingData } from "../data/wedding";
import left from "../assets/left.png";
import { FaInstagram } from "react-icons/fa";
import Audio from "../components/Audio";
import Gallery from "../components/Galery";
import WeddingEvent from "../components/WeddingEvent";
import Swipper from "../components/Swipper";
import RSVP from "../components/RSVP";
import GiftCard from "../components/GiftCard";
// import { useEffect } from "react";
// import AutoScrollPage from "../components/AutoScrollPage";
import ThankYouSection from "../components/ThankYouSection";
import { useState, useEffect } from "react";
interface GalleryImage {
    id: string | number;
    src: string;
    thumbnail?: string;
    alt: string;
    caption?: string;
}
const weddingPhotos: GalleryImage[] = [
    {
        id: 1,
        src: "https://wedding-fajri.s3.nevaobjects.id/hero.jpg",
        thumbnail: "https://wedding-fajri.s3.nevaobjects.id/hero.jpg",
        alt: "",
        caption: "",
    },
    {
        id: 2,
        src: "https://wedding-fajri.s3.nevaobjects.id/1.jpeg",
        thumbnail: "https://wedding-fajri.s3.nevaobjects.id/1.jpeg",
        alt: "",
        caption: "",
    },
    {
        id: 3,
        src: "https://wedding-fajri.s3.nevaobjects.id/3.jpeg",
        thumbnail: "https://wedding-fajri.s3.nevaobjects.id/3.jpeg",
        alt: "",
        caption: "",
    },
    {
        id: 4,
        src: "https://wedding-fajri.s3.nevaobjects.id/4.jpeg",
        thumbnail: "https://wedding-fajri.s3.nevaobjects.id/4.jpeg",
        alt: "",
        caption: "",
    },
    {
        id: 5,
        src: "https://wedding-fajri.s3.nevaobjects.id/5.jpeg",
        thumbnail: "https://wedding-fajri.s3.nevaobjects.id/5.jpeg",
        alt: "",
        caption: "",
    },
    {
        id: 6,
        src: "https://wedding-fajri.s3.nevaobjects.id/6.jpeg",
        thumbnail: "https://wedding-fajri.s3.nevaobjects.id/6.jpeg",
        alt: "",
        caption: "",
    },
];

interface CalendarDay {
    day: string;
    date: string;
    selected?: boolean;
    muted?: boolean;
}
interface WeddingEventDetail {
    title: string;
    date: string;
    time: string;
    venue: string;
    address: string;
}
interface WeddingEventProps {
    month: string;
    calendarDays: CalendarDay[];
    events: WeddingEventDetail[];
    mapUrl?: string;
    mapEmbedUrl?: string;
}
const weddingSchedules: WeddingEventProps[] = [
    {
        month: "JULI 2026",
        calendarDays: [
            {
                day: "MINGGU",
                date: "26",
            },
            {
                day: "SENIN",
                date: "27",
                selected: true,
            },
            {
                day: "SELASA",
                date: "28",
            },
        ],
        events: [
            {
                title: "Akad Nikah",
                date: "Senin, 27 Juli 2026",
                time: "Pukul 09.00 WIB",
                venue: "Rumah Mempelai Wanita",
                address:
                    "Jl. Rawa Putaran, RT 01, RW 07, Peranap, Indragiri Hulu, Riau, Indonesia.",
            },
            {
                title: "Resepsi",
                date: "Senin, 27 Juli 2026",
                time: "Pukul 10.00 WIB s.d. selesai",
                venue: "Rumah Mempelai Wanita",
                address:
                    "Jl. Rawa Putaran, RT 01, RW 07, Peranap, Indragiri Hulu, Riau, Indonesia.",
            },
        ],
        mapUrl: "https://maps.app.goo.gl/agDSoRBU3eCr6jqo8",
        mapEmbedUrl:
            "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4744.52013328137!2d101.96176658795906!3d-0.5263405067505245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1780834458242!5m2!1sid!2sid",
    },
    {
        month: "AGUSTUS 2026",
        calendarDays: [
            {
                day: "JUMAT",
                date: "31",
                muted: true,
            },
            {
                day: "SABTU",
                date: "01",
                selected: true,
            },
            {
                day: "MINGGU",
                date: "02",
            },
        ],
        events: [
            {
                title: "Resepsi",
                date: "Sabtu, 01 Agustus 2026",
                time: "Pukul 10.00 WIB s.d. selesai",
                venue: "Rumah Mempelai Pria",
                address:
                    "Gg. Puyuh, Air Jamban, Kec. Mandau, Kabupaten Bengkalis, Riau 28784",
            },
        ],
        mapUrl: "https://maps.app.goo.gl/YYrSYftcpoxxQzKx5",
    },
];
export default function Hero() {

    const [guest, setGuest] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const guestParam = params.get("guest") || "Tamu Undangan";
        setGuest(guestParam);
    }, []);
    return (
        <div className="relative">
            {/* Musik Icon Fixed di pojok kanan bawah */}
            {/* <AutoScrollPage /> */}

            {/* Hero Image */}
            <div className="relative mx-auto h-[650px] w-full overflow-hidden">
                {/* Background */}
                <img
                    src="https://wedding-fajri.s3.nevaobjects.id/hero.jpg"
                    alt={`The wedding of ${weddingData.bride} and ${weddingData.groom}`}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/80" />

                {/* Efek vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45)_100%)]" />

                {/* Konten utama */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-6 py-10 text-center text-white">
                    {/* Bagian atas */}
                    <div

                        className="w-full max-w-xl"
                    >
                        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-white/80">
                            The Wedding Of
                        </p>

                        <div className="mx-auto mb-5 flex items-center justify-center gap-3">
                            <span className="h-px w-10 bg-white/40" />
                            <span className="h-1.5 w-1.5 rotate-45 bg-[#e7ca88]" />
                            <span className="h-px w-10 bg-white/40" />
                        </div>

                        <h1
                            className="text-5xl leading-tight drop-shadow-lg sm:text-6xl md:text-7xl"
                            style={{ fontFamily: "August Script" }}
                        >
                            {weddingData.bride}
                            <span className="mx-3 text-[#e7ca88]">&amp;</span>
                            {weddingData.groom}
                        </h1>

                        <p className="mt-5 text-sm font-medium uppercase tracking-[0.25em] text-white/85">
                            {weddingData.date}
                        </p>
                    </div>

                    {/* Bagian bawah: nama tamu */}
                    <div
                        className="w-full max-w-md"
                    >
                        <div className="rounded-[28px] border border-white/20 bg-black/25 px-6 py-5 shadow-2xl backdrop-blur-md">
                            <p className="text-xs uppercase tracking-[0.25em] text-white/65">
                                Kepada Yth.
                            </p>

                            <p className="mt-2 text-sm text-white/80">
                                Bapak/Ibu/Saudara/i
                            </p>

                            <h2
                                className="mt-2 text-2xl text-[#f5dfb2] sm:text-3xl"
                                style={{ fontFamily: "TheSeasonsRegular" }}
                            >
                                {guest || "Tamu Undangan"}
                            </h2>

                            <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-[#e7ca88] to-transparent" />

                            <p className="mt-3 text-xs leading-5 text-white/60">
                                Mohon maaf apabila terdapat kesalahan penulisan nama atau gelar.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Text Section */}
            <motion.section
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: 0.9,
                    ease: "easeOut",
                }}
                className=" relative isolate overflow-hidden px-5 py-20 sm:px-8 md:py-28"
            >
                {/* Dekorasi background */}
                <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#E0CD67]/10 blur-3xl" />

                <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[#FFDBCC]/10 blur-3xl" />

                <div className="relative mx-auto max-w-3xl">
                    <div className="overflow-hidden rounded-[2rem] border border-[#E0CD67]/20 bg-gradient-to-br from-[#5B3218]/90 via-[#4A2511]/95 to-[#32160B]/95 px-6 py-10 shadow-[0_28px_80px_rgba(22,8,2,0.35)] backdrop-blur-md sm:px-10 md:py-14">
                        {/* Garis dekorasi atas */}
                        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E0CD67]/60 to-transparent" />

                        <div className="mb-8 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#E0CD67]/80">
                                Firman Allah
                            </p>

                            <div className="mx-auto mt-4 flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-[#E0CD67]/30" />
                                <span className="h-2 w-2 rotate-45 border border-[#E0CD67]/70" />
                                <span className="h-px w-10 bg-[#E0CD67]/30" />
                            </div>
                        </div>

                        {/* Ayat Arab */}
                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.15,
                            }}
                            lang="ar"
                            dir="rtl"
                            className="mx-auto text-center text-3xl leading-[2.1] text-[#F3D99D] drop-shadow-sm sm:text-4xl md:text-[2.6rem]"
                            style={{
                                fontFamily: '"Noto Naskh Arabic", "Amiri", serif',
                            }}
                        >
                            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                            اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                            مَّوَدَّةً وَّرَحْمَةًۗ اِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ
                            لِّقَوْمٍ يَّتَفَكَّرُوْنَ
                        </motion.blockquote>

                        {/* Pemisah */}
                        <div className="mx-auto my-9 flex items-center justify-center gap-3">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#E0CD67]/30" />
                            <span className="text-sm text-[#E0CD67]">✦</span>
                            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#E0CD67]/30" />
                        </div>

                        {/* Terjemahan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.3,
                            }}
                            className="text-center"
                        >
                            <p
                                className="mx-auto max-w-2xl text-sm italic leading-8 text-[#FFDBCC]/85 sm:text-base md:text-lg md:leading-9"
                                style={{
                                    fontFamily: "TheSeasonsRegular, serif",
                                }}
                            >
                                “Dan di antara tanda-tanda kebesaran-Nya ialah Dia
                                menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                                agar kamu cenderung dan merasa tenteram kepadanya. Dan Dia
                                menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                                yang demikian itu benar-benar terdapat tanda-tanda kebesaran
                                Allah bagi kaum yang berpikir.”
                            </p>

                            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#E0CD67]/20 bg-[#E0CD67]/10 px-5 py-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#E0CD67]" />

                                <cite className="not-italic text-xs font-semibold uppercase tracking-[0.2em] text-[#E0CD67]">
                                    QS. Ar-Rum: 21
                                </cite>

                                <span className="h-1.5 w-1.5 rounded-full bg-[#E0CD67]" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

            >
                <div className="h-[300px] flex flex-col justify-end px-10 pb-6 text-center">

                    <div
                        className="text-white text-3xl italic text-left"
                        style={{ fontFamily: "August Script" }}
                    >
                        Celebrating our

                    </div>

                    <div className="text-white text-[160px] leading-none">LO</div>
                </div>

                <div className="bg-gradient-to-b from-[#fffaf6] via-[#fdf4ee] to-[#f8ebe2] px-10">
                    <div className="text-[#5b0000] text-[160px] leading-none -mt-10 text-center">
                        VE
                    </div>
                    <div
                        className="text-[#5b0000] text-3xl italic text-right"
                        style={{ fontFamily: "August Script" }}
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
                            src="https://wedding-fajri.s3.nevaobjects.id/ayang.webp"
                            alt="Wedding Background"
                            className="w-full h-[650px] object-cover"
                        />
                        <div
                            className="text-3xl text-[#5b0000] font-bold"
                            style={{ fontFamily: "TheSeasonsRegular" }}
                        >
                            Dea Ayu Ananda
                        </div>
                        <div >
                            <a target="_blank" href="https://www.instagram.com/deayuananda?igsh=MWxpajVuZWlxNTV6dw==" className="text-[#5b0000] text-xl flex items-center">
                                <FaInstagram className="" />
                                deayuananda
                            </a>
                            <div className="text-xl">
                                <span className="text-[#5b0000]" style={{ fontFamily: "TheSeasonsRegular" }}>
                                    Anak ke dua dari
                                </span>{" "}
                                Ibu Afrida Yanti dan <br /> Bapak Sudimianto
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] pb-[100px] ">
                        <img
                            src="https://wedding-fajri.s3.nevaobjects.id/iicgiqfxyynudgg4gjll.webp"
                            alt="Wedding Background"
                            className="w-full h-[650px] object-cover"
                        />
                        <div
                            className="text-3xl text-[#5b0000] font-bold text-right"
                            style={{ fontFamily: "TheSeasonsRegular" }}
                        >
                            M. Fajri Afriyansyah
                        </div>
                        <div >

                            <a target="_blank" href="https://www.instagram.com/fajriafriyansyah_?igsh=MWxpajVuZWlxNTV6dw%3D%3D" className="text-[#5b0000] text-xl flex items-center text-right">
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
            <div className=" p-2 pb-[100px] " >
                <div className="w-full pb-6 text-center mt-5">
                    <div className="text-white text-4xl italic" style={{ fontFamily: "August Script" }}>
                        Our Galery
                    </div>
                </div>
                <Gallery
                    images={weddingPhotos}
                    initialIndex={0}
                    showCaption
                />
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
            <div className="">
                {weddingSchedules.map((schedule) => (
                    <WeddingEvent
                        key={`${schedule.month}-${schedule.events[0]?.title}`}
                        {...schedule}
                    />
                ))}
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
            <Audio />

        </div>
    );
}   