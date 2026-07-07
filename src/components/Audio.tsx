import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { TbMusicPause, TbMusic } from "react-icons/tb";
import musicFile from "../assets/music.mp3";

export default function MusicIconPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false); // fallback
  const audioRef = useRef<HTMLAudioElement>(null);

  // Auto play saat halaman dimuat
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Autoplay gagal:", err);
          setAutoplayBlocked(true); // fallback: tampilkan state paused
        });
    }
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play()
        .catch(err => console.warn("Play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={musicFile} loop />

      {/* Icon musik fixed */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-4 right-4 z-50 cursor-pointer"
        onClick={toggleMusic}
      >
        <div className="bg-white rounded-full p-4 shadow-lg flex items-center justify-center">
          {isPlaying ? (
            <TbMusicPause className="text-3xl text-[#5b3c1a]" />
          ) : (
            <TbMusic className="text-3xl text-[#5b3c1a]" />
          )}
        </div>
      </motion.div>

      {/* Jika autoplay diblokir, bisa tampilkan hint */}
      {autoplayBlocked && !isPlaying && (
        <></>
      )}
    </>
  );
}