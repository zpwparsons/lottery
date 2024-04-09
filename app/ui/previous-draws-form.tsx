'use client';

import React, { FormEvent, useState } from "react";
import { formatCurrency } from "@/app/lib/utils";
import Button from "@/app/ui/button";
import axios from "axios";
import clsx from "clsx";

interface Result {
    lottery_name: string,
    draw_code: string,
    draw_date: string,
    primaryMatches: number,
    secondaryMatches: number,
    prize_amount: number,
    currency: string,
}

const initialFormState: (number|null)[] = [null, null, null, null, null, null, null];

export default function PreviousDrawsForm() {
    const [numbers, setNumbers] = useState<Array<number|null>>(initialFormState);
    const [results, setResults] = useState<Result[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string|null>(null);

    const handleNumberChange = (value: string, index: number): void => {
        const newNumbers = [...numbers];
        newNumbers[index] = parseInt(value);
        setNumbers(newNumbers);
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setIsLoading(true);
        setResults([]);
        setError(null);

        axios.post('/api/previous-draws', {
            user_numbers: numbers,
            start_date: '2014-01-20',
            end_date: '2014-03-20',
        })
            .then((response) => {
                setResults(response.data);
            })
            .catch((error): void => {
                setError(error.response?.data?.message ?? 'Oops. Something went wrong');
            })
            .finally((): void => {
                setIsLoading(false);
            });
    }

    return (
        <div className="border-t border-r border-b-2 border-l-2 border-slate-900 rounded-lg">
            {/* Form */}
            <form onSubmit={handleFormSubmit} className="flex items-center justify-between p-8">
                <div className="flex-col">
                    <p className="font-bold">Enter your numbers below:</p>
                    <div className="mt-1 flex space-x-2">
                        {numbers.map((_, numberIdx: number) => (
                            <input
                                key={numberIdx}
                                type="number"
                                min="1"
                                max="59"
                                onBlur={(e) => handleNumberChange(e.target.value, numberIdx)}
                                required={numberIdx < 5}
                                className={clsx(
                                    'h-12 w-12 p-2 font-bold border-t border-r border-b-2 border-l-2 border-slate-900 rounded-full flex justify-center items-center text-center [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none',
                                    {
                                        'bg-white placeholder:text-slate-300': numberIdx < 5,
                                        'bg-purple-200 focus:outline-purple-600 placeholder:text-purple-300': numberIdx >= 5,
                                    },
                                )}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-44">
                    <Button type="submit" color="blue">Play Now</Button>
                </div>
            </form>

            {/* Result Listing */}
            {(error || isLoading || Boolean(results.length)) && (
                <div className="relative h-[40rem] overflow-y-scroll">
                    <div className="sticky top-0 z-10 py-5 px-8 bg-slate-50 border-y border-slate-900">
                        <p className="text-3xl font-bold tracking-tight">Prize</p>
                    </div>

                    <table className="min-w-full text-left text-slate-700">
                        <thead className="sticky top-[4.89rem] z-10 border-b border-slate-900">
                        <tr className="bg-blue-50">
                            <th className="py-4 pl-8">Lottery Name</th>
                            <th className="py-4">Draw Date</th>
                            <th className="py-4">Matches</th>
                            <th className="py-4 pr-8">Total Prize</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-900">
                        {/* Error State */}
                        {error && (
                            <tr>
                                <td colSpan={4}>
                                    <div className="flex h-[30rem] flex-col items-center justify-center">
                                        <p className="text-xl font-bold">{error}</p>
                                    </div>
                                </td>
                            </tr>
                        )}

                        {/* Loading State */}
                        {isLoading && [...Array(10)].map((_, loadingIdx: number) => (
                            <tr key={loadingIdx} className="bg-slate-50">
                                <th className="py-4 pl-8 text-left">
                                    <div className="h-6 w-32 bg-slate-200 animate-pulse rounded-lg"></div>
                                </th>
                                <td className="py-4">
                                    <div className="h-6 w-28 bg-slate-200 animate-pulse rounded-lg"></div>
                                </td>
                                <td className="py-4">
                                    <div className="h-6 w-16 bg-slate-200 animate-pulse rounded-lg"></div>
                                </td>
                                <td className="py-4">
                                    <div className="h-6 w-24 bg-slate-200 animate-pulse rounded-lg"></div>
                                </td>
                            </tr>
                        ))}

                        {/* Results */}
                        {Boolean(results.length) && results.map((result: Result, resultIdx: number) => (
                            <tr key={resultIdx} className={resultIdx % 2 === 0 ? 'bg-slate-50' : ''}>
                                <th className="py-4 pl-8 text-left">{result.lottery_name}</th>
                                <td className="py-4">{result.draw_date}</td>
                                <td className="py-4">{result.primaryMatches}</td>
                                <td className="py-4">{formatCurrency(result.prize_amount, result.currency)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
