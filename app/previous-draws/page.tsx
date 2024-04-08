import PreviousDrawsForm from "@/app/ui/previous-draws-form";
import HowToPlay from "@/app/ui/how-to-play";
import QuickPick from "@/app/ui/quick-pick";
import Header from "@/app/ui/header";

const howToPlaySteps = [
    'Choose 5-7 numbers between 1-59 or try the quick pick.',
    'Play your selected numbers.',
    'Check what you would have won.',
];

export default function PreviousDrawsPage() {
    return (
        <div>
            <Header
                title="Previous Draws"
                subtitle="Check Much You Could Have Won In Past Draws"
                color="red"
            />

            <section className="max-w-7xl mx-auto py-16 px-6 xl:px-0">
                <h4 className="font-bold text-[28px] tracking-tight leading-tight">
                    Previous numbers
                </h4>

                <div className="mt-4 sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    <main className="col-span-2 lg:col-span-4 space-y-5">
                        <p className="leading-6">
                            Welcome to our Lotto Draw Analysis tool! Curious to know how much you could have won from
                            past draws if you had played your lucky numbers? You&apos;ve come to the right place. Simply
                            input your 5-7 preferred numbers, and we&apos;ll crunch the data to show you the potential
                            prize amount you would have won in any of the lotteries covered by our API. Whether
                            you&apos;re a seasoned player or just dabbling in the world of lottery, our tool provides
                            fascinating insights into the winnings from previous draws. Take a trip down memory lane and
                            see how your numbers would have fared in the past!
                        </p>

                        <PreviousDrawsForm />
                    </main>

                    <aside className="mt-5 sm:mt-0 col-span-2 space-y-5">
                        <HowToPlay steps={howToPlaySteps}/>

                        <QuickPick randomNumberCount={7}/>
                    </aside>
                </div>
            </section>
        </div>
    );
}
