import Image from 'next/image';
import Link from 'next/link';

export interface SolutionItem {
  image: string;
  title: string;
  subtitle: string;
  challenge: string;
  bullets: string[];
  index: number;
}

interface SolutionRowProps extends SolutionItem {}
interface SolutionRowProps extends SolutionItem {
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export interface SolutionsGridProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  solutions?: SolutionItem[];
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

function SolutionRow({
  image,
  title,
  subtitle,
  challenge,
  bullets,
  index,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: SolutionRowProps) {
  return (
    <>
      <div className="relative h-64 md:h-full overflow-hidden rounded-2xl shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-sm font-semibold text-black">
          {index}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-green-600">REVENUE &amp; SAVINGS</p>
        <h3 className="mt-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{subtitle}</p>

        <div className="my-4 border-t border-gray-200" />

        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">THE CHALLENGE</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{challenge}</p>

        <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-green-600">
          THE COULOMB TECHNOLOGY SOLUTION
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        <div className="mt-6 inline-flex flex-wrap gap-4 text-sm font-medium text-blue-600">
          <Link href={primaryCtaHref} className="transition-colors hover:text-blue-700">
            {primaryCtaText} &rarr;
          </Link>
          <Link href={secondaryCtaHref} className="transition-colors hover:text-blue-700">
            {secondaryCtaText} &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}

const defaultSolutions: SolutionItem[] = [
  {
    index: 1,
    image: '/images/ci_uc1_datacenter_opt-300x167.jpg',
    title: 'Peak Demand Management',
    subtitle: 'Cut demand spikes and protect operating margins during high-load intervals.',
    challenge:
      'Large C&I facilities face steep demand charges driven by short, high-intensity load events that disproportionately impact monthly utility bills.',
    bullets: [
      'Dispatches battery power in milliseconds during peak intervals',
      'Uses predictive controls to pre-charge ahead of known demand windows',
      'Maintains resiliency reserve while reducing demand penalties',
    ],
  },
  {
    index: 2,
    image: '/images/def_vert_embassy_opt-300x167.jpg',
    title: 'Resilient Critical Power',
    subtitle: 'Ensure continuity for mission-critical operations during outages and grid instability.',
    challenge:
      'Facilities with uptime-sensitive systems cannot tolerate disruptions from outages, voltage events, or utility reliability shortfalls.',
    bullets: [
      'Provides fast-transition backup support to critical circuits',
      'Coordinates storage dispatch with site controls for continuity',
      'Optimizes state-of-charge for both resiliency and cost outcomes',
    ],
  },
  {
    index: 3,
    image: '/images/def_vert_military_opt-300x167.jpg',
    title: 'Energy Cost Arbitrage',
    subtitle: 'Shift energy consumption to lower-cost periods with autonomous charge/discharge optimization.',
    challenge:
      'Time-of-use tariffs and volatile market pricing make it difficult for operators to consistently buy power at optimal times.',
    bullets: [
      'Charges during off-peak pricing and discharges during peak rates',
      'Automates strategy selection based on tariff and load forecasts',
      'Combines arbitrage with demand management for stacked value',
    ],
  },
];

export default function SolutionsGrid({
  eyebrow = 'PRIMARY APPLICATIONS',
  title = 'Four Ways C&I Facilities Deploy Coulomb Technology',
  subtitle = 'From reducing utility demand charges to hardening critical infrastructure resilience, Coulomb orchestrates every battery cycle to maximize operational value and reliability.',
  solutions,
  primaryCtaText = 'Request System Design',
  primaryCtaHref = '/contact',
  secondaryCtaText = 'Get a Quote',
  secondaryCtaHref = '/contact',
}: SolutionsGridProps) {
  return (
    <section className="w-full bg-neutral-900 px-6 py-16 md:px-10 lg:px-16">
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:grid-rows-4">
        <div className="col-span-1 rounded-2xl bg-black px-6 py-16 text-center shadow-sm md:col-span-2">
          <p className="text-sm uppercase tracking-wide text-green-500">{eyebrow}</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold text-white">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">{subtitle}</p>
        </div>

        {(solutions ?? defaultSolutions).map((solution) => (
          <SolutionRow
            key={solution.index}
            {...solution}
            primaryCtaText={primaryCtaText}
            primaryCtaHref={primaryCtaHref}
            secondaryCtaText={secondaryCtaText}
            secondaryCtaHref={secondaryCtaHref}
          />
        ))}
      </div>
    </section>
  );
}
