import Link from 'next/link';
import Balancer from 'react-wrap-balancer'

import RectButton from './RectButton';
import Header from './Header';
import StyledLink from './StyledLink';

export default function Hero() {
    return (
        <div className="h-screen min-h-[600px] flex flex-col justify-between">
            {/* this is the big text */}
            <div className="">
                <Header />
                <div className="w-min flex gap-4 mt-10 mb-5 mx-10">
                    <span className="bg-lime-400 w-min rounded-full px-2">
                        Sponsors
                    </span>
                    <StyledLink href="/prospectus" target="_blank" text={"Review our prospectus"} className={"w-max"} arrow={true} />
                    {/* <Link href="/prospectus.pdf" target="_blank" className="w-max h-full hover:underline underline-offset-2 decoration-dotted decoration-2 decoration-neutral-500 after:content-['_↗']">
                            Review our prospectus
                        </Link> */}
                </div>
                <div className="pointer-events-none font-mono text-[6vw] tracking-tighter leading-none mx-10">
                    We return. <br /> Ohlone awaits
                    <span className="select-none typing-cursor">.</span>
                </div>
            </div>
            {/* this is register + first section */}
            <div className="mt-10">
                <div className="flex flex-col sm:flex-row gap-2 mx-10">
                    <Link href="/register" target="_blank" className="rounded-full px-5 text-lg py-3 bg-lime-400 hover:bg-lime-300 hover:shadow-[0_0_15px_0_rgba(163,230,53,0.5)] transition-all">
                        Register now for free
                    </Link>
                    <Link href="/register" target="_blank" className="rounded-full border px-5 text-lg py-3 hover:bg-black hover:text-white hover:border-transparent transition-all">
                        Donate
                    </Link>
                </div>
                <div className="text-black my-10 mx-10">
                    <div className="flex justify-between items-end">
                        <Balancer className="w-1/2 sm:w-1/2 text-sm sm:text-lg font-light">
                            Registration is open to all current high school students in the 2023-2024 academic year.
                        </Balancer>
                        <h1 className="w-1/2 font-mono sm:w-1/4 text-right text-2xl lg:text-[3vw] leading-none">*</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}