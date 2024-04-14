const tracks = [
    {
        name: "Low/No Code",
        description: "- Coding background not needed\n- Emphasis on idea execution over technical complexity"
    },
    {
        name: "Entertainment",
        description: "- Innovation in entertainment such as gaming, streaming, VR, etc.\n- Enhancing user experience in entertainment\n- Interactive and engaging"
    },
    {
        name: "Code for Cause",
        description: "- Effectiveness of tackling a social/environmental issue\n- Focus on community improvement\n- Sustainable and scalable project\n- More info at codeforcause.dev/ohlone"
    },
    {
        name: "Health & Wellness",
        description: "- Brings positive user impact\n- Accessible and inclusive\n- Engaging user experience"
    },
];

export default function TrackDetails() {
    return (
        <>
            <div className="w-full text-center mt-32">
                <h2 className="mb-10 opacity-50">PROJECT TRACKS</h2>
            </div>
            <div className="mx-10 mb-32 grid grid-rows-4 grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-10">
                {tracks.map((track, index) => (
                    <div key={index} className="track-card h-[50vh] lg:h-[30vh] rounded-xl hover:-translate-y-2 text-white bg-[#0045F2] hover:shadow-xl transition-all duration-300 p-10 relative overflow-hidden">
                        <h1 className={`track-title text-4xl opacity-100 transition-opacity duration-0 ease-in-out hyphens-auto ${track.name === "Entertainment" ? "break-words" : ""}`}>{track.name}</h1>
                        <p className="track-description text-md xl:text-xl absolute opacity-0 transition-opacity duration-0 ease-in-out p-10 w-full h-full">{track.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}