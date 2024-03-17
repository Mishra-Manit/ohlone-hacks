import Image from 'next/image';

export default function Footer() {
    return (
        <div className="mx-10 font-mono">
            <div className="flex justify-between mt-48">
                <text>
                    ERIC LAN
                </text>
                <text>
                    &copy; 2024
                </text>
            </div>
            {/* TODO: use image instead of text */}
            <Image
                src="/images/OH_LONG.png"
                className="hidden sm:block"
                alt="Viking Hacks"
                width={1881}
                height={215}
            />
            <Image
                src="/images/OH_TALL.png"
                className="block sm:hidden"
                alt="Viking Hacks"
                width={1881}
                height={215}
            />
        </div>
    )
}