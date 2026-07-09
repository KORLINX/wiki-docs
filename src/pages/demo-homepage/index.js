import React from 'react';
import Layout from '@theme/Layout';
import SearchBar from '@theme/SearchBar';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './styles.module.css';

const ANNA_ASSETS = {
  logoNav: '/img/logo-dark.svg',
  logoFooter: '/img/logo.svg',
  heroLogo: '/img/demo_homepage/img_herologo.svg',

  productCellular: '/img/demo_homepage/anna/product_cellular.png',
  productBle: '/img/demo_homepage/anna/product_ble.png',
  productGateway: '/img/demo_homepage/anna/product_gateway.png',

  quickStart: '/img/demo_homepage/ic_quickstart.svg',
  hardware: '/img/demo_homepage/ic_hardware.svg',
  atCommand: '/img/demo_homepage/ic_atcommand.png',
  firmware: '/img/demo_homepage/ic_firmware.svg',
  faq: '/img/demo_homepage/ic_faq_l.svg',
};

const navItems = ['PRODUCTS', 'GUIDES', 'TUTORIALS', 'SUPPORT', 'RESOURCES'];

const productLines = [
  {
    title: 'Cellular',
    description:
      'Industrial LTE-M modems and modules for reliable cellular IoT connectivity.',
    image: ANNA_ASSETS.productCellular,
  },
  {
    title: 'BLE',
    description: 'Documentation for BLE modules and development kits.',
    image: ANNA_ASSETS.productBle,
  },
  {
    title: 'Gateway',
    description:
      'Gateway devices for data collection, processing, and cloud integration.',
    image: ANNA_ASSETS.productGateway,
  },
];

const quickLinks = [
  {
    title: 'Quick Start Guide',
    description: 'Start here for first setup',
    icon: ANNA_ASSETS.quickStart,
  },
  {
    title: 'Hardware Guide',
    description: 'Start here for first setup',
    icon: ANNA_ASSETS.hardware,
  },
  {
    title: 'AT Commands Reference',
    description: 'Start here for first setup',
    icon: ANNA_ASSETS.atCommand,
  },
  {
    title: 'Firmware & Tools',
    description: 'Start here for first setup',
    icon: ANNA_ASSETS.firmware,
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions',
    icon: ANNA_ASSETS.faq,
  },
];

const footerColumns = [
  {
    title: 'PRODUCTS',
    links: ['Cellular', 'BLE', 'Gateway'],
  },
  {
    title: 'GUIDES',
    links: ['Common Guides', 'Tutorial', 'Example Code', 'Firmware & Tools'],
  },
  {
    title: 'SUPPORT',
    links: ['FAQ', 'Troubleshooting', 'Contact Support', 'Inquiry'],
  },
  {
    title: 'RESOURCES',
    links: ['Datasheets', 'Certifications', 'Release Notes', 'Downloads'],
  },
];

const supportCards = [
  {
    title: 'Common Guides',
    description:
      'Shared technical resources that apply across multiple products and use cases.',
    links: ['Hardware Guide', 'Software Setup', 'Firmware & Tools'],
    icon: 'book',
  },
  {
    title: 'Troubleshooting',
    description:
      'Find solutions to common issues and learn how to resolve problems quickly.',
    links: ['Connection Issues', 'Firmware Issues', 'Device Issues'],
    icon: 'target',
  },
  {
    title: 'FAQ',
    description:
      'Frequently asked questions about product usage and technical topics.',
    links: ['General FAQ', 'Product FAQ', 'AT Command FAQ'],
    icon: 'faq',
  },
];
function SupportIcon({type}) {
  if (type === 'target') {
    return <TroubleshootingIcon />;
  }

  if (type === 'faq') {
    return <FaqIcon />;
  }

  return <BookIcon />;
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.navIcon}>
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.18 1.18a11.1 11.1 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.navIcon}>
      <path
        fill="currentColor"
        d="M21.64 13.65A9 9 0 0 1 10.35 2.36a.75.75 0 0 0-.83-.99A10.5 10.5 0 1 0 22.63 14.48a.75.75 0 0 0-.99-.83Z"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.navIcon}>
      <path
        fill="currentColor"
        d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10ZM12 1.75a.75.75 0 0 1 .75.75v1.2a.75.75 0 0 1-1.5 0V2.5a.75.75 0 0 1 .75-.75ZM12 19.55a.75.75 0 0 1 .75.75v1.2a.75.75 0 0 1-1.5 0v-1.2a.75.75 0 0 1 .75-.75ZM22.25 12a.75.75 0 0 1-.75.75h-1.2a.75.75 0 0 1 0-1.5h1.2a.75.75 0 0 1 .75.75ZM4.45 12a.75.75 0 0 1-.75.75H2.5a.75.75 0 0 1 0-1.5h1.2a.75.75 0 0 1 .75.75ZM19.25 4.75a.75.75 0 0 1 0 1.06l-.85.85a.75.75 0 1 1-1.06-1.06l.85-.85a.75.75 0 0 1 1.06 0ZM6.66 17.34a.75.75 0 0 1 0 1.06l-.85.85a.75.75 0 0 1-1.06-1.06l.85-.85a.75.75 0 0 1 1.06 0ZM19.25 19.25a.75.75 0 0 1-1.06 0l-.85-.85a.75.75 0 0 1 1.06-1.06l.85.85a.75.75 0 0 1 0 1.06ZM6.66 6.66a.75.75 0 0 1-1.06 0l-.85-.85A.75.75 0 0 1 5.81 4.75l.85.85a.75.75 0 0 1 0 1.06Z"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7.95007V20.5501" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.6001 12.4501H16.4001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14.6001 8.8501H16.4001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2.9 17.8501C2.66131 17.8501 2.43239 17.7553 2.2636 17.5865C2.09482 17.4177 2 17.1888 2 16.9501V5.2501C2 5.0114 2.09482 4.78248 2.2636 4.6137C2.43239 4.44492 2.66131 4.3501 2.9 4.3501H7.4C8.35478 4.3501 9.27045 4.72938 9.94558 5.40451C10.6207 6.07964 11 6.99532 11 7.9501C11 6.99532 11.3793 6.07964 12.0544 5.40451C12.7295 4.72938 13.6452 4.3501 14.6 4.3501H19.1C19.3387 4.3501 19.5676 4.44492 19.7364 4.6137C19.9052 4.78248 20 5.0114 20 5.2501V16.9501C20 17.1888 19.9052 17.4177 19.7364 17.5865C19.5676 17.7553 19.3387 17.8501 19.1 17.8501H13.7C12.9839 17.8501 12.2972 18.1346 11.7908 18.6409C11.2845 19.1473 11 19.834 11 20.5501C11 19.834 10.7155 19.1473 10.2092 18.6409C9.70284 18.1346 9.01608 17.8501 8.3 17.8501H2.9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.6001 12.4501H7.4001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.6001 8.8501H7.4001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

function TroubleshootingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M18 11H21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 1V4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 18V21" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

function FaqIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.63159 8.31812C8.82261 7.79088 9.19965 7.3463 9.69592 7.06311C10.1922 6.77992 10.7757 6.6764 11.343 6.77089C11.9104 6.86537 12.425 7.15177 12.7957 7.57935C13.1664 8.00693 13.3693 8.5481 13.3684 9.107C13.3684 10.6848 10.9309 11.4737 10.9309 11.4737" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11 15.2632H10.9053" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.footerIcon}>
      <path
        fill="currentColor"
        d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2A31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.footerIcon}>
      <path
        fill="currentColor"
        d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46A2.48 2.48 0 0 0 4.98 3.5ZM2.75 9.75h4.5v11.5h-4.5V9.75Zm7.25 0h4.31v1.57h.06c.6-1.14 2.07-2.34 4.26-2.34c4.55 0 5.39 2.99 5.39 6.88v5.39h-4.5v-4.77c0-1.14-.02-2.6-1.58-2.6c-1.58 0-1.82 1.24-1.82 2.52v4.85h-4.5V9.75Z"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.footerIcon}>
      <path
        fill="currentColor"
        d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2-.5L12 10.6L19.8 5H4.2Zm15.8 2.1l-7.4 5.3a1 1 0 0 1-1.2 0L4 7.1v11.4c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.1Z"
      />
    </svg>
  );
}

