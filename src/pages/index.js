import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const TECH_CATEGORIES = [
  {
    title: 'Cellular',
    icon: '📡',
    description: 'LTE-M, NB-IoT, LTE Cat-1, and 5G modules for wide-area IoT connectivity over licensed spectrum.',
    link: '/docs/Network/Cellular/Cellular_Intro',
    tags: ['LTE-M', 'NB-IoT', '5G'],
  },
  {
    title: 'LPWAN',
    icon: '🔗',
    description: 'Low-power wide-area networking with LoRaWAN, Sigfox, and Zigbee for battery-powered sensors.',
    link: '/docs/Network/LPWAN/LPWAN_Intro',
    tags: ['LoRaWAN', 'Sigfox', 'Zigbee'],
  },
  {
    title: 'WiFi',
    icon: '📶',
    description: 'WiFi 4/5/6 and long-range WiFi HaLow modules for high-throughput local connectivity.',
    link: '/docs/Network/WiFi/WiFi_Intro',
    tags: ['WiFi 6', 'WiFi HaLow', 'WPA3'],
  },
  {
    title: 'Bluetooth',
    icon: '🔵',
    description: 'BLE 5.x and Bluetooth Mesh for low-power short-range sensor networks and device links.',
    link: '/docs/Network/Bluetooth/Bluetooth_Intro',
    tags: ['BLE 5.x', 'Mesh', 'Beacon'],
  },
  {
    title: 'Ethernet',
    icon: '🔌',
    description: 'Industrial Ethernet and PoE solutions for reliable wired IoT infrastructure.',
    link: '/docs/Network/Ethernet/Ethernet_Intro',
    tags: ['Industrial', 'PoE', 'Modbus TCP'],
  },
  {
    title: 'Satellite',
    icon: '🛰️',
    description: 'LEO and GEO satellite connectivity for remote and off-grid IoT deployments.',
    link: '/docs/Network/Satellite/Satellite_Intro',
    tags: ['LEO', 'GEO', 'Global'],
  },
];

function TechCard({ title, icon, description, link, tags }) {
  return (
    <Link to={link} className={styles.techCard}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <h3 className={styles.cardTitle}>{title}</h3>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardTags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.cardTag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
}

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>KORLINX</h1>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Comprehensive documentation for KORLINX IoT networking products.
            Find product guides, quick starts, AT command references, and tutorials.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx('button button--primary button--lg', styles.heroBtn)}
              to="/docs/Network/"
            >
              Browse Products
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.heroBtnOutline)}
              to="/docs/Tutorials/Tutorials_Intro"
            >
              Tutorials
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function BrowseByTech() {
  return (
    <section className={styles.browseSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Browse by Technology</h2>
          <p className={styles.sectionSubtitle}>
            Find documentation for your IoT connectivity technology
          </p>
        </div>
        <div className={styles.techGrid}>
          {TECH_CATEGORIES.map((cat) => (
            <TechCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      description="Comprehensive documentation for KORLINX IoT networking products"
    >
      <Hero />
      <main>
        <BrowseByTech />
      </main>
    </Layout>
  );
}