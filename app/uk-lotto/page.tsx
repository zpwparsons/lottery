import SecondaryNavigation from "@/app/ui/secondary-navigation";
import NextLotteryDraw from "@/app/ui/next-lottery-draw";
import HowToPlay from "@/app/ui/how-to-play";
import QuickPick from "@/app/ui/quick-pick";
import Header from '../ui/header';

const navigationLinks = [
    { name: 'UK Lotto', href: '/uk-lotto' },
    { name: 'Results', href: '/uk-lotto/results' },
    { name: 'Numbers', href: '/uk-lotto/numbers' },
    { name: 'Tools', href: '/uk-lotto/tools' },
    { name: 'Jackpot', href: '/uk-lotto/jackpots' },
    { name: 'History', href: '/uk-lotto/history' },
    { name: 'FAQs', href: '/uk-lotto/faq' },
];

const howToPlaySteps = [
    'Choose 6 numbers between 1-59 or try a lucky dip.',
    'Choose to play on Wednesday, Saturday or both.',
    'We will check your numbers automatically and let you know if you have won.',
];

export default function UkLottoPage() {
    return (
        <div>
            <Header
                title="UK Lotto"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="green"
            />

            <SecondaryNavigation links={navigationLinks} />

            <section className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
                <h4 className="font-bold text-[28px] tracking-tight leading-tight">
                    Latest numbers
                </h4>

                <div className="mt-4 sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <main className="col-span-2 lg:col-span-4">
                        <p className="leading-6">
                            Welcome to LotteryUK.com&apos;s UK Lotto numbers page. Here, you&apos;ll find the latest
                            results from the UK Lotto draw, including the winning numbers and prize breakdowns. The UK
                            Lotto is one of the most popular lotteries in the United Kingdom, offering players the
                            chance to win life-changing prizes every Wednesday and Saturday. The draw takes place at
                            8:00 pm GMT and the results are usually available on our website within minutes of the draw.
                            On this page, you&apos;ll find the numbers from the most recent UK Lotto draw, as well as a
                            full archive of past results. You can also check the prize breakdown for each draw, to see
                            how many winners there were in each prize tier and how much money was won. If you&apos;re
                            looking for a specific set of numbers, you can use our search function to quickly find the
                            results you&apos;re looking for. You can also sign up for email alerts, so you never miss a
                            draw. We also provide a variety of tools and resources to help you pick your numbers and
                            improve your chances of winning. From lucky numbers generators to odds calculators, we have
                            everything you need to increase your chances of winning the UK Lotto. In addition to the
                            latest numbers, you can also find information on the history of the UK Lotto, including how
                            the game began and how it has evolved over the years. We also have a comprehensive FAQ
                            section that answers all of your most frequently asked questions about the UK Lotto. Stay
                            informed and improve your chances of winning with LotteryUK.com&apos;s UK Lotto numbers
                            page. Remember to play responsibly.
                        </p>
                    </main>

                    <aside className="mt-5 sm:mt-0 col-span-2 space-y-5">
                        <NextLotteryDraw
                            nextDrawDate={new Date('2024-04-10 20:00')}
                            estimateJackpot="£ 7.5 Million"
                        />

                        <HowToPlay steps={howToPlaySteps} />

                        <QuickPick />
                    </aside>
                </div>
            </section>
        </div>
    );
}
