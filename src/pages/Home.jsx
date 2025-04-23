import React, { Suspense, lazy } from 'react';

// Lazy loading para componentes pesados
const Hero = lazy(() => import('../components/Hero'));
const HeroContent = lazy(() => import('../components/HeroContent'));

const Home = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="h-screen bg-slate-700" />}>
        <Hero />
        <HeroContent />
      </Suspense>
    </div>
  );
};

export default Home; 