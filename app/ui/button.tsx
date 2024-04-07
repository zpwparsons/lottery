import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: 'blue' | 'white';
    size?: 'sm' | 'lg';
    children: React.ReactNode;
}

export default function Button({
   color = 'white',
   size = 'lg',
   children,
   ...props
}: ButtonProps) {
    const backgroundColor: string = {
        'blue': 'bg-blue-700 text-white hover:bg-blue-800',
        'white': 'bg-white hover:bg-blue-700 hover:text-white',
    }[color];

    const buttonSize: string = {
        'sm': 'py-1 px-1.5',
        'lg': 'py-2.5 px-3',
    }[size];

    return (
        <button
            type="button"
            className={`${backgroundColor} ${buttonSize} flex items-center justify-center w-full border-t border-r border-b-2 border-l-2 border-slate-900 rounded-lg text-lg uppercase font-bold`}
            {...props}
        >
            {children}
        </button>
    );
}
