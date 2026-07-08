import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";

type AttendanceStatus = "Hadir" | "Tidak Hadir";

type RSVPForm = {
    name: string;
    attendance: AttendanceStatus;
    guest: number;
    message: string;
};

type RSVPMessage = {
    name: string;
    attendance: AttendanceStatus;
    message: string;
};

export default function RSVP() {

    const [form, setForm] = useState<RSVPForm>({
        name: "",
        attendance: "Hadir",
        guest: 1,
        message: ""
    });

    const [messages, setMessages] = useState<RSVPMessage[]>([]);
    const visibleMessages = messages.slice(-5);


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            ...(name === "guest"
                ? { guest: Number(value) }
                : { [name]: value }),
        }));
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        setMessages((prev) => [
            ...prev,
            {
                name: form.name,
                attendance: form.attendance,
                message: form.message
            }
        ]);


        setForm({
            name: "",
            attendance: "Hadir",
            guest: 1,
            message: ""
        });
    };


    return (

        <section className="
            px-6
            py-16
            bg-[#4A2511]
        ">


            <div className="
                max-w-md
                mx-auto
            ">


                <motion.div

                    initial={{
                        opacity:0,
                        y:30
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    className="
                        bg-[#5B3218]
                        rounded-3xl
                        p-6
                        shadow-xl
                        border
                        border-[#E0CD67]/30
                    "
                >


                    <div className="text-center">
                        <h2 className="
                            text-3xl
                            text-[#E0CD67]
                            font-serif
                        ">
                            RSVP
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-[#F7E8C6]/90">
                            Berikan ucapan terbaik, doa, dan kebahagiaan untuk hari istimewa kami.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4 mt-6"
                    >


                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Nama kamu"
                            className="
                                w-full
                                rounded-xl
                                p-3
                                bg-[#3A1B0D]
                                text-white
                                border
                                border-[#E0CD67]/30
                            "
                            required
                        />



                        <select
                            name="attendance"
                            value={form.attendance}
                            onChange={handleChange}
                            className="
                                w-full
                                rounded-xl
                                p-3
                                bg-[#3A1B0D]
                                text-white
                            "
                        >
                            <option>Hadir</option>
                            <option>Tidak Hadir</option>
                        </select>



                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Tuliskan ucapan..."
                            rows={3}
                            className="
                                w-full
                                rounded-xl
                                p-3
                                bg-[#3A1B0D]
                                text-white
                                resize-none
                            "
                        />


                        <button
                            className="
                                w-full
                                py-3
                                rounded-xl
                                bg-[#E0CD67]
                                text-[#4A2511]
                                font-bold
                            "
                        >
                            Kirim RSVP
                        </button>


                    </form>


                </motion.div>



                {/* Bubble Chat */}

                <div className="
                    mt-8
                    rounded-[1.5rem]
                    border
                    border-[#E0CD67]/20
                    bg-[#5B3218]/80
                    p-3
                    shadow-inner
                ">
                    <div className="
                        mb-3
                        flex
                        items-center
                        justify-between
                        px-2
                    ">
                        <p className="text-sm font-semibold text-[#E0CD67]">
                            Ucapan Tamu
                        </p>
                        <span className="rounded-full bg-[#E0CD67]/20 px-2.5 py-1 text-xs text-[#FFE9B4]">
                            {visibleMessages.length} chat
                        </span>
                    </div>

                    <div className="
                        max-h-[26rem]
                        space-y-3
                        overflow-y-auto
                        pr-2
                        rsvp-scrollbar
                    ">
                        {
                            visibleMessages.map((item,index)=>(

                                <motion.div

                                    key={index}

                                    initial={{
                                        opacity:0,
                                        scale:0.95,
                                        y:12
                                    }}

                                    animate={{
                                        opacity:1,
                                        scale:1,
                                        y:0
                                    }}

                                    className="
                                        rounded-[1.2rem]
                                        border
                                        border-[#E0CD67]/20
                                        bg-[#FFF4E8]
                                        p-4
                                        shadow-sm
                                    "

                                >
                                    <div className="mb-2 flex items-center justify-between gap-2">
                                        <div className="font-semibold text-[#8B5E34]">
                                            {item.name}
                                        </div>

                                        <span className={
                                            `rounded-full px-2.5 py-1 text-[11px] font-medium ${
                                                item.attendance === "Hadir"
                                                    ? "bg-emerald-100 text-emerald-700"
                                                    : "bg-rose-100 text-rose-700"
                                            }`
                                        }>
                                            {item.attendance}
                                        </span>
                                    </div>

                                    <p className="text-sm leading-6 text-[#5B3218]">
                                        {item.message || "—"}
                                    </p>

                                </motion.div>

                            ))
                        }
                    </div>
                </div>


            </div>


        </section>

    )
}