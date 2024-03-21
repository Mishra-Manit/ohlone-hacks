export default function RectButton( { text, color, shadowColor, textColor } : { text: string, color: string, shadowColor?: string, textColor: string } ) {
    // Maintain static classes for Tailwind to parse
    const staticClass = `button px-5 h-16 rounded-lg cursor-pointer select-none -translate-y-2 active:translate-y-0 border-b-[1px] active:border-b-[0px] transition-all duration-150`;

    // Use inline styles for dynamic properties
    const style = {
        backgroundColor: color, // assuming `color` is a valid CSS color value
        color: textColor, // assuming `textColor` is a valid CSS color value
        boxShadow: `0 10px 0 0 ${shadowColor || "#84cc16"}`,
        borderColor: color, // assuming `color` is a valid CSS color value
    };

    return (
        <div className={staticClass} style={style}>
            <span className="flex flex-col justify-center items-center h-full font-medium text-xl">{text}</span>
        </div>
    );
}