import Banner from '../ui/banner';
import SecondaryNavigation from "@/app/ui/secondary-navigation";

const navigationLinks = [
    { name: 'UK Lotto', href: '/uk-lotto' },
    { name: 'Results', href: '/uk-lotto/results' },
    { name: 'Numbers', href: '/uk-lotto/numbers' },
    { name: 'Tools', href: '/uk-lotto/tools' },
    { name: 'Jackpot', href: '/uk-lotto/jackpots' },
    { name: 'History', href: '/uk-lotto/history' },
    { name: 'FAQs', href: '/uk-lotto/faq' },
];

export default function UkLottoPage() {
    return (
        <main>
            <Banner
                title="UK Lotto"
                subtitle="Check the Latest UK Lotto Numbers Here"
                color="green"
            />

            <SecondaryNavigation links={navigationLinks} />
        </main>
    );
}
