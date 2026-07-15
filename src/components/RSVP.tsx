import {
    useState,
    useEffect,
    useRef,
    type ChangeEvent,
    type FormEvent,
    type UIEventHandler,
} from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
    FiCheckCircle,
    FiHeart,
    FiLock,
    FiMessageCircle,
    FiSend,
    FiUser,
    FiXCircle,
} from "react-icons/fi";

type AttendanceStatus = "hadir" | "tidak_hadir";

type RSVPForm = {
    name: string;
    attendance: AttendanceStatus | "";
    guest: number;
    message: string;
};

type RSVPMessage = {
    name: string;
    message: string;
    attendance?: AttendanceStatus;
    guest?: number;
};

type ApiMessage = {
    id: number;
    sender: string;
    message: string;
    attendance?: AttendanceStatus;
    guest?: number;
    createdAt: string;
    updatedAt: string;
};

export default function RSVP() {

    const [form, setForm] = useState<RSVPForm>({
        name: "",
        attendance: "",
        guest: 1,
        message: ""
    });

    const [nameLocked, setNameLocked] = useState(false);

    const [messages, setMessages] = useState<RSVPMessage[]>([]);
    const [visibleCount, setVisibleCount] = useState(5);
    // show newest messages first
    const visibleMessages = messages.slice(0, visibleCount);
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [cooldown, setCooldown] = useState(false);
    const cooldownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            ...(name === "guest"
                ? { guest: Number(value) }
                : { [name]: value }),
        }));
    };


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const attendance = form.attendance;
        const sender = form.name.trim();
        const message = form.message.trim();

        if (!sender || !message || !attendance) return;

        const guest = attendance === "hadir" ? form.guest : 0;

        setSubmitting(true);
        try {
            const res = await axios.post("https://expres-backend.ayaiyan.my.id/api/messages", {
                sender,
                message,
                attendance,
                guest,
            });

            const created: ApiMessage | undefined = res.data?.data;

            setMessages((prev) => [
                {
                    name: created?.sender ?? sender,
                    message: created?.message ?? message,
                    attendance: created?.attendance ?? attendance,
                    guest: created?.guest ?? guest,
                },
                ...prev,
            ]);

            setForm((prev) => ({
                name: nameLocked ? prev.name : "",
                attendance: "",
                guest: 1,
                message: "",
            }));
        } catch (err) {
            console.error("Failed to send RSVP:", err);
        } finally {
            setSubmitting(false);
            // start a 5s cooldown to prevent rapid re-submits
            setCooldown(true);
            if (cooldownTimeoutRef.current) clearTimeout(cooldownTimeoutRef.current);
            cooldownTimeoutRef.current = setTimeout(() => setCooldown(false), 5000);
        }
    };


    useEffect(() => {
        // if URL has ?guest=NAME then prefill name and disable input
        try {
            const params = new URLSearchParams(window.location.search);
            const guestName = params.get("guest");
            if (guestName) {
                setForm((prev) => ({ ...prev, name: decodeURIComponent(guestName) }));
                setNameLocked(true);
            }
        } catch (e) {
            // ignore if window not available or invalid
        }

        let cancelled = false;
        const fetchMessages = async () => {
            setLoading(true);
            try {
                const res = await axios.get("https://expres-backend.ayaiyan.my.id/api/messages");
                const data: ApiMessage[] = res.data?.data || [];
                if (!cancelled) {
                    const sorted = data.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                    const mapped = sorted.map((m) => ({
                        name: m.sender,
                        message: m.message,
                        attendance: m.attendance,
                        guest: m.guest,
                    }));
                    setMessages(mapped);
                    // show all fetched messages so scrollbar appears when content overflows
                    setVisibleCount(Math.max(5, mapped.length));
                }
            } catch (err) {
                // ignore for now
            } finally {
                if (!cancelled) setLoading(false);
            }
        };

        fetchMessages();

        return () => {
            cancelled = true;
            if (cooldownTimeoutRef.current) clearTimeout(cooldownTimeoutRef.current);
        };
    }, []);

    const handleScroll: UIEventHandler<HTMLDivElement> = (e) => {
        const el = e.currentTarget;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - 40) {
            setVisibleCount((prev) => Math.min(prev + 5, messages.length));
        }
    };


    return (

        <section className="
            px-6
            py-16
            bg-[#3d2115]
        ">


            <div className="
                max-w-md
                mx-auto
            ">


                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
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
                    className="
    relative
    overflow-hidden
    rounded-[2rem]
    border
    border-[#E7CA88]/25
    bg-gradient-to-br
    from-[#70442B]
    via-[#58321F]
    to-[#422317]
    p-6
    shadow-[0_24px_70px_rgba(20,8,3,0.35)]
    sm:p-8
  "
                >
                    {/* Dekorasi kartu */}
                    <div
                        className="
      pointer-events-none
      absolute
      -right-16
      -top-16
      h-44
      w-44
      rounded-full
      border
      border-[#E7CA88]/10
    "
                    />

                    <div
                        className="
      pointer-events-none
      absolute
      -right-8
      -top-8
      h-28
      w-28
      rounded-full
      border
      border-[#E7CA88]/10
    "
                    />

                    <div
                        className="
      pointer-events-none
      absolute
      inset-x-0
      top-0
      h-px
      bg-gradient-to-r
      from-transparent
      via-[#F5DFB2]/60
      to-transparent
    "
                    />

                    <div className="relative">
                        {/* Header form */}
                        <div className="mb-8 text-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.15,
                                }}
                                className="
          mx-auto
          mb-5
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#E7CA88]/25
          bg-[#E7CA88]/10
          text-2xl
          text-[#E7CA88]
          shadow-inner
        "
                            >
                                <FiHeart />
                            </motion.div>

                            <p
                                className="
          mb-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.35em]
          text-[#D9B978]
        "
                            >
                                Wedding Wishes
                            </p>

                            <h2
                                className="
          text-4xl
          leading-tight
          text-[#F5DFB2]
          sm:text-5xl
        "
                                style={{
                                    fontFamily: "August Script",
                                }}
                            >
                                Kirim Ucapan
                            </h2>

                            <p
                                className="
          mx-auto
          mt-4
          max-w-sm
          text-sm
          leading-7
          text-[#F5E8DF]/70
        "
                            >
                                Tinggalkan doa dan ucapan terbaik untuk perjalanan baru
                                kedua mempelai.
                            </p>

                            <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                                <span className="h-px w-10 bg-[#E7CA88]/30" />
                                <span className="h-1.5 w-1.5 rotate-45 bg-[#E7CA88]/70" />
                                <span className="h-px w-10 bg-[#E7CA88]/30" />
                            </div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            {/* Nama */}
                            <div>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <label
                                        htmlFor="rsvp-name"
                                        className="
              text-sm
              font-medium
              text-[#F5E8DF]
            "
                                    >
                                        Nama
                                    </label>

                                    {nameLocked && (
                                        <span
                                            className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[#E7CA88]/20
                bg-[#E7CA88]/10
                px-2.5
                py-1
                text-[10px]
                font-medium
                uppercase
                tracking-wider
                text-[#E7CA88]
              "
                                        >
                                            <FiLock />
                                            Terkunci
                                        </span>
                                    )}
                                </div>

                                <div className="group relative">
                                    <FiUser
                                        className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-lg
              text-[#D9B978]/70
              transition
              group-focus-within:text-[#E7CA88]
            "
                                    />

                                    <input
                                        id="rsvp-name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Masukkan nama Anda"
                                        required
                                        disabled={nameLocked}
                                        className="
              w-full
              rounded-2xl
              border
              border-[#E7CA88]/20
              bg-[#2F170D]/65
              py-3.5
              pl-12
              pr-4
              text-sm
              text-white
              outline-none
              transition
              placeholder:text-[#F5E8DF]/35
              hover:border-[#E7CA88]/35
              focus:border-[#E7CA88]/70
              focus:bg-[#2F170D]/80
              focus:ring-4
              focus:ring-[#E7CA88]/10
              disabled:cursor-not-allowed
              disabled:bg-[#2F170D]/40
              disabled:text-[#F5E8DF]/65
            "
                                    />
                                </div>
                            </div>

                            {/* Konfirmasi kehadiran */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#F5E8DF]">
                                    Konfirmasi kehadiran
                                </label>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        type="button"
                                        aria-pressed={form.attendance === "hadir"}
                                        onClick={() =>
                                            setForm((prev) => ({
                                                ...prev,
                                                attendance: "hadir",
                                                guest: prev.guest > 0 ? prev.guest : 1,
                                            }))
                                        }
                                        className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3.5 text-sm font-semibold transition ${form.attendance === "hadir"
                                                ? "border-[#E7CA88] bg-[#E7CA88] text-[#3D2115] shadow-[0_10px_24px_rgba(231,202,136,0.18)]"
                                                : "border-[#E7CA88]/20 bg-[#2F170D]/65 text-[#F5E8DF] hover:border-[#E7CA88]/45 hover:bg-[#2F170D]/80"
                                            }`}
                                    >
                                        <FiCheckCircle className="text-lg" />
                                        Hadir
                                    </button>

                                    <button
                                        type="button"
                                        aria-pressed={form.attendance === "tidak_hadir"}
                                        onClick={() =>
                                            setForm((prev) => ({
                                                ...prev,
                                                attendance: "tidak_hadir",
                                                guest: 0,
                                            }))
                                        }
                                        className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3.5 text-sm font-semibold transition ${form.attendance === "tidak_hadir"
                                                ? "border-[#E7CA88] bg-[#E7CA88] text-[#3D2115] shadow-[0_10px_24px_rgba(231,202,136,0.18)]"
                                                : "border-[#E7CA88]/20 bg-[#2F170D]/65 text-[#F5E8DF] hover:border-[#E7CA88]/45 hover:bg-[#2F170D]/80"
                                            }`}
                                    >
                                        <FiXCircle className="text-lg" />
                                        Tidak hadir
                                    </button>
                                </div>

                                

                                {!form.attendance && (
                                    <p className="mt-2 text-xs text-[#F5E8DF]/45">
                                        Pilih salah satu status kehadiran sebelum mengirim ucapan.
                                    </p>
                                )}
                            </div>

                            {/* Ucapan */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="rsvp-message"
                                        className="
              text-sm
              font-medium
              text-[#F5E8DF]
            "
                                    >
                                        Ucapan dan doa
                                    </label>

                                    <span className="text-xs text-[#F5E8DF]/40">
                                        {form.message.length}/300
                                    </span>
                                </div>

                                <div className="group relative">
                                    <FiMessageCircle
                                        className="
              pointer-events-none
              absolute
              left-4
              top-4
              text-lg
              text-[#D9B978]/70
              transition
              group-focus-within:text-[#E7CA88]
            "
                                    />

                                    <textarea
                                        id="rsvp-message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                                        rows={5}
                                        maxLength={300}
                                        required
                                        className="
              w-full
              resize-none
              rounded-2xl
              border
              border-[#E7CA88]/20
              bg-[#2F170D]/65
              py-3.5
              pl-12
              pr-4
              text-sm
              leading-6
              text-white
              outline-none
              transition
              placeholder:text-[#F5E8DF]/35
              hover:border-[#E7CA88]/35
              focus:border-[#E7CA88]/70
              focus:bg-[#2F170D]/80
              focus:ring-4
              focus:ring-[#E7CA88]/10
            "
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={submitting || cooldown || !form.attendance}
                                className="
          group
          flex
          w-full
          items-center
          justify-center
          gap-2.5
          rounded-2xl
          border
          border-[#F5DFB2]/30
          bg-gradient-to-r
          from-[#D4AF67]
          via-[#E7CA88]
          to-[#F3D99D]
          px-5
          py-3.5
          text-sm
          font-bold
          text-[#3D2115]
          shadow-[0_12px_30px_rgba(231,202,136,0.18)]
          transition
          duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_16px_38px_rgba(231,202,136,0.28)]
          focus:outline-none
          focus:ring-4
          focus:ring-[#E7CA88]/20
          disabled:cursor-not-allowed
          disabled:opacity-55
          disabled:hover:translate-y-0
        "
                            >
                                <span>
                                    {submitting
                                        ? "Mengirim ucapan..."
                                        : cooldown
                                            ? "Tunggu sebentar..."
                                            : "Kirim Ucapan"}
                                </span>

                                {!submitting && !cooldown && (
                                    <FiSend
                                        className="
              text-base
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-0.5
            "
                                    />
                                )}

                                {submitting && (
                                    <span
                                        className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-[#3D2115]/30
              border-t-[#3D2115]
            "
                                    />
                                )}
                            </button>

                            <p
                                className="
          text-center
          text-xs
          leading-5
          text-[#F5E8DF]/45
        "
                            >
                                Ucapan yang dikirim akan ditampilkan pada daftar ucapan tamu.
                            </p>
                        </form>
                    </div>
                </motion.div>



                {/* New UI: avatar list + message bubbles */}
                <div className="mt-8">
                    <div className="mb-4 flex items-center justify-between gap-3 px-2">
                        <p className="text-sm font-semibold text-white">Ucapan Tamu</p>
                        <div className="flex flex-wrap justify-end gap-2">
                            <span className="rounded-full bg-[#E0CD67]/20 px-2.5 py-1 text-xs text-[#FFE9B4]">
                                {messages.length} chat
                            </span>
                            <span className="rounded-full bg-emerald-300/15 px-2.5 py-1 text-xs text-emerald-100">
                                {messages.reduce((total, item) =>
                                    item.attendance === "hadir" ? total + (item.guest ?? 1) : total, 0
                                )} hadir
                            </span>
                            <span className="rounded-full bg-rose-300/15 px-2.5 py-1 text-xs text-rose-100">
                                {messages.filter((item) => item.attendance === "tidak_hadir").length} tidak hadir
                            </span>
                        </div>
                    </div>

                    <div ref={containerRef} onScroll={handleScroll} className="max-h-[36rem] overflow-y-auto pr-2 rsvp-scrollbar flex flex-col">
                        {loading && (<div className="py-2 text-center text-sm text-[#FFE9B4]">Memuat pesan...</div>)}

                        <div className="flex flex-col gap-6">
                            {visibleMessages.map((item, index) => {
                                const initials = (item.name || "-").split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
                                const colorClasses = ["bg-[#BFD8C6]", "bg-[#C9D1F5]", "bg-[#F3E2B5]", "bg-[#E6C9D9]", "bg-[#D6E8E6]"];
                                const avatarBg = colorClasses[index % colorClasses.length];

                                return (
                                    <div key={index} className="flex items-start gap-4 px-2">
                                        <div className="flex-shrink-0">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-[#2B2B2B] ${avatarBg}`}>
                                                {initials}
                                            </div>
                                        </div>

                                        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex-1">
                                            <div className="bg-white rounded-2xl p-4 shadow-sm">
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <div className="font-semibold text-[#2B2B2B]">{item.name}</div>

                                                    {item.attendance && (
                                                        <span
                                                            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${item.attendance === "hadir"
                                                                    ? "bg-emerald-100 text-emerald-700"
                                                                    : "bg-rose-100 text-rose-700"
                                                                }`}
                                                        >
                                                            {item.attendance === "hadir"
                                                                ? `Hadir `
                                                                : "Tidak hadir"}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="mt-2 text-sm text-[#4B5563]">“{item.message || '—'}”</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


            </div>


        </section>

    )
}