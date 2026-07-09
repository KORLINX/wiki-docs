import React from 'react';
import Link from '@docusaurus/Link';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import {GithubIcon, MoonIcon, SunIcon} from './Icons';

const navItems = [
  {label: 'PRODUCTS', to: '/docs/'},
  {label: 'GUIDES', to: '/docs/Network/'},
  {label: 'TUTORIALS', to: '/docs/Tutorials/Tutorials_Intro/'},
  {label: 'SUPPORT', to: '/docs/'},
  {label: 'RESOURCES', to: '/docs/'},
];

export default function Header() {
  const {colorMode, setColorMode} = useColorMode();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };
    const toggleMobileMenu = () => {
      setIsMenuOpen((value) => !value);
    };
  return (
    <header className={`navbar ${styles.siteHeader}`}>
      <Link to="/" className={styles.navLogo}>
        <img src="/img/logo-dark.svg" alt="Korlinx" />
      </Link>

      <nav className={styles.navMenu}>
        {navItems.map((item) => (
          <Link to={item.to} key={item.label}>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.navActions}>
        <a
          href="https://github.com/KORLINX/wiki-docs"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={styles.navIconButton}
        >
          <GithubIcon />
        </a>

        <button
          type="button"
          aria-label="Toggle theme"
          className={styles.navIconButton}
          onClick={toggleColorMode}
        >
          {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className={`${styles.navIconButton} ${styles.mobileMenuButton}`}
          onClick={toggleMobileMenu}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.navIcon}>
            <path
              fill="currentColor"
              d="M4 6.75A.75.75 0 0 1 4.75 6h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 6.75Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 12Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 17.25Z"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className={styles.mobileMenuPanel} aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link
              to={item.to}
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}

    </header>
  );
}