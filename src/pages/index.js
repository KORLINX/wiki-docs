import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomeSearch from '@site/src/components/KorlinxSearch/HomeSearch';


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

function BookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 7.95007V20.5501" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6001 12.4501H16.4001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6001 8.8501H16.4001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.9 17.8501C2.66131 17.8501 2.43239 17.7553 2.2636 17.5865C2.09482 17.4177 2 17.1888 2 16.9501V5.2501C2 5.0114 2.09482 4.78248 2.2636 4.6137C2.43239 4.44492 2.66131 4.3501 2.9 4.3501H7.4C8.35478 4.3501 9.27045 4.72938 9.94558 5.40451C10.6207 6.07964 11 6.99532 11 7.9501C11 6.99532 11.3793 6.07964 12.0544 5.40451C12.7295 4.72938 13.6452 4.3501 14.6 4.3501H19.1C19.3387 4.3501 19.5676 4.44492 19.7364 4.6137C19.9052 4.78248 20 5.0114 20 5.2501V16.9501C20 17.1888 19.9052 17.4177 19.7364 17.5865C19.5676 17.7553 19.3387 17.8501 19.1 17.8501H13.7C12.9839 17.8501 12.2972 18.1346 11.7908 18.6409C11.2845 19.1473 11 19.834 11 20.5501C11 19.834 10.7155 19.1473 10.2092 18.6409C9.70284 18.1346 9.01608 17.8501 8.3 17.8501H2.9Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5.6001 12.4501H7.4001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.6001 8.8501H7.4001" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function TroubleshootingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 11H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18 11H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 1V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 18V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 14C12.6569 14 14 12.6569 14 11C14 9.343₁5 ₁2.6569 8 ₁₁ 8C9.343₁5 8 8 9.343₁5 8 ₁₁C8 ₁2.6569 9.343₁5 ₁4 ₁₁ ₁4Z" stroke="white" strokeWidth="１.５" strokeLinecap="round" strokeLinejoin="round"/>
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


function DemoHomeContent() {

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        
        <div className={styles.heroContent}>
          <img src={ANNA_ASSETS.heroLogo} alt="Korlinx" className={styles.heroLogo} />

          <h1 className={styles.heroTitle}>Technical documentation for KORLINX products.</h1>

          <p className={styles.heroDescription}>
            Find manuals, setup guides, references, FAQs, and troubleshooting resources.
          </p>

          <HomeSearch />

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

    </main>
  );
}

export default function Home() {
  React.useEffect(() => {
    document.body.classList.add('korlinx-home-page');

    return () => {
      document.body.classList.remove('korlinx-home-page');
    };
  }, []);

  return (
    <Layout
      title="Korlinx Wiki"
      description="Technical documentation for KORLINX products."

    >
      <DemoHomeContent />
    </Layout>
  );
}