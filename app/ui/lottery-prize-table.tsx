import { formatCurrency, formatCurrencyForHumans } from "@/app/lib/utils";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Circle from "@/app/ui/circle";
import moment from "moment";
import React from "react";

const data = {
    draw_date: '2024-04-03',
    numbers: [10, 12, 14, 17, 20, 29],
    prize_amount: 7_500_000,
    currency: 'GBP',
    prizes: [
        {
            no_of_matches: 'Match6',
            winners: 1,
            prize_per_winner: 7530298.00,
            total_prize: 7530298.00,
            currency: 'GBP',
        },
        {
            no_of_matches: 'Match5 +1 Bonus',
            winners: 1,
            prize_per_winner: 1000000.00,
            total_prize: 1000000.00,
            currency: 'GBP',
        },
        {
            no_of_matches: 'Match5',
            winners: 262,
            prize_per_winner: 1750.00,
            total_prize: 458500.00,
            currency: 'GBP',
        },
        {
            no_of_matches: 'Match4',
            winners: 10512,
            prize_per_winner: 140.00,
            total_prize: 1471680.00,
            currency: 'GBP',
        },
        {
            no_of_matches: 'Match3',
            winners: 177505,
            prize_per_winner: 30.00,
            total_prize: 5325150.00,
            currency: 'GBP',
        },
        {
            no_of_matches: 'Match2',
            winners: 1322560,
            prize_per_winner: 2.00,
            total_prize: 2645120.00,
            currency: 'GBP',
        }
    ],
};

export default function LotteryPrizeTable() {
    const drawDate = moment(data.draw_date);

    return (
        <div className="border-t border-r border-b-2 border-l-2 border-slate-900 rounded-lg">
            <div className="bg-green-50 rounded-t-lg border-b flex items-center justify-between p-8">
                <div>
                    <p className="text-lg">{drawDate.format('dddd')}</p>
                    <time
                        className="text-xl font-bold tracking-tight"
                        dateTime={drawDate.format('YYYY-MM-DD')}
                    >
                        {drawDate.format('MMMM Do, YYYY')}
                    </time>
                </div>

                <div className="flex-col">
                    <p>Main Draw</p>

                    <ul className="flex space-x-2">
                        {data.numbers.map((number: number, numberIdx) => (
                            <li key={numberIdx}>
                                <Circle size="sm" className="font-bold">{number}</Circle>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="py-5 px-8 flex items-center border-t border-slate-900 justify-between">
                <p className="text-lg">Est. Jackpot</p>

                <p className="text-xl font-bold tracking-tight capitalize">
                    {formatCurrencyForHumans(data.prize_amount, data.currency)}
                </p>

                <button type="button">
                    <ChevronUpIcon className="h-5 w-5"/>
                </button>
            </div>

            <div>
                <div className="py-5 px-8 bg-slate-50 border-t border-slate-900">
                    <p className="text-3xl font-bold tracking-tight">Prize</p>
                </div>

                <table className="min-w-full divide-y divide-slate-900 text-left text-slate-700">
                    <thead>
                        <tr className="bg-blue-50 border-t border-slate-900">
                            <th className="py-4 pl-8">No. of matches</th>
                            <th className="py-4">All winners</th>
                            <th className="py-4">Prize per winner</th>
                            <th className="py-4 pr-8">Total Prize</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-900">
                        {data.prizes.map((prize, prizeIdx) => (
                            <tr key={prizeIdx} className={prizeIdx % 2 === 0 ? 'bg-slate-50' : ''}>
                                <th className="py-4 pl-8 text-left">{prize.no_of_matches}</th>
                                <td className="py-4">{prize.winners}</td>
                                <td className="py-4">{formatCurrency(prize.prize_per_winner, prize.currency)}</td>
                                <td className="py-4 pr-8">{formatCurrency(prize.total_prize, prize.currency)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
