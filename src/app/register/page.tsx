'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Widget } from "@typeform/embed-react";

export default function Register() {
    return (
        <div className="bg-[#0f1830] w-screen h-screen">
            <div className="bg-[#0045f2] w-full h-[8%] px-10 py-6 border-b border-[#0045f2c3] font-light flex justify-between items-center">
                <Link href="/" target="_self" className="hover:cursor-pointer">
                    <Image
                        alt="Ohlone Hacks Logo"
                        src="/images/OHLONE_HACKS_TRANSPARENT.png"
                        className="w-6 select-none"
                        width={300}
                        height={300}
                    />
                </Link>
                <text className="text-white font-mono">
                    Event Registration
                </text>
            </div>
            <Widget id="Q1yhGY3l" opacity={0} style={{ width: '100%', height: '92%' }} className="Ohlone Hacks Registration Form" />
        </div>
    )
}