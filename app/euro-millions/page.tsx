import Header from "@/app/ui/header";
import SecondaryNavigation from "@/app/ui/secondary-navigation";
import NextLotteryDraw from "@/app/ui/next-lottery-draw";
import HowToPlay from "@/app/ui/how-to-play";
import QuickPick from "@/app/ui/quick-pick";

const navigationLinks = [
    { name: 'EuroMillions', href: '/euro-millions' },
    { name: 'Results', href: '/euro-millions/results' },
    { name: 'Numbers', href: '/euro-millions/numbers' },
    { name: 'Tools', href: '/euro-millions/tools' },
    { name: 'Jackpot', href: '/euro-millions/jackpots' },
    { name: 'History', href: '/euro-millions/history' },
    { name: 'FAQs', href: '/euro-millions/faq' },
];

const howToPlaySteps = [
    'Choose 6 numbers between 1-59 or try a lucky dip.',
    'Choose to play on Wednesday, Saturday or both.',
    'We will check your numbers automatically and let you know if you have won.',
];

export default function EuroMillionsPage() {
    return (
        <div>
            <Header
                title="Euro Millions"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="blue"
            />

            <SecondaryNavigation links={navigationLinks}/>

            <section className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
                <h4 className="font-bold text-[28px] tracking-tight leading-tight">
                    Latest numbers
                </h4>

                <div className="mt-4 sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <main className="col-span-2 lg:col-span-4">
                        <p className="leading-6">
                            Are you curious to know the latest EuroMillions numbers? Look no further than LotteryUK.com.
                            Our website provides the most recent and up-to-date EuroMillions numbers, so you can stay
                            informed on your chances of winning. The EuroMillions draw takes place every Tuesday and
                            Friday at 8:45 PM GMT. On our website, you can find the numbers from the most recent draw,
                            as well as the prize breakdown for each tier. In addition to the latest numbers,
                            LotteryUK.com also offers a comprehensive history of past EuroMillions draws. You can use
                            this information to help inform your number selections and increase your chances of winning.
                            Don&apos;t miss out on the next EuroMillions draw. Check the latest numbers on LotteryUK.com
                            and get ready to potentially claim your share of the prize money. And always play responsibly.
                        </p>
                    </main>

                    <aside className="mt-5 sm:mt-0 col-span-2 space-y-5">
                        <NextLotteryDraw
                            nextDrawDate={new Date('2024-04-09 18:00')}
                            estimateJackpot="£ 70.36 Million"
                        />

                        <HowToPlay steps={howToPlaySteps}/>

                        <QuickPick/>
                    </aside>
                </div>
            </section>
        </div>
    );
}
