import React from "react";

interface CircleProps {
    size?: 'sm' | 'md' |'lg';
    children: React.ReactNode;
}

export default function Circle({
    size = 'md',
    children,
}: CircleProps) {
    const circleSize: string = {
        'sm': 'h-10 w-10',
        'md': 'h-20 w-20',
        'lg': 'h-30 w-30',
    }[size];

    return (
        <div className={`${circleSize} p-2 bg-white border-t border-r border-b-2 border-l-2 border-slate-900 rounded-full flex justify-center items-center text-center`}>
            {children}
        </div>
    );
}
