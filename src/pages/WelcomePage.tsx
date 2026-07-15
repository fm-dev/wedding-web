import { motion } from "framer-motion"
import { weddingData } from "../data/wedding"
import React from "react"
import HeroPage from "../pages/HeroPage"
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import BubbleBackground from "../components/BubbleBackground";
export default function Welcome() {
  const [flagHeroPage, setFlagHeroPage] = React.useState(false);
  const [guest, setGuest] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const guestParam = params.get("guest") || "Tamu Undangan";
    setGuest(guestParam);
  }, []);

  const handleFlagClick = () => {
    setFlagHeroPage(true);
  }
  return (
    (!flagHeroPage) ? (
      <section className="relative min-h-screen overflow-hidden">
        {/* Background image full */}
        <BubbleBackground />
        <img
          src="https://wedding-fajri.s3.nevaobjects.id/hero.jpg"
          alt="Wedding Background"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay hitam gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/75" />

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl text-center text-white"
          >
            <p className="mb-5 text-sm uppercase text-white ">
              The Wedding Of
            </p>

            <h1 className="mb-6 text-5xl font-serif leading-tight text-white md:text-7xl" style={{ fontFamily: "August Script" }}>
              {weddingData.bride} & {weddingData.groom}
            </h1>

            <p className="mb-8 text-lg text-white/90 md:text-xl">
              {weddingData.date}
            </p>

            <div className="guest-card" style={{ fontFamily: "TheSeasonsRegular" }}>
              <small className="text-white/90">Mengundang bapak/ibu saudara/saudari.</small>
              <h2>
                <Typewriter
                  options={{
                    strings: [guest],
                    autoStart: true,
                    loop: true,

                  }}
                />
              </h2>
            </div>

            <button
              onClick={handleFlagClick}
              className="mt-3 inline-block rounded-full border border-white/30 bg-white/20 px-8 py-3 text-white backdrop-blur-sm transition hover:bg-white/30"
            >
              Lihat Undangan
            </button>
          </motion.div>
        </div>
      </section>
    ) : (
      <HeroPage />
    )
  )
}