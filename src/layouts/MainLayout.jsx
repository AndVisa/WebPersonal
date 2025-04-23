import React, { memo } from 'react';
import PropTypes from 'prop-types';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
const MainLayout = memo(({ children, backgroundClass = '', topBarClass = '' }) => {
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
});

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundClass: PropTypes.string,
  topBarClass: PropTypes.string
};

MainLayout.displayName = 'MainLayout';

export default MainLayout; 