import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import {GithubIcon, YouTubeIcon, LinkedInIcon, EmailIcon} from './Icons';

const footerColumns = [
  {
    title: 'PRODUCTS',
    links: [
      {label: 'Cellular', to: '/docs/Network/Cellular/Cellular_Intro'},
      {label: 'BLE', to: '/docs/Network/Bluetooth/Bluetooth_Intro'},
      {label: 'Gateway', to: '/docs/'},
    ],
  },
  {
    title: 'GUIDES',
    links: [
      {label: 'Common Guides', to: '/docs/'},
      {label: 'Tutorial', to: '/docs/'},
      {label: 'Example Code', to: '/docs/'},
      {label: 'Firmware & Tools', to: '/docs/'},
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      {label: 'FAQ', to: '/docs/'},
      {label: 'Troubleshooting', to: '/docs/'},
      {label: 'Contact Support', to: '/docs/'},
      {label: 'Inquiry', to: 'mailto:sales@samplepcb.co.kr'},
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      {label: 'Datasheets', to: '/docs/'},
      {label: 'Certifications', to: '/docs/'},
      {label: 'Release Notes', to: '/docs/'},
      {label: 'Downloads', to: '/docs/'},
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerBrand}>
        <img src="/img/logo.svg" alt="Korlinx" className={styles.footerLogo} />
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
                <li key={item.label}>
                  {item.to.startsWith('mailto:') ? (
                    <a href={item.to}>{item.label}</a>
                  ) : (
                    <Link to={item.to}>{item.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footerSocial}>
        <a href="https://github.com/KORLINX" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon />
        </a>
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube">
          <YouTubeIcon />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
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
  );
}