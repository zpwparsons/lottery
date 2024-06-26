import BackgroundPattern from "@/app/ui/background-pattern";

interface HeaderProps {
    title: string;
    subtitle: string;
    color: 'green' | 'blue' | 'purple' | 'yellow' | 'red';
}

export default function Header({
    title,
    subtitle,
    color = 'green',
 }: HeaderProps) {
    const bannerColor: string = {
        'green': 'bg-green-100',
        'blue': 'bg-sky-200',
        'purple': 'bg-violet-100',
        'yellow': 'bg-yellow-50',
        'red': 'bg-red-50',
    }[color];

    return (
        <header className={`relative h-[272px] ${bannerColor} border-b-4 border-slate-900 overflow-hidden`}>
            <div className="absolute top-0 left-0 w-full h-full hidden md:block">
                <BackgroundPattern />
            </div>

            <div className="mt-14 flex items-center justify-center">
                <div className="flex-col text-center">
                    <h2 className="font-extrabold text-[55px] uppercase">
                        {title}
                    </h2>

                    <h3 className="mt-2 md:mt-4 font-bold text-2xl md:text-[38.5px] tracking-tight leading-tight">
                        {subtitle}
                    </h3>
                </div>
            </div>

            <div className="absolute top-0 right-0 w-full h-full hidden md:block transform scale-x-[-1]">
                <BackgroundPattern />
            </div>
        </header>
    );
}
