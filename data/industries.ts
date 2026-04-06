import type { HeroProps } from '@/components/Hero';
import type { SolutionItem } from '@/components/SolutionsGrid';

export interface IndustryData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: HeroProps;
  solutions: SolutionItem[];
  getStarted: {
    title: string;
    subtitle: string;
  };
}

export const industries: IndustryData[] = [
  {
    slug: 'commercial-industrial',
    seo: {
      title: 'Commercial & Industrial Energy Solutions | Coulomb Technology',
      description:
        'Reduce demand charges, improve resiliency, and unlock operational savings with Coulomb Technology for commercial and industrial facilities.',
    },
    hero: {
      title: 'Commercial & Industrial Energy Operations|Made Predictable',
      subtitle:
        'Coulomb helps commercial and industrial facilities lower demand charges, improve backup resilience, and automate energy decisions across every site.',
      videoSrc: '/videos/hero-video.mp4',
      primaryButtonText: 'Request System Design',
      primaryButtonHref: '/contact',
      secondaryButtonText: 'See Applications',
      secondaryButtonHref: '/industries/defense-government',
    },
    solutions: [
      {
        index: 1,
        image: '/images/ci_uc1_datacenter_opt-300x167.jpg',
        title: 'Peak Demand Management',
        subtitle: 'Flatten peaks before they become costly demand charges.',
        challenge:
          'Large facilities are penalized by short load spikes that drive demand charges far beyond their actual energy usage.',
        bullets: [
          'Predicts demand windows and dispatches storage automatically',
          'Reduces monthly utility charges without operator intervention',
          'Preserves reserve capacity for critical operations',
        ],
      },
      {
        index: 2,
        image: '/images/ems_diagram.png',
        title: 'Solar Self-Consumption',
        subtitle: 'Keep onsite generation working harder for your facility.',
        challenge:
          'Facilities with solar often export power at low value while still importing expensive energy later in the day.',
        bullets: [
          'Captures excess solar and reuses it during higher-value intervals',
          'Optimizes storage dispatch alongside facility load forecasts',
          'Improves onsite energy utilization without added complexity',
        ],
      },
      {
        index: 3,
        image: '/images/app_mockup-1.png',
        title: 'Operational Visibility',
        subtitle: 'Give teams a clear view of performance and savings.',
        challenge:
          'Operators need a simple way to understand system behavior, savings, and asset status across multiple buildings or campuses.',
        bullets: [
          'Surfaces savings, runtime, and system health in one interface',
          'Supports portfolio-level monitoring across facilities',
          'Makes energy performance easier to verify and share internally',
        ],
      },
    ],
    getStarted: {
      title: 'See What Coulomb Technology Can Do for Your Facility',
      subtitle:
        'Our team will work with your procurement and engineering staff to scope the right architecture, controls strategy, and deployment timeline.',
    },
  },
  {
    slug: 'defense-government',
    seo: {
      title: 'Defense & Government Energy Solutions | Coulomb Technology',
      description:
        'Support mission-critical defense and government facilities with resilient battery storage, peak management, and secure energy control.',
    },
    hero: {
      title: 'Defense & Government Facilities|Need Energy Resilience',
      subtitle:
        'From remote installations to secured campuses, Coulomb supports reliability, backup readiness, and efficient energy operation when continuity matters most.',
      videoSrc: '/videos/hero-video.mp4',
      primaryButtonText: 'Request System Design',
      primaryButtonHref: '/contact',
      secondaryButtonText: 'Learn More',
      secondaryButtonHref: '/industries/commercial-industrial',
    },
    solutions: [
      {
        index: 1,
        image: '/images/def_vert_military_opt-300x167.jpg',
        title: 'Mission Continuity',
        subtitle: 'Maintain critical operations during utility interruptions.',
        challenge:
          'Facilities with mission-critical loads cannot afford downtime when the grid is unstable or unavailable.',
        bullets: [
          'Delivers fast backup support for essential loads',
          'Coordinates storage with resilience planning requirements',
          'Keeps state-of-charge aligned to mission priorities',
        ],
      },
      {
        index: 2,
        image: '/images/ems_diagram.png',
        title: 'Remote Microgrid Control',
        subtitle: 'Manage distributed energy assets with confidence.',
        challenge:
          'Remote or distributed sites need energy systems that are easy to operate, monitor, and secure from a central team.',
        bullets: [
          'Provides centralized visibility into site-level energy behavior',
          'Supports predictable dispatch in isolated or constrained locations',
          'Helps teams standardize control strategies across deployments',
        ],
      },
      {
        index: 3,
        image: '/images/app_mockup-1.png',
        title: 'Secure Operational Insights',
        subtitle: 'Keep stakeholders informed without adding workflow friction.',
        challenge:
          'Leadership teams need performance reporting that is simple to review while still supporting technical oversight and planning.',
        bullets: [
          'Creates a clear operational picture for decision makers',
          'Tracks uptime, savings, and reliability metrics over time',
          'Supports procurement and program review discussions',
        ],
      },
    ],
    getStarted: {
      title: 'See What Coulomb Technology Can Do for Your Mission',
      subtitle:
        'Our team will work with your procurement and engineering staff to define a resilient system architecture and deployment plan.',
    },
  },
  {
    slug: 'motive-traction',
    seo: {
      title: 'Motive & Traction Energy Solutions | Coulomb Technology',
      description:
        'Optimize charging infrastructure, reduce peak power costs, and improve uptime for motive and traction applications with Coulomb Technology.',
    },
    hero: {
      title: 'Motive & Traction Fleets|Need Smarter Charging Infrastructure',
      subtitle:
        'Coulomb helps depot and fleet operators manage charging peaks, improve utilization, and keep vehicles ready without oversizing utility service.',
      videoSrc: '/videos/hero-video.mp4',
      primaryButtonText: 'Request System Design',
      primaryButtonHref: '/contact',
      secondaryButtonText: 'See Applications',
      secondaryButtonHref: '/industries/commercial-industrial',
    },
    solutions: [
      {
        index: 1,
        image: '/images/ci_uc1_datacenter_opt-300x167.jpg',
        title: 'Depot Peak Shaving',
        subtitle: 'Reduce charging spikes at the highest-load times of day.',
        challenge:
          'Fleet depots can create extreme coincident demand when many vehicles charge at once, driving utility costs and infrastructure constraints.',
        bullets: [
          'Shifts charging to less expensive intervals automatically',
          'Limits peak power draw without reducing fleet readiness',
          'Helps avoid costly service upgrades and penalties',
        ],
      },
      {
        index: 2,
        image: '/images/ems_diagram.png',
        title: 'Charging Orchestration',
        subtitle: 'Balance vehicle readiness against available site power.',
        challenge:
          'Operators need a charging strategy that respects departure schedules, site limits, and variable power availability.',
        bullets: [
          'Coordinates storage with vehicle charging priorities',
          'Maintains predictable availability for dispatch windows',
          'Improves energy utilization across the depot footprint',
        ],
      },
      {
        index: 3,
        image: '/images/app_mockup-1.png',
        title: 'Fleet Performance Visibility',
        subtitle: 'Track readiness, cost, and energy outcomes in one place.',
        challenge:
          'Fleet managers need a simple operating layer that shows charging performance and cost impact without adding manual reporting overhead.',
        bullets: [
          'Surfaces fleet energy metrics in a clear dashboard view',
          'Supports planning for growth and operational changes',
          'Makes savings and uptime easier to communicate internally',
        ],
      },
    ],
    getStarted: {
      title: 'See What Coulomb Technology Can Do for Your Fleet',
      subtitle:
        'Our team will work with your procurement and engineering staff to size the right charging and storage architecture for your operation.',
    },
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
