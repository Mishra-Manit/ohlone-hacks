'use client'
import React, { useState } from 'react';

const eventList = [
    {
        num: 1,
        time: "8:30 am",
        info: "Opening Ceremony",
        details: [
            "Welcome and introduction to the event",
            "Acknowledgments to sponsors",
            "Reveal of tracks and prizes",
            "Demonstration of Marchup process"
        ]
    },
    {
        num: 2,
        time: "9:00 am",
        info: "Preparation for the Hackathon",
        details: [
            "Finalize set-up including food, cables, and additional seating arrangements"
        ]
    },
    {
        num: 3,
        time: "12:00 pm",
        info: "Lunch Service",
        details: [
            "Commencement of lunch service",
            "Provision for second helpings as we conclude the meal"
        ]
    },
    {
        num: 4,
        time: "1:30 pm",
        info: "Git Workshop Introduction",
        details: [
            "Beginner's workshop on Git version control"
        ]
    },
    {
        num: 5,
        time: "4:00 pm",
        info: "Project Submission Briefing",
        details: [
            "Guidance on project submission procedures",
            "Assistance in uploading project work"
        ]
    },
    {
        num: 6,
        time: "5:00 pm",
        info: "Project Submission Deadline",
        details: [
            "Deadline for project submissions"
        ]
    },
    {
        num: 7,
        time: "5:30 pm",
        info: "Judging Commences",
        details: [
            "Orientation and briefing for judges",
            "Start of project evaluations"
        ]
    },
    {
        num: 8,
        time: "6:00 pm",
        info: "Judging Concludes",
        details: [
            "Conclusion of project evaluations",
            "Distribution of refreshments post-judging"
        ]
    },
    {
        num: 9,
        time: "6:30 pm",
        info: "Deliberation and Ceremony",
        details: [
            "Judges deliberate to select winners",
            "Preparation for the closing ceremony"
        ]
    },
    {
        num: 10,
        time: "7:00 pm",
        info: "Awards Presentation and Closing",
        details: [
            "Announcement of winners and award distribution",
            "Formal conclusion of the hackathon"
        ]
    }
];

function ArrowIcon(props) {
    let length = props.size.toString();
    return (
        <svg
            width={length}
            height={length}
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

function EventItem({ time, info, details, isLastVisible }) {
    const [timeNumber, period] = time.split(/(am|pm)/i);
    return (
        <li className={`relative rounded-lg bg-neutral-900 bg-opacity-0 px-8 py-4 text-left ${
            isLastVisible ? 'blur-effect' : ''
        }`}>
            <div className="flex flex-row gap-4 md:gap-8 items-start">
                {/* yes, i went up 0.1rem LOLLL */}
                <div className="flex flex-col text-center -mt-[0.1rem] items-end">
                    <p className="text-right w-14 md:w-32 font-mono text-xl md:text-3xl">{timeNumber}</p>
                    <p className="text-right w-14 md:w-20 text-2xl opacity-20 font-mono">
                        {period}
                    </p>
                </div>
                <div className="font-normal">
                    <p className="font-mono text-sm opacity-40 uppercase">{info}</p>
                    <ul className="">
                        {details.map((detail, index) => {
                            return (
                                <div key={index} className="flex flex-row items-start gap-2">
                                    <p className="font-mono opacity-20">{"//"}</p>
                                    {detail}
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </li>
    )
}

export default function Schedule(props) {
    const initialVisibleCount = 5;
    const [visibleCount, setVisibleCount] = useState(initialVisibleCount); // initially show 5 items
    const [isExpanded, setIsExpanded] = useState(false); // track if the list has been expanded

    const toggleItemsVisibility = () => {
        if (isExpanded) {
            setVisibleCount(initialVisibleCount);
            setIsExpanded(false); // set to not expanded
        } else {
            setVisibleCount(eventList.length);
            setIsExpanded(true); // set to expanded
        }
    };

    const isLastVisible = (index) => index === visibleCount - 1 && index !== eventList.length - 1;
    return (
        <div className="mt-44 mb-[30vh] flex flex-col items-center justify-center">
            <ul className="w-full md:w-auto space-y-4">
                {eventList.slice(0, visibleCount).map((event, index) => (
                    <EventItem
                        key={event.num}
                        time={event.time}
                        info={event.info}
                        details={event.details}
                        isLastVisible={isLastVisible(index)}
                    />
                ))}
            </ul>
            <button onClick={toggleItemsVisibility} className="
                w-auto
                border 
                text-sm
                rounded-full
                hover:bg-white
                hover:text-[#0045f2]
                py-2
                px-4 
                mt-4
                transition-all
            ">
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
}
