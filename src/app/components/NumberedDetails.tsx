import Balancer from 'react-wrap-balancer'

import StyledLink from './StyledLink';

export default function NumberedDetails() {
    return (
        <div className="my-10 mx-10 text-lg">
            {/* <h1 className="font-mono mb-10">// WHY VIKING HACKS</h1> */}
            <div className="grid grid-cols-1 grid-rows-3 divide-y border-y">
                <div className="py-10">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="w-1/6 font-mono font-light">01</h1>
                        <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">April 6th, 2024</h1>
                        <div className="w-full sm:w-3/6">
                            <Balancer className="text-sm lg:text-lg text-justify sm:text-left">Viking Hacks is a one-day event that will be held on April 6th of 2024. From start to finish, it will last 14 hours in total.</Balancer>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="w-1/6 font-mono font-light">02</h1>
                        <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">Completely Free</h1>
                        <div className="w-full sm:w-3/6">
                            <Balancer className="text-sm lg:text-lg text-justify sm:text-left">Viking Hacks is a one-day event that will be held on April 6th of 2024. From start to finish, it will last 14 hours in total.</Balancer>
                        </div>
                    </div>
                </div>
                <div className="py-10">
                    <div className="flex flex-col sm:flex-row justify-between">
                        <h1 className="w-1/6 font-mono font-light">03</h1>
                        <h1 className="w-full sm:w-2/6 text-4xl sm:text-3xl">Fremont, CA</h1>
                        <div className="w-full sm:w-3/6">
                            <Balancer className="text-sm lg:text-lg text-justify sm:text-left">The venue will be at Irvington High School, in Fremont, California. More information about the venue can be <StyledLink href="/venue" target="_blank" text="found here" arrow={true} /></Balancer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}