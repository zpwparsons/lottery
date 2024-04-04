import Banner from "@/app/ui/banner";
import SecondaryNavigation from "@/app/ui/secondary-navigation";

const navigationLinks = [
    { name: 'EuroMillions', href: '/euro-millions' },
    { name: 'Results', href: '/euro-millions/results' },
    { name: 'Numbers', href: '/euro-millions/numbers' },
    { name: 'Tools', href: '/euro-millions/tools' },
    { name: 'Jackpot', href: '/euro-millions/jackpots' },
    { name: 'History', href: '/euro-millions/history' },
    { name: 'FAQs', href: '/euro-millions/faq' },
];

export default function EuroMillionsPage() {
    return (
        <main>
            <Banner
                title="Euro Millions"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="blue"
            />

            <SecondaryNavigation links={navigationLinks} />
        </main>
    );
}