function DemoHomeContent() {
  const {colorMode, setColorMode} = useColorMode();

  React.useEffect(() => {
    const placeholderText = 'Try searching for what you use in KORLINX Wiki';

    const updateSearchPlaceholder = () => {
      const input = document.querySelector(
        '.demo-hero-search .navbar__search-input'
      );

      if (input) {
        input.setAttribute('placeholder', placeholderText);
      }

      const docSearchPlaceholder = document.querySelector(
        '.demo-hero-search .DocSearch-Button-Placeholder'
      );

      if (docSearchPlaceholder) {
        docSearchPlaceholder.textContent = placeholderText;
      }
    };

    updateSearchPlaceholder();

    const timer = setTimeout(updateSearchPlaceholder, 300);

    const observer = new MutationObserver(updateSearchPlaceholder);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <nav className={styles.demoNavbar}>
          <a href="/" className={styles.navLogo}>
            <img src={ANNA_ASSETS.logoNav} alt="Korlinx" />
          </a>

          <div className={styles.navMenu}>
            {navItems.map((item) => (
              <a href="/" key={item}>
                {item}
              </a>
            ))}
          </div>

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
          </div>
        </nav>

        <div className={styles.heroContent}>
          <img src={ANNA_ASSETS.heroLogo} alt="Korlinx" className={styles.heroLogo} />

          <h1 className={styles.heroTitle}>Technical documentation for KORLINX products.</h1>

          <p className={styles.heroDescription}>
            Find manuals, setup guides, references, FAQs, and troubleshooting resources.
          </p>

          <div className={`${styles.heroSearch} demo-hero-search`}>
            <SearchBar />
          </div>

          <div className={styles.news}>
            <b>News</b>
            <span>NX40 Hardware Guide v1.0.0 has been released</span>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.label}>DOCUMENTATION BY PRODUCT</p>
          <h2>Browse by Product Line</h2>
          <p>Find documentation and resources by product line.</p>
        </div>

        <div className={styles.cardGrid}>
          {productLines.map((item) => (
            <article className={styles.productCard} key={item.title}>
              <div className={styles.productCardContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="/">View more →</a>
              </div>

              <div className={styles.productImageArea}>
                <img
                  src={item.image}
                  alt={`${item.title} product documentation`}
                  className={styles.productImage}
                />
              </div>
            </article>
          ))}

          {supportCards.map((item) => (
            <article className={styles.infoCard} key={item.title}>
              <div className={styles.infoCardHeader}>
                <div className={styles.infoCardIcon}>
                  <SupportIcon type={item.icon} />
                </div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className={styles.infoCardDivider} />

              <ul className={styles.infoCardLinks}>
                {item.links.map((link) => (
                  <li key={link}>
                    <a href="/">{link} →</a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <p className={styles.label}>QUICK ACCESS</p>
          <h2>Popular Documentation</h2>
          <p>Quick links to commonly used guides, references, tools, and FAQs.</p>
        </div>

        <div className={styles.quickGrid}>
          {quickLinks.map((item) => (
            <a href="/" className={styles.quickCard} key={item.title}>
              <div className={styles.quickIconWrap}>
                <img src={item.icon} alt="" className={styles.quickIcon} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <footer className={styles.demoFooter}>
        <div className={styles.footerBrand}>
          <img src={ANNA_ASSETS.logoFooter} alt="Korlinx" className={styles.footerLogo} />
          <p className={styles.footerTagline}>
            Industrial IoT connectivity solution for a smarter tomorrow.
          </p>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerGrid}>
          {footerColumns.map((group) => (
            <div className={styles.footerColumn} key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((item) => (
                  <li key={item}>
                    <a href="/">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.footerSocial}>
          <a
            href="https://github.com/KORLINX"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <YouTubeIcon />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a href="mailto:sales@samplepcb.co.kr" aria-label="Email">
            <EmailIcon />
          </a>
        </div>

        <p className={styles.footerCopyright}>
          Copyright © 2026 KORLINX. Built with Docusaurus.
        </p>
      </footer>
    </main>
  );
}

export default function DemoHome() {
  React.useEffect(() => {
    document.body.classList.add('demo-home-page');

    return () => {
      document.body.classList.remove('demo-home-page');
    };
  }, []);

  return (
    <Layout
      title="Korlinx Wiki Demo"
      description="Technical documentation for KORLINX products."
      wrapperClassName={styles.demoLayout}
    >
      <DemoHomeContent />
    </Layout>
  );
}