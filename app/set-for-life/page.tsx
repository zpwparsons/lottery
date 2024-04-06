import Header from "@/app/ui/header";
import SecondaryNavigation from "@/app/ui/secondary-navigation";

const navigationLinks = [
    { name: 'Set for Life', href: '/set-for-life' },
    { name: 'Results', href: '/set-for-life/results' },
    { name: 'Numbers', href: '/set-for-life/numbers' },
    { name: 'Tools', href: '/set-for-life/tools' },
    { name: 'Jackpot', href: '/set-for-life/jackpots' },
    { name: 'History', href: '/set-for-life/history' },
    { name: 'FAQs', href: '/set-for-life/faq' },
];

export default function SetForLifePage() {
    return (
        <main>
            <Header
                title="Set for Life"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="yellow"
            />

            <SecondaryNavigation links={navigationLinks} />
        </main>
    );
}
