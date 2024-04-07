import React from "react";

interface CircleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'xs' | 'md' |'lg';
    color?: 'white' | 'purple';
    children: React.ReactNode;
}

export default function Circle({
    size = 'md',
    color = 'white',
    children,
    ...props
}: CircleProps) {
    const circleSize: string = {
        'xs': 'h-10 w-10',
        'sm': 'h-12 w-12',
        'md': 'h-20 w-20',
        'lg': 'h-30 w-30',
    }[size];

    const backGroundColor: string = {
        'white': 'bg-white',
        'purple': 'bg-purple-200',
    }[color];

    const defaultClasses = [`${circleSize} ${backGroundColor} p-2 border-t border-r border-b-2 border-l-2 border-slate-900 rounded-full flex justify-center items-center text-center`, props.className];
    const className = defaultClasses.join(' ');

    return (
        <div className={className}>
            {children}
        </div>
    );
}
