'use client';

import { ArrowPathIcon, CheckIcon } from "@heroicons/react/20/solid";
import SnookerBalls from "@/app/ui/snooker-balls";
import { useState, useEffect } from "react";
import Button from "@/app/ui/button";
import Circle from "@/app/ui/circle";
import Card from "@/app/ui/card";

const quickPicks: number[] = [1, 2, 3, 4, 5];

interface QuickPickProps {
    randomNumberCount?: number,
}

export default function QuickPick({
    randomNumberCount = 5,
}: QuickPickProps) {
    const [activeQuickPick, setActiveQuickPick] = useState<number>(quickPicks[0]);
    const [timestamp, setTimestamp] = useState<number>(Date.now());

    const handleQuickPickClick = (quickPick: number) : void => {
        setActiveQuickPick(quickPick);
        setTimestamp(Date.now());
    }

    return (
        <Card>
            <h4 className="flex items-center font-bold text-2xl tracking-tight leading-tight">
                <SnookerBalls />
                <span className="ml-1.5">Quick pick</span>
            </h4>

            <div className="mt-6 grid grid-cols-5 gap-3">
                {quickPicks.map((quickPick: number, quickPickIdx: number) => (
                    <Button
                        onClick={() => handleQuickPickClick(quickPick)}
                        color={activeQuickPick === quickPick ? 'blue' : 'white'}
                        key={quickPickIdx}
                        size="sm"
                    >
                        <span>{quickPick}</span>
                        {activeQuickPick === quickPick && (<ArrowPathIcon className="ml-1.5 h-4 w-4" />)}
                    </Button>
                ))}
            </div>

            <div className="pt-6 pb-4 divide-y divide-slate-200 font-bold">
                {[...Array(activeQuickPick)].map((_, rowIdx: number) => (
                    <RandomNumberRow
                        key={rowIdx}
                        timestamp={timestamp}
                        randomNumberCount={randomNumberCount}
                    />
                ))}
            </div>
        </Card>
    )
}

interface RandomNumberRowProps {
    timestamp: number,
    randomNumberCount?: number,
}

function RandomNumberRow({
    timestamp,
    randomNumberCount = 5,
}: RandomNumberRowProps) {
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const [copied, setCopied] = useState<boolean>(false);

    const copyToClipboard = (): void => {
        const numbers = randomNumbers.join(',');
        navigator.clipboard.writeText(numbers).catch((error) => console.error("Failed to copy:", error));
        setCopied(true);
    }

    useEffect(() : void => {
        setRandomNumbers(Array.from({length: randomNumberCount}, () => Math.floor(Math.random() * 59) + 1));
        setCopied(false);
    }, [timestamp]);

    return (
        <div className="py-4 flex items-center justify-between">
            <ul className="flex space-x-1.5">
                {randomNumbers.map((randomNumber: number, randomNumberIdx: number) => (
                    <li key={randomNumberIdx}>
                        <Circle color={randomNumberIdx < 5 ? 'white' : 'purple'} size="xs">
                            {randomNumber}
                        </Circle>
                    </li>
                ))}
            </ul>

            {copied ? (
                <span className="text-sm text-green-700">
                    <CheckIcon className="h-5 w-5" />
                </span>
            ) : (
                <button onClick={copyToClipboard} type="button" className="h-5 w-5">
                    <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.24995 15.7998C5.74995 15.7998 5.32495 15.6248 4.97495 15.2748C4.62495 14.9248 4.44995 14.4998 4.44995 13.9998V2.6248C4.44995 2.10814 4.62495 1.6748 4.97495 1.3248C5.32495 0.974805 5.74995 0.799805 6.24995 0.799805H14.625C15.1416 0.799805 15.575 0.974805 15.925 1.3248C16.275 1.6748 16.45 2.10814 16.45 2.6248V13.9998C16.45 14.4998 16.275 14.9248 15.925 15.2748C15.575 15.6248 15.1416 15.7998 14.625 15.7998H6.24995ZM6.24995 14.2998H14.625C14.7083 14.2998 14.7833 14.2705 14.85 14.2118C14.9166 14.1538 14.95 14.0831 14.95 13.9998V2.6248C14.95 2.54147 14.9166 2.46647 14.85 2.3998C14.7833 2.33314 14.7083 2.2998 14.625 2.2998H6.24995C6.16662 2.2998 6.09595 2.33314 6.03795 2.3998C5.97928 2.46647 5.94995 2.54147 5.94995 2.6248V13.9998C5.94995 14.0831 5.97928 14.1538 6.03795 14.2118C6.09595 14.2705 6.16662 14.2998 6.24995 14.2998ZM2.74995 19.2998C2.24995 19.2998 1.82495 19.1248 1.47495 18.7748C1.12495 18.4248 0.949951 17.9998 0.949951 17.4998V4.7998H2.44995V17.4998C2.44995 17.5831 2.47895 17.6538 2.53695 17.7118C2.59562 17.7705 2.66662 17.7998 2.74995 17.7998H12.45V19.2998H2.74995Z" fill="#021849"></path>
                    </svg>
                </button>
            )}
        </div>
    );
}
