import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BackgroundBoxes } from '../components/ui/background-boxes';

// Memoizar los componentes hijos para evitar re-renders innecesarios
const MemoizedTopBar = memo(TopBar);
const MemoizedNavbar = memo(Navbar);
const MemoizedFooter = memo(Footer);

/**
 * Layout principal de la aplicación que incluye:
 * - TopBar: Barra superior con información de contacto
 * - Navbar: Barra de navegación principal
 * - Contenido principal: Área donde se renderizan las páginas
 * - Footer: Pie de página con información adicional
 */
const MainLayout = memo(({ children, backgroundClass = '', topBarClass = '', withBackgroundBoxes = false }) => {
  
  // COMPORTAMIENTO ORIGINAL E INTACTO para todas las páginas excepto Nosotros
  if (!withBackgroundBoxes) {
    return (
      <div className={`flex flex-col min-h-screen ${backgroundClass}`}>
        <MemoizedTopBar className={topBarClass} />
        <MemoizedNavbar />
        <main className="flex-grow relative">
          {children}
        </main>
        <MemoizedFooter />
      </div>
    );
  }

  // COMPORTAMIENTO MODIFICADO exclusivamente para la página Nosotros
  return (
    <div className={`flex flex-col min-h-screen bg-transparent relative w-full`}>
      <div className="fixed inset-0 w-full h-full z-0 overflow-hidden bg-slate-900 pointer-events-auto">
        <BackgroundBoxes className="z-0" />
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      </div>
      <div className="relative z-20 flex flex-col flex-grow w-full pointer-events-none">
        <div className="pointer-events-auto w-full">
          <MemoizedTopBar className={topBarClass} />
        </div>
        <div className="pointer-events-auto w-full">
          <MemoizedNavbar />
        </div>
        <main className="flex-grow relative pointer-events-none">
          {children}
        </main>
        <div className="pointer-events-auto w-full">
          <MemoizedFooter />
        </div>
      </div>
    </div>
  );
});

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundClass: PropTypes.string,
  topBarClass: PropTypes.string,
  withBackgroundBoxes: PropTypes.bool
};

MainLayout.displayName = 'MainLayout';

export default MainLayout; 