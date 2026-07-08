import { useState } from "react";
import { motion } from "framer-motion";

type GiftAccount = {
    bank: string;
    name: string;
    number: string;
};


export default function GiftCard() {

    const [copied, setCopied] = useState("");

    const accounts: GiftAccount[] = [
        {
            bank: "BCA",
            name: "Nama Mempelai",
            number: "1234567890"
        },
        {
            bank: "Mandiri",
            name: "Nama Mempelai",
            number: "9876543210"
        }
    ];


    const handleCopy = (number:string) => {

        navigator.clipboard.writeText(number);

        setCopied(number);

        setTimeout(() => {
            setCopied("");
        },2000);

    };


    return (

        <section className="
            px-6
            py-16
            bg-[#4A2511]
        ">


            <motion.div

                initial={{
                    opacity:0,
                    y:40
                }}

                whileInView={{
                    opacity:1,
                    y:0
                }}

                transition={{
                    duration:0.8
                }}

                className="
                    max-w-md
                    mx-auto
                    bg-[#5B3218]
                    rounded-3xl
                    p-6
                    shadow-xl
                    border
                    border-[#E0CD67]/30
                "

            >


                <div className="
                    text-center
                    mb-8
                ">

                    <h2 className="
                        text-3xl
                        font-serif
                        text-[#E0CD67]
                    ">
                        Wedding Gift
                    </h2>


                    <p className="
                        text-[#FFDBCC]
                        text-sm
                        mt-2
                    ">
                        Doa dan restu Anda adalah hadiah terindah.
                        Jika ingin memberikan tanda kasih, dapat melalui:
                    </p>

                </div>



                <div className="
                    space-y-5
                ">


                    {
                        accounts.map((item,index)=>(

                            <motion.div

                                key={index}

                                whileHover={{
                                    scale:1.02
                                }}

                                className="
                                    relative
                                    bg-[#3A1B0D]
                                    rounded-2xl
                                    p-5
                                    border
                                    border-[#E0CD67]/20
                                "

                            >


                                <div className="
                                    flex
                                    justify-between
                                    items-center
                                ">


                                    <div>

                                        <p className="
                                            text-[#E0CD67]
                                            font-bold
                                            text-lg
                                        ">
                                            {item.bank}
                                        </p>


                                        <p className="
                                            text-white
                                            text-sm
                                        ">
                                            {item.name}
                                        </p>


                                    </div>


                                    <div className="
                                        w-10
                                        h-10
                                        rounded-full
                                        bg-[#E0CD67]
                                        flex
                                        items-center
                                        justify-center
                                        text-[#4A2511]
                                        text-xl
                                    ">
                                        💳
                                    </div>


                                </div>



                                <div className="
                                    mt-4
                                    flex
                                    items-center
                                    justify-between
                                    bg-[#5B3218]
                                    rounded-xl
                                    p-3
                                ">


                                    <span className="
                                        text-white
                                        tracking-widest
                                    ">
                                        {item.number}
                                    </span>


                                    <button

                                        onClick={() => handleCopy(item.number)}

                                        className="
                                            text-xs
                                            bg-[#E0CD67]
                                            text-[#4A2511]
                                            px-3
                                            py-2
                                            rounded-lg
                                            font-semibold
                                        "
                                    >

                                        {
                                            copied === item.number
                                            ?
                                            "Copied"
                                            :
                                            "Copy"
                                        }

                                    </button>


                                </div>



                            </motion.div>

                        ))
                    }


                </div>



                <div className="
                    mt-8
                    text-center
                    text-[#FFDBCC]
                    text-sm
                ">
                    Terima kasih atas doa dan perhatian Anda ❤️
                </div>



            </motion.div>


        </section>

    )
}