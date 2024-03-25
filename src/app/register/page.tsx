'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Widget } from "@typeform/embed-react";

export default function Register() {
    return (
        <div className="bg-[#0f1830] w-screen h-screen flex flex-col">
            <div className="w-full px-10 py-6 bg-[#0045F2] font-light flex justify-between items-center">
                <Link href="/" target="_self" className="hover:cursor-pointer">
                    <Image
                        alt="Ohlone Hacks Logo"
                        src="/images/OHLONE_HACKS_TRANSPARENT.png"
                        className="w-6 select-none"
                        width={300}
                        height={300}
                    />
                </Link>
                <text className="font-mono text-white">EVENT REGISTRATION</text>
            </div>
            <Widget id="Q1yhGY3l" opacity={0} style={{ width: '100%', flexGrow: 1 }} />
        </div>
    )
}