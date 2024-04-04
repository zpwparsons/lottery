import Banner from "@/app/ui/banner";
import SecondaryNavigation from "@/app/ui/secondary-navigation";

const navigationLinks = [
    { name: 'Thunderball', href: '/thunderball' },
    { name: 'Results', href: '/thunderball/results' },
    { name: 'Numbers', href: '/thunderball/numbers' },
    { name: 'Tools', href: '/thunderball/tools' },
    { name: 'Jackpot', href: '/thunderball/jackpots' },
    { name: 'History', href: '/thunderball/history' },
    { name: 'FAQs', href: '/thunderball/faq' },
];

export default function ThunderballPage() {
    return (
        <main>
            <Banner
                title="Thunderball"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="purple"
            />

            <SecondaryNavigation links={navigationLinks} />
        </main>
    );
}
