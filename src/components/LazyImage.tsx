import { useState } from "react";


interface LazyImageProps {
    src: string;
    alt?: string;
    className?: string;
}


export default function LazyImage({
    src,
    alt = "",
    className = ""
}: LazyImageProps) {

    const [loaded, setLoaded] = useState(false);


    return (

        <div className="
            relative
            overflow-hidden
            bg-[#3A1B0D]
        ">


            {!loaded && (

                <div
                    className="
                        absolute
                        inset-0
                        animate-pulse
                        bg-[#5B3218]
                    "
                />

            )}



            <img

                src={src}

                alt={alt}

                loading="lazy"

                onLoad={() => setLoaded(true)}

                className={`
                    transition-all
                    duration-700
                    ${
                        loaded
                        ? "opacity-100 blur-0"
                        : "opacity-0 blur-lg"
                    }
                    ${className}
                `}

            />


        </div>

    );
}