import LotteryLogoWhite from "@/app/ui/lottery-logo-white";
import AgeDisclaimer from "@/app/ui/age-disclaimer";

export default function Footer() {
    return (
        <footer className="px-6 xl:px-0 bg-[#021849] text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="max-w-7xl mx-auto pt-12 md:pt-24">
                <div className="flex justify-center">
                    <LotteryLogoWhite/>
                </div>

                <nav className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-12 pb-16 gap-10 md:gap-5 font-bold">
                    <div>
                        <p className="font-bold text-xl">Lottery</p>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="hover:text-blue-500">UK Lotto</a></li>
                            <li><a href="#" className="hover:text-blue-500">EuroMillions</a></li>
                            <li><a href="#" className="hover:text-blue-500">Thunderball</a></li>
                            <li><a href="#" className="hover:text-blue-500">Set for Life</a></li>
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="font-extrabold text-lg">Company</p>
                        <ul className="mt-2 grid lg:grid-cols-2 gap-3">
                            <li>
                                <a href="#" className="hover:text-blue-500">FAQs</a>
                                <p className="font-light text-slate-300 text-sm">Frequently asked questions</p>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">About us</a>
                                <p className="font-light text-slate-300 text-sm">The story of us</p>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">Lottery predictions</a>
                                <p className="font-light text-slate-300 text-sm">Weekly lottery predictions</p>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-500">Glossary</a>
                                <p className="font-light text-slate-300 text-sm">Glossary of lottery words &amp; terms</p>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-extrabold text-lg">Resources</p>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="hover:text-blue-500">Terms</a></li>
                            <li><a href="#" className="hover:text-blue-500">Cookies</a></li>
                            <li><a href="#" className="hover:text-blue-500">Play Responsibly</a></li>
                            <li><a href="#" className="hover:text-blue-500">Scams</a></li>
                            <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-extrabold text-lg">Contact</p>
                        <ul className="mt-4 space-y-3">
                            <li><a href="/contact-us/">Contact us</a></li>
                            <li><a href="#" className="hover:text-blue-500">Instagram</a></li>
                            <li><a href="#" className="hover:text-blue-500">Facebook</a></li>
                            <li><a href="#" className="hover:text-blue-500">Youtube</a></li>
                            <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                        </ul>
                    </div>
                </nav>

                <div className="mb-6">
                    <AgeDisclaimer />
                </div>
            </div>

            <div className="border-t border-slate-600 py-8">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <p className="text-sm text-light text-slate-300">
                            Please note: These results are unofficial. Always check with the official source for lottery
                            numbers in a particular state. Lottery UK is an independent lottery results service and is
                            neither endorsed, affiliated nor approved by any state, multi-state lottery operator or
                            organization whatsoever. All trademarks remain the property of their rightful owners and
                            used for informational purposes only. Copyright 1995-2023 LotteryUK.com., All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
