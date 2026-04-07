import Head from 'next/head';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import GetStarted from '@/components/GetStarted';
import Navbar from '@/components/Navbar';
import ResearchPartners from '@/components/ResearchPartners';
import SolutionsGrid from '@/components/SolutionsGrid';
import { getIndustryBySlug, industries, type IndustryData } from '@/data/industries';

interface IndustryPageProps {
  industry: IndustryData;
}

const IndustryPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ industry }) => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Head>
        <title>{industry.seo.title}</title>
        <meta name="description" content={industry.seo.description} />
      </Head>

      <Navbar />

      <main className="flex flex-col w-full">
        <Hero {...industry.hero} />
        <SolutionsGrid
          eyebrow="PRIMARY APPLICATIONS"
          title={`How Coulomb Supports ${industry.hero.title?.split('|')[0] ?? industry.seo.title}`}
          subtitle="Each deployment combines operational resilience, cost control, and measurable energy performance using the same foundational architecture."
          solutions={industry.solutions}
        />
        <ResearchPartners />
        <GetStarted title={industry.getStarted.title} subtitle={industry.getStarted.subtitle} />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: industries.map((industry) => ({ params: { slug: industry.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IndustryPageProps> = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      industry,
    },
  };
};

export default IndustryPage;
