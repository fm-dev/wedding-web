import { motion } from "framer-motion";

interface ThankYouSectionProps {
  brideName: string;
  groomName: string;
  message?: string;
}

export default function ThankYouSection({
  brideName,
  groomName,
  message = "Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir serta memberikan doa restu kepada kami.",
}: ThankYouSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf6] via-[#fdf4ee] to-[#f8ebe2] px-6 py-20">
      {/* Dekorasi background */}
      <div className="pointer-events-none absolute -left-20 top-12 h-52 w-52 rounded-full bg-rose-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-52 w-52 rounded-full bg-amber-200/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-rose-500"
        >
          Terima Kasih
        </motion.p>

        <h2
          className="mb-6 text-4xl leading-tight text-[#6f5145] md:text-6xl"
          style={{ fontFamily: "August Script" }}
        >
          Thank You
        </h2>

        <p
          className="mx-auto max-w-xl text-base leading-8 text-stone-600 md:text-lg"
          style={{ fontFamily: "TheSeasonsRegular" }}
        >
          {message}
        </p>

        <div className="mx-auto my-8 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-rose-300" />
          <span className="text-lg text-rose-400">♥</span>
          <span className="h-px w-12 bg-rose-300" />
        </div>

        <p className="mb-3 text-sm text-stone-500">
          Kami yang berbahagia,
        </p>

        <h3
          className="text-3xl text-[#7a5549] md:text-4xl"
          style={{ fontFamily: "August Script" }}
        >
          {brideName} &amp; {groomName}
        </h3>

        <p className="mt-5 text-sm leading-6 text-stone-500">
          Beserta keluarga kedua mempelai
        </p>
      </motion.div>
    </section>
  );
}