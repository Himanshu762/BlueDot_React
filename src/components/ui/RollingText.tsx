interface RollingTextProps {
    text: string;
    className?: string;
    height?: number;
}

export default function RollingText({ text, className = '', height = 24 }: RollingTextProps) {
    return (
        <div
            className={`relative overflow-hidden ${className}`}
            style={{ height }}
        >
            <div className="h-full transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full">
                <span className="flex items-center h-full">{text}</span>
                <span className="flex items-center h-full absolute top-full left-0 w-full">{text}</span>
            </div>
        </div>
    );
}
