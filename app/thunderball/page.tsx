import Header from "@/app/ui/header";
import SecondaryNavigation from "@/app/ui/secondary-navigation";
import NextLotteryDraw from "@/app/ui/next-lottery-draw";
import HowToPlay from "@/app/ui/how-to-play";
import QuickPick from "@/app/ui/quick-pick";

const navigationLinks = [
    { name: 'Thunderball', href: '/thunderball' },
    { name: 'Results', href: '/thunderball/results' },
    { name: 'Numbers', href: '/thunderball/numbers' },
    { name: 'Tools', href: '/thunderball/tools' },
    { name: 'Jackpot', href: '/thunderball/jackpots' },
    { name: 'History', href: '/thunderball/history' },
    { name: 'FAQs', href: '/thunderball/faq' },
];

const howToPlaySteps = [
    'Choose 5 numbers between 1 - 39 and 1 thunderball between 1-14 or try a lucky dip.',
    'Choose to play on Tuesday, Wednesday, Thursday, Friday or play them all.',
    'We will check your numbers automatically and let you know if you have won',
];

export default function ThunderballPage() {
    return (
        <div>
            <Header
                title="Thunderball"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="purple"
            />

            <SecondaryNavigation links={navigationLinks}/>

            <section className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
                <h4 className="font-bold text-[28px] tracking-tight leading-tight">
                    Latest numbers
                </h4>

                <div className="mt-4 sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <main className="col-span-2 lg:col-span-4">
                        <p className="leading-6">
                            Are you looking for the latest Thunderball numbers? Look no further than LotteryUK.com! We
                            provide the most recent Thunderball numbers as soon as they are drawn. Simply check our
                            website to see the winning numbers and prize breakdown for the latest Thunderball draw.
                            But that&apos;s not all - LotteryUK.com also provides a wealth of information and tools to
                            help you make informed decisions when playing Thunderball. From past numbers and results to
                            odds calculators and number generators, we have everything you need to improve your chances
                            of winning. Don&apos;t miss out on your chance to win big with Thunderball. Check the latest
                            numbers and prize breakdowns on LotteryUK.com today.
                        </p>
                    </main>

                    <aside className="mt-5 sm:mt-0 col-span-2 space-y-5">
                        <NextLotteryDraw
                            nextDrawDate={new Date('2024-04-10 19:00')}
                            estimateJackpot="£ 500,000"
                        />

                        <HowToPlay steps={howToPlaySteps}/>

                        <QuickPick/>
                    </aside>
                </div>
            </section>
        </div>
    );
}
