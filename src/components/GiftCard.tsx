import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaCheck,
  FaCopy,
  FaCreditCard,
  FaGift,
} from "react-icons/fa";

type GiftAccount = {
  id: string;
  bank: string;
  name: string;
  number: string;
};

const accounts: GiftAccount[] = [
  {
    id: "bni-fajri",
    bank: "BNI",
    name: "Muhammad Fajri Afriyansyah",
    number: "1891196330",
  },
  {
    id: "Bri-dea",
    bank: "BRI",
    name: "Dea Ayu Ananda",
    number: "161901009755505",
  },
];

function formatAccountNumber(number: string): string {
  return number.replace(/(\d{4})(?=\d)/g, "$1 ");
}

export default function GiftCard() {
  const [copied, setCopied] = useState("");
  const [error, setError] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    return () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    };
  }, []);

  const handleCopy = async (account: GiftAccount) => {
    setError("");

    try {
      await navigator.clipboard.writeText(account.number);
      setCopied(account.id);

      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }

      resetTimer.current = setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch {
      setError(
        "Nomor rekening gagal disalin. Silakan salin secara manual.",
      );
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#3d2115] px-4 py-20 sm:px-6">
      {/* Dekorasi background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-[#d4af67]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#c8846b]/10 blur-3xl" />

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : {
                opacity: 0,
                y: 40,
              }
        }
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        className="relative mx-auto max-w-xl"
      >
        {/* Header */}
        <div className="mb-10 text-center">
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.8,
                  }
            }
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#e7ca88]/30 bg-[#e7ca88]/10 text-2xl text-[#e7ca88]"
          >
            <FaGift />
          </motion.div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d9b978]">
            Amplop Digital
          </p>

          <h2
            className="text-4xl text-[#f5dfb2] sm:text-5xl"
            style={{ fontFamily: "August Script" }}
          >
            Wedding Gift
          </h2>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#f5e8df]/75 sm:text-base">
            Doa dan kehadiran Anda merupakan hadiah terindah
            bagi kami. Namun, apabila berkenan memberikan tanda
            kasih, dapat disampaikan melalui rekening berikut.
          </p>
        </div>

        {/* Account cards */}
        <div className="space-y-5">
          {accounts.map((account, index) => {
            const isCopied = copied === account.id;

            return (
              <motion.article
                key={account.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 24,
                      }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -4,
                      }
                }
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-[#e7ca88]/20 bg-gradient-to-br from-[#70442b] via-[#58321f] to-[#422317] p-6 shadow-[0_24px_60px_rgba(20,8,3,0.35)]"
              >
                {/* Dekorasi kartu */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#e7ca88]/10" />
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#e7ca88]/10" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f5dfb2]/50 to-transparent" />

                <div className="relative">
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-[0.25em] text-[#e7ca88]/70">
                        Bank Transfer
                      </p>

                      <h3 className="text-2xl font-semibold tracking-wide text-[#f5dfb2]">
                        {account.bank}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#e7ca88]/20 bg-[#e7ca88]/10 text-xl text-[#e7ca88]">
                      <FaCreditCard />
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#f5e8df]/50">
                      Nomor rekening
                    </p>

                    <p className="break-all font-mono text-xl font-semibold tracking-[0.16em] text-white sm:text-2xl">
                      {formatAccountNumber(account.number)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-white/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="min-w-0">
                      <p className="mb-1 text-xs text-[#f5e8df]/50">
                        Atas nama
                      </p>

                      <p className="truncate text-sm font-medium text-[#f5e8df]">
                        {account.name}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(account)}
                      aria-label={`Salin nomor rekening ${account.bank}`}
                      className={[
                        "flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                        "focus:outline-none focus:ring-4 focus:ring-[#e7ca88]/20",
                        isCopied
                          ? "bg-emerald-500 text-white"
                          : "bg-[#e7ca88] text-[#3d2115] hover:bg-[#f3d99d]",
                      ].join(" ")}
                    >
                      {isCopied ? (
                        <>
                          <FaCheck />
                          Tersalin
                        </>
                      ) : (
                        <>
                          <FaCopy />
                          Salin Nomor
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {error && (
          <p
            role="alert"
            className="mt-5 rounded-2xl border border-red-300/20 bg-red-950/30 px-4 py-3 text-center text-sm text-red-200"
          >
            {error}
          </p>
        )}

        <div className="mt-10 text-center">
          <div className="mx-auto mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#e7ca88]/30" />
            <span className="text-[#e7ca88]">♥</span>
            <span className="h-px w-12 bg-[#e7ca88]/30" />
          </div>

          <p className="text-sm leading-7 text-[#f5e8df]/70">
            Terima kasih atas doa, perhatian, dan tanda kasih
            yang diberikan kepada kami.
          </p>
        </div>
      </motion.div>
    </section>
  );
}