import { Rubik_80s_Fade } from 'next/font/google'

// fonts
const rubik_fade = Rubik_80s_Fade({
    subsets: ["latin"],
    weight: "400"
})

export default function PrizeBanner() {
    return (
        <div className="bg-[#0045F2] w-full h-[50vh] p-20 text-white">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className={`font-mono text-5xl sm:text-8xl lg:text-9xl xl:text-[13vw] ${rubik_fade.className}`}>$12,000+</h1>
                <h2 className={`text-2xl md:text-3xl`}>in prizes</h2>
            </div>
        </div>
    )
}