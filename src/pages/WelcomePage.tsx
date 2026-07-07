import { motion } from "framer-motion"
import { weddingData } from "../data/wedding"
import heroImage from "../assets/hero.jpg"

export default function Welcome() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image full */}
      <img
        src={heroImage}
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

          <a
            href="/hero"
            className="inline-block rounded-full border border-white/30 bg-white/20 px-8 py-3 text-white backdrop-blur-sm transition hover:bg-white/30"
          >
            Lihat Undangan
          </a>
        </motion.div>
      </div>
    </section>
  )
}