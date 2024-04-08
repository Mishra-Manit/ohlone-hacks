import Link from 'next/link';

import NumberedDetails from './components/NumberedDetails';
import PostSection from './components/PostSection';
import Hero from './components/Hero';
import Footer from "./components/Footer"
import Schedule from './components/Schedule';

export default function Ohlone() {
    return (
        <main className="bg-white text-black min-h-screen w-full overscroll-y-none overflow-x-hidden">
            {/* hero section */}
            <Hero />
            {/* rest of the sections */}
            <PostSection />
            <NumberedDetails />
            {/* colored section */}
            <div className="mt-32 bg-[#0045F2] py-10 flex flex-col text-white items-center">
                {/* CTA */}
                <Schedule />
                <div className="py-20 flex flex-col items-center gap-2 md:gap-0">
                    <h1 className="text-[10vw] lg:text-[8vw]">
                        Don&apos;t miss out.
                    </h1>
                    <Link href="/register" target="_self" className="border-4 border-white hover:bg-transparent hover:text-white bg-white text-[#0045F2] py-2 lg:py-4 px-10 text-[5vw] lg:text-[3vw] rounded-full transition-all">
                        Register now
                    </Link>
                </div>
                <Footer />
            </div>
        </main>
    )
}