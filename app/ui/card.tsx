import React from "react";
import clsx from 'clsx';

interface CardProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    color?: 'yellow' | 'white';
    hoverable?: boolean,
}

export default function Card({
     children,
     color = 'white',
     hoverable = false,
    ...props
 }: CardProps) {
    const backgroundColor: string = {
        'yellow': 'bg-yellow-50',
        'white': 'bg-white',
    }[color];

    const defaultClasses = [`${backgroundColor} border-t border-r border-b-2 border-l-2 border-slate-900 rounded-lg p-8`, props.className];
    const className = defaultClasses.join(' ');

    return (
        <div
            className={clsx(
                className,
                { 'hover:border-b-[3px] hover:border-l-[3px] hover:border-red-800 cursor-pointer': hoverable },
            )}
        >
            {children}
        </div>
    );
}
