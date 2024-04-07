'use client';

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Circle from "@/app/ui/circle";
import Button from "@/app/ui/button";
import Card from "@/app/ui/card";
import moment from "moment";

interface NextLotteryDrawProps {
    estimateJackpot: string,
    nextDrawDate: Date;
}

interface TimeLeft {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

export default function NextLotteryDraw({
    estimateJackpot,
    nextDrawDate,
}: NextLotteryDrawProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    const drawDate = moment(nextDrawDate);
    const dateForHumans: string = drawDate.format('MMMM Do, YYYY');
    const dayName: string = drawDate.format('dddd');
    const date: string = drawDate.format('YYYY-MM-DD');

    function calculateTimeLeft(): TimeLeft {
        const difference = moment.duration(moment(nextDrawDate).diff(new Date()));

        return {
            days: Math.max(0, difference.days()),
            hours: Math.max(0, difference.hours()),
            minutes: Math.max(0, difference.minutes()),
            seconds: Math.max(0, difference.seconds())
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card color="yellow" hoverable={true}>
            <h4 className="font-bold text-2xl tracking-tight leading-tight">
                Next lottery draw
            </h4>

            <dl className="mt-6 space-y-5 text-lg">
                <div>
                    <dt>{dayName}</dt>
                    <dd className="font-bold">
                        <time dateTime={date}>{dateForHumans}</time>
                    </dd>
                </div>
                <div>
                    <dt>Est. Jackpot</dt>
                    <dd className="font-bold text-2xl tracking-tight leading-tight">
                        {estimateJackpot}
                    </dd>
                </div>
                <div>
                    <dt>Game closes in</dt>
                    <dd className="mt-2">
                        <div className="flex items-center justify-between space-x-2">
                            <Circle className="flex-col">
                                <p className="font-bold text-2xl text-red-800">
                                    {timeLeft.days.toString().padStart(2, '0')}
                                </p>
                                <p className="-mt-1 text-sm">Days</p>
                            </Circle>
                            <Circle className="flex-col">
                                <p className="font-bold text-2xl text-red-800">
                                    {timeLeft.hours.toString().padStart(2, '0')}
                                </p>
                                <p className="-mt-1 text-sm">Hours</p>
                            </Circle>
                            <Circle className="flex-col">
                                <p className="font-bold text-2xl text-red-800">
                                    {timeLeft.minutes.toString().padStart(2, '0')}
                                </p>
                                <p className="-mt-1 text-sm">Minutes</p>
                            </Circle>
                            <Circle className="flex-col">
                                <p className="font-bold text-2xl text-red-800">
                                    {timeLeft.seconds.toString().padStart(2, '0')}
                                </p>
                                <p className="-mt-1 text-sm">Seconds</p>
                            </Circle>
                        </div>
                    </dd>
                </div>
            </dl>

            <div className="mt-10">
                <Button type="button" color="blue">
                    Play Now <ChevronRightIcon className="h-5 w-5" />
                </Button>
            </div>
        </Card>
    )
}
