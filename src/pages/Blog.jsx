import React, { memo } from 'react';

const Blog = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] bg-slate-600">
        <div className="container mx-auto px-4 relative z-10">
          {/* Contenido del blog se agregará posteriormente */}
        </div>
      </section>
    </div>
  );
};

Blog.propTypes = {};

export default memo(Blog); 