import { Hero } from '../components/Hero';
import { Problems } from '../components/Problems';
import { Colleges } from '../components/Colleges';
import { Stats } from '../components/Stats';
import { HowItWorks } from '../components/HowItWorks';
import { Testimonials } from '../components/Testimonials';
import { LeadCollection } from '../components/LeadCollection';

export const Landing = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Problems />
      <Colleges />
      <HowItWorks />
      <Testimonials />
      <LeadCollection />
    </>
  );
};
