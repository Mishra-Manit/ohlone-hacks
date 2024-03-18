import Link from 'next/link';
import Image from 'next/image';

const posts = {
    '/prospectus': {
        img: '/images/prospectus.png',
        name: 'Prospectus',
        description: 'Explore sponsorship opportunities',
    },
    '/': {
        img: '/images/culture.png',
        name: 'Culture',
        description: 'Code the unseen, create the unprecedented',
    },
};

export default function PostSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-4 mx-10">
            {Object.entries(posts).map(([path, { img, name, description }]) => {
                return (
                    <Link key={path} href={path} target={"_self"} className="
                        group
                        h-[50vh]
						underline-offset-4
						font-medium
						">
                        <div className="h-[86%] w-full overflow-hidden relative transition-all">
                            <Image
                                src={img}
                                alt={name}
                                fill
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "50% 100%"
                                }}
                            />
                        </div>
                        <div className="flex flex-col h-[14%] text-md sm:text-lg justify-end">
                            <h1 className="font-semibold">{name}</h1>
                            <h2 className="font-normal">{description}</h2>
                        </div>
                    </Link>
                );
            })}
        </div>
    )
}