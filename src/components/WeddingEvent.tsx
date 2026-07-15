export default function WeddingEvent() {
    return (
        <div className="max-w-sm mx-auto  p-6 text-center text-[#5b0000]">

            {/* Month */}
            <div className="tracking-[4px] text-sm mb-4">
                JULI 2026
            </div>

            {/* Calendar */}
            <div className="border-y border-[#1f2233]">

                {/* Days */}
                <div className="grid grid-cols-3 text-xs tracking-[2px] border-b border-[#1f2233]">
                    <div className="py-2">MINGGU</div>
                    <div className="py-2 border-x border-[#1f2233]">
                        SENIN
                    </div>
                    <div className="py-2">SELASA</div>
                </div>

                {/* Dates */}
                <div className="grid grid-cols-3 items-center">
                    <div className="py-5 text-5xl font-serif">
                        26
                    </div>

                    {/* Main Date */}
                    <div className="relative py-5 border-x border-[#1f2233]">

                        {/* Circle Effect */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-28 h-28 border-[4px] border-red-700 rounded-full opacity-80" />
                        </div>

                        <div className="relative text-6xl font-serif">
                            27
                        </div>
                    </div>

                    <div className="py-5 text-5xl font-serif">
                        28
                    </div>
                </div>
            </div>

            {/* Event Detail */}
            <div className="mt-10 space-y-2">

                <h2 className="text-3xl font-serif">
                    Akad Nikah
                </h2>

                <p className="text-lg">
                    Senin, 27 Juli 2026
                </p>

                <p className="text-lg">
                    Pukul 09.00 WIB
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
    );
}