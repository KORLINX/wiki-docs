import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function DemoHome() {

const productLines = [
  {
    title: 'Cellular',
    description: 'Documentation for Cellular products and development kits.',
    image: '/img/demo_homepage/img_cellular.png',
  },
  {
    title: 'LPWAN',
    description: 'Documentation for LPWAN products and development kits.',
    image: '/img/demo_homepage/img_gateway.png',
  },
  {
    title: 'WiFi',
    description: 'Documentation for WiFi products and development kits.',
    image: '/img/demo_homepage/img_ble.png',
  },
  {
    title: 'Bluetooth',
    description: 'Documentation for Bluetooth products and development kits.',
    image: '/img/demo_homepage/img_cellular.png',
  },
  {
    title: 'Ethernet',
    description: 'Documentation for Ethernet products and development kits.',
    image: '/img/demo_homepage/img_gateway.png',
  },
  {
    title: 'Satellite',
    description: 'Documentation for Satellite products and development kits.',
    image: '/img/demo_homepage/img_ble.png',
  },
];

const quickLinks = [
  {
    title: 'Quick Start Guide',
    description: 'Start here for first setup',
    icon: '/img/demo_homepage/ic_quickstart.svg',
  },
  {
    title: 'Hardware Guide',
    description: 'Start here for first setup',
    icon: '/img/demo_homepage/ic_hardware.svg',
  },
  {
    title: 'AT Commands',
    description: 'Start here for first setup',
    icon: '/img/demo_homepage/ic_atcommand.png',
  },
  {
    title: 'Firmware & Tools',
    description: 'Start here for first setup',
    icon: '/img/demo_homepage/ic_firmware.svg',
  },
  {
    title: 'FAQ',
    description: 'Start here for first setup',
    icon: '/img/demo_homepage/ic_faq_l.svg',
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

  return (
    <Layout title="Korlinx Wiki Demo">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.nav}>
            {/* <strong>KORLINX</strong>
            <span>PRODUCTS</span>
            <span>GUIDES</span>
            <span>TUTORIALS</span>
            <span>SUPPORT</span>
            <span>RESOURCES</span> */}
          </div>

          <div className={styles.heroContent}>
            <p style={{ fontSize: '24px' }}>
              DOCUMENTATION <strong>WIKI</strong>
            </p>
            {/* <h1>KORLINX</h1> */}
            <img
            src="/img/logo-dark.svg"
            alt="Korlinx"
            className={styles.heroLogo}
            />
            <h3>Technical documentation for KORLINX products.</h3>
            <p>Find manuals, setup guides, references, FAQs, and troubleshooting resources.</p>

            <div className={styles.searchBox}>
            <input
            type="text"
            placeholder="Try searching for what you use in KORLINX Wiki"
            className={styles.searchInput}
            />

            <button className={styles.searchButton}>
            <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <circle cx="11" cy="11" r="7"/>
                <line x1="20" y1="20" x2="16.5" y2="16.5"/>
            </svg>
            </button>

            </div>

            <div className={styles.news}>
              <b>News</b> NX40 Hardware Guide v1.0.0 has been released
            </div>
          </div>
        </section>

        <section className={styles.section}>
        <p className={styles.label}>DOCUMENTATION BY PRODUCT</p>
        <h2>Browse by Product Line</h2>
        <p>Find documentation and resources by product line.</p>

        <div className={styles.cardGrid}>
            {productLines.map((item) => (
            <article className={styles.productCard} key={item.title}>
                <div className={styles.productCardContent}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>View more →</span>
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
        </div>
        </section>

        <section className={styles.section}>
          <p className={styles.label}>QUICK ACCESS</p>
          <h2>Popular Documentation</h2>
          <p>Quick links to commonly used guides, references, tools, and FAQs.</p>

          <div className={styles.quickGrid}>
            {quickLinks.map((item) => (
                <div className={styles.quickCard} key={item.title}>
                <div className={styles.quickIconWrap}>
                    <img
                    src={item.icon}
                    alt={item.title}
                    className={styles.quickIcon}
                    />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                </div>
            ))}
            </div>
        </section>

        <section className={styles.demoFooter}>
  <div className={styles.footerBrand}>
    <img
      src="/img/logo.svg"
      alt="Korlinx"
      className={styles.footerLogo}
    />
    <p className={styles.footerTagline}>
      Industrial IoT connectivity solution for a smarter tomorrow.
    </p>
  </div>

  <div className={styles.footerDivider}></div>

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
    <a href="https://github.com/KORLINX" target="_blank" rel="noreferrer" aria-label="GitHub">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.01-.02-1.98-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.04 1.77 2.72 1.26 3.38.97.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.18-1.48 3.14-1.17 3.14-1.17.63 1.56.24 2.72.12 3.01.73.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.38-5.25 5.66.41.35.78 1.04.78 2.1 0 1.52-.02 2.75-.02 3.13 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    </a>

    <a href="/" aria-label="YouTube">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/>
      </svg>
    </a>

    <a href="/" aria-label="LinkedIn">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM2.75 9.75h4.5v11.5h-4.5V9.75Zm7.25 0h4.31v1.57h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 2.99 5.39 6.88v5.39h-4.5v-4.77c0-1.14-.02-2.6-1.58-2.6-1.58 0-1.82 1.24-1.82 2.52v4.85h-4.5V9.75Z"/>
      </svg>
    </a>

    <a href="mailto:sales@korlinx.com" aria-label="Email">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.2-.5L12 10.6 19.8 5H4.2Zm15.8 2.1-7.4 5.3a1 1 0 0 1-1.2 0L4 7.1v11.4c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V7.1Z"/>
      </svg>
    </a>
  </div>

  <p className={styles.footerCopyright}>
    Copyright © 2026 KORLINX. Built with Docusaurus.
  </p>
</section>

      </main>
    </Layout>
  );
}