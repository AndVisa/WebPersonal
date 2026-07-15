import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

// Lazy loading para las páginas
const Home = lazy(() => import('../pages/Home'));
const Nosotros = lazy(() => import('../pages/Nosotros'));
const Soluciones = lazy(() => import('../pages/Soluciones'));
const Blog = lazy(() => import('../pages/Blog'));
const Contacto = lazy(() => import('../pages/Contacto'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Componente de carga
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route
          path="/nosotros"
          element={
            <MainLayout topBarClass="bg-slate-700/80" withBackgroundBoxes={true}>
              <Nosotros />
            </MainLayout>
          }
        />
        <Route
          path="/soluciones"
          element={
            <MainLayout topBarClass="bg-slate-700/80" withBackgroundBoxes={true}>
              <Soluciones />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout topBarClass="bg-slate-700/80" withBackgroundBoxes={true}>
              <Blog />
            </MainLayout>
          }
        />
        <Route
          path="/contacto"
          element={
            <MainLayout topBarClass="bg-slate-700/80" withBackgroundBoxes={true}>
              <Contacto />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes; 