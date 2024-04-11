import Balancer from 'react-wrap-balancer'

import StyledLink from './StyledLink';

export default function NumberedDetails() {
    return (
        <div className="mt-36 mb-10 px-10 text-lg">
            {/* <h1 className="font-mono mb-10">// WHY VIKING HACKS</h1> */}
            <div className="grid grid-cols-1 grid-rows-3 divide-y border-y">
                <div className="py-10">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="w-1/6 font-mono font-light">01</h1>
                        <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">April 14th, 2024</h1>
                        <div className="w-full sm:w-3/6">
                            <Balancer className="text-sm lg:text-lg text-justify sm:text-left">Dive into 12 hours of pure innovation and coding at Ohlone Hacks 2024. It&apos;s not just an event; it&apos;s a marathon of creativity and tech. Mark your calendars for a day that could change your future.</Balancer>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="w-1/6 font-mono font-light">02</h1>
                        <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">Completely Free</h1>
                        <div className="w-full sm:w-3/6">
                            <Balancer className="text-sm lg:text-lg text-justify sm:text-left">Unlock your potential without the price tag. Ohlone Hacks 2024 is your opportunity to learn, grow, and connect at no cost. Bring your ideas to life and take on tech challenges, for free, at Ohlone College.</Balancer>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="w-1/6 font-mono font-light">03</h1>
                        {/* <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">Fremont, CA</h1> */}
                        <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">
                        <StyledLink href="https://www.ohlone.edu/campus-information" target="_blank" text={"Fremont, CA"} className={"w-max"} arrow={true} />
                        </h1>
                        <div className="w-full sm:w-3/6">
                            <Balancer className="text-sm lg:text-lg text-justify sm:text-left">The epicenter of innovation is at your doorstep. Join us at Ohlone College in Fremont, CA, for a hackathon that&apos;s set to redefine the tech landscape. Where will your ideas take you?
                                {/* <StyledLink href="/venue" target="_blank" text="found here" arrow={true} /> */}
                            </Balancer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}