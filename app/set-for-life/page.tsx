import Header from "@/app/ui/header";
import SecondaryNavigation from "@/app/ui/secondary-navigation";
import NextLotteryDraw from "@/app/ui/next-lottery-draw";
import HowToPlay from "@/app/ui/how-to-play";
import QuickPick from "@/app/ui/quick-pick";
import LotteryPrizeTable from "@/app/ui/lottery-prize-table";

const navigationLinks = [
    { name: 'Set for Life', href: '/set-for-life' },
    { name: 'Results', href: '/set-for-life/results' },
    { name: 'Numbers', href: '/set-for-life/numbers' },
    { name: 'Tools', href: '/set-for-life/tools' },
    { name: 'Jackpot', href: '/set-for-life/jackpots' },
    { name: 'History', href: '/set-for-life/history' },
    { name: 'FAQs', href: '/set-for-life/faq' },
];

const howToPlaySteps = [
    'Choose 5 numbers between 1 - 47 and 1 life ball between 1-10 or try a lucky dip.',
    'Choose to play on Monday, Thursday or both.',
    'We will check your numbers automatically and let you know if you have won.',
];

export default function SetForLifePage() {
    return (
        <div>
            <Header
                title="Set for Life"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="yellow"
            />

            <SecondaryNavigation links={navigationLinks}/>

            <section className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
                <h4 className="font-bold text-[28px] tracking-tight leading-tight">
                    Latest numbers
                </h4>

                <div className="mt-4 sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <main className="col-span-2 lg:col-span-4 space-y-5">
                        <p className="leading-6">
                            The Set for Life Lottery is one of the most popular lotteries in the UK, with players
                            eagerly checking the latest numbers every day. LotteryUK.com is the go-to source for all the
                            latest Set for Life numbers, results, and prize breakdowns. Our numbers page is updated
                            regularly, so you can stay informed about the latest draws and see if you&apos;ve won a
                            prize. We also provide a detailed prize breakdown, so you can see how much you could win
                            depending on how many numbers you match. In addition to the latest numbers, our website also
                            offers a variety of other resources to help you improve your chances of winning. We provide
                            information on past draws, as well as tools and tips to help you pick your numbers. So if
                            you&apos;re a fan of the Set for Life Lottery, make sure to check our numbers page regularly
                            to stay up to date with the latest results and prize breakdowns. And don&apos;t forget to
                            check the rest of our website for even more information and resources to help you win big.
                        </p>

                        <LotteryPrizeTable/>
                    </main>

                    <aside className="mt-5 sm:mt-0 col-span-2 space-y-5">
                        <NextLotteryDraw
                            nextDrawDate={new Date('2024-04-08 23:00')}
                            estimateJackpot="£ 10,000"
                        />

                        <HowToPlay steps={howToPlaySteps}/>

                        <QuickPick randomNumberCount={6}/>
                    </aside>
                </div>
            </section>
        </div>
    );
}
