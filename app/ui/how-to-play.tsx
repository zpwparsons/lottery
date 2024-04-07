import Card from "@/app/ui/card";

interface HowToPlayProps {
    steps: string[];
}

export default function HowToPlay({
    steps,
}: HowToPlayProps) {
    return (
        <Card>
            <h4 className="font-bold text-2xl tracking-tight leading-tight">
                How to play
            </h4>

            <ul className="mt-4 divide-y divide-slate-200 text-base">
                {steps.map((step, stepIdx) => (
                    <li key={stepIdx} className="py-2">
                        {step}
                    </li>
                ))}
            </ul>
        </Card>
    );
}
