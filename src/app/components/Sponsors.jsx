import Image from "next/image";
const sponsors = [
    {
        link: "https://marchup.net",
        image: "/sponsors/MARCHUP.png",
        width: 526,
        height: 184,
    },
    {
        link: "https://www.ohlone.edu/asoc",
        image: "/sponsors/ASOC_BW.png",
        className: 'invert',
        width: 526,
        height: 184,
    },
    {
        link: "https://hackclub.com",
        image: "/sponsors/Hack Club Flag.png",
        width: 526,
        height: 184,
    },
    {
        link: "https://www.lifeskilllearnings.com/",
        image: "/sponsors/LifeSkillLearnings.png",
        className: 'invert',
        width: 483,
        height: 259,
    },
    {
        link: "https://artofproblemsolving.com/",
        image: "/sponsors/AoPSlogo.png",
        width: 526,
        height: 184,
    },
    {
        link: "https://1password.com",
        image: "/sponsors/1Password.png",
        width: 700,
        height: 174,
    },
    {
        link: "https://iytc.org/",
        image: "/sponsors/IYTC.png",
        width: 700,
        height: 174,
    },
    {
        link: "https://echo3d.com/",
        image: "/sponsors/ECHO3D.png",
        width: 514,
        height: 68,
    },
    {
        link: "https://www.axure.com/",
        image: "/sponsors/AXURE.png",
        width: 514,
        height: 68,
    },
    {
        link: "https://interviewcake.com",
        image: "/sponsors/InterviewCakeLogo.png",
        className: 'col-span-1',
        width: 514,
        height: 68,
    },
    {
        link: "https://www.codeforcause.dev/",
        image: "/sponsors/CFC.png",
        className: 'col-span-1',
        width: 514,
        height: 68,
    },
    {
        link: "https://go-dabbl.ai/",
        image: "/sponsors/dabbl.avif",
        className: 'col-span-1',
        width: 514,
        height: 68,
    },
]

export default function Sponsors({ }) {
    return (
        <div className="my-[20vh] text-center">
            <h2 className="mb-10 opacity-50">OUR SPONSORS</h2>
            <div className={`mx-20 grid grid-flow-row-dense grid-rows-6 grid-cols-2 h-[70vh] md:grid-rows-4 md:grid-cols-3 md:h-[50vh] lg:grid-rows-3 lg:grid-cols-5 lg:h-[30vh] items-center justify-center gap-x-12 gap-y-10 invert`}>
                {sponsors.map((sponsor, index) => (
                    <a
                        key={index}
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-full w-full flex items-center justify-center ${sponsor.className || ''}`}
                    >
                        <Image
                            src={sponsor.image}
                            alt={`Sponsor logo of ${sponsor.link}`}
                            width={sponsor.width}
                            height={sponsor.height}
                            className="grayscale contrast-200 opacity-80 duration-200 sponsor-logo transition-all"
                        />
                    </a>
                ))}
            </div>
        </div>
    )
}
