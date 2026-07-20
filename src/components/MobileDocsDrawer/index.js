import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

const docsTree = [
  {
    label: 'Network',
    children: [
      {label: 'Network Overview', to: '/docs/Network/'},
      {label: 'Cellular', to: '/docs/Network/Cellular/Cellular_Intro'},
      {label: 'LPWAN', to: '/docs/Network/LPWAN/LPWAN_Intro'},
      {label: 'WiFi', to: '/docs/Network/WiFi/WiFi_Intro'},
      {label: 'Bluetooth', to: '/docs/Network/Bluetooth/Bluetooth_Intro'},
      {label: 'Ethernet', to: '/docs/Network/Ethernet/Ethernet_Intro'},
      {label: 'Satellite', to: '/docs/Network/Satellite/Satellite_Intro'},
    ],
  },
  {
    label: 'Cellular',
    children: [
      {
        label: 'KSE-91A',
        children: [
          {label: 'Overview', to: '/docs/Network/Cellular/KSE-91A/KSE-91A_Overview'},
          {label: 'Quick Start', to: '/docs/Network/Cellular/KSE-91A/KSE-91A_Quick_Start'},
          {label: 'Network Attach', to: '/docs/Network/Cellular/KSE-91A/KSE-91A_Network_Attach'},
          {label: 'Send Data', to: '/docs/Network/Cellular/KSE-91A/KSE-91A_Send_Data'},
          {label: 'FAQ', to: '/docs/Network/Cellular/KSE-91A/KSE-91A_FAQ'},
        ],
      },
      {
        label: 'KSP-N51U',
        children: [
          {label: 'Overview', to: '/docs/Network/Cellular/KSP-N51U/KSP-N51U_Overview'},
          {label: 'Quick Start', to: '/docs/Network/Cellular/KSP-N51U/KSP-N51U_Quick_Start'},
          {label: 'Network Attach', to: '/docs/Network/Cellular/KSP-N51U/KSP-N51U_Network_Attach'},
          {label: 'Send Data', to: '/docs/Network/Cellular/KSP-N51U/KSP-N51U_Send_Data'},
          {label: 'FAQ', to: '/docs/Network/Cellular/KSP-N51U/KSP-N51U_FAQ'},
        ],
      },
      {
        label: 'KSP-N51U-M.2',
        children: [
          {label: 'Overview', to: '/docs/Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Overview'},
          {label: 'Quick Start', to: '/docs/Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Quick_Start'},
          {label: 'Network Attach', to: '/docs/Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Network_Attach'},
          {label: 'Send Data', to: '/docs/Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_Send_Data'},
          {label: 'FAQ', to: '/docs/Network/Cellular/KSP-N51U-M.2/KSP-N51U-M.2_FAQ'},
        ],
      },
    ],
  },
  {
    label: 'Bluetooth',
    children: [
      {label: 'Bluetooth Intro', to: '/docs/Network/Bluetooth/Bluetooth_Intro'},
      {
        label: 'NX15 Series BLE Module',
        children: [
          {label: 'Overview', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Overview'},
          {label: 'Quick Start', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Quick_Start'},
          {label: 'Hardware Design', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Hardware_Design'},
          {label: 'Antenna Design', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Antenna_Design'},
          {label: 'Low Power Guide', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Low_Power_Guide'},
          {label: 'BLE Application Guide', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_BLE_Application_Guide'},
          {label: 'Thread / Matter Guide', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_Thread_Matter_Guide'},
          {label: 'FAQ', to: '/docs/Network/Bluetooth/NX15-Series-BLE-Module/NX15-Series-BLE-Module_FAQ'},
        ],
      },
      {
        label: 'NX15 Module Integration',
        children: [
          {label: 'Overview', to: '/docs/Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_Overview'},
          {label: 'Model Selection', to: '/docs/Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_Model_Selection'},
          {label: 'PCB Integration', to: '/docs/Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_PCB_Integration'},
          {label: 'LGA Pad Layout', to: '/docs/Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_LGA_Pad_Layout'},
          {label: 'Handling & Soldering', to: '/docs/Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_Handling_Soldering'},
          {label: 'FAQ', to: '/docs/Network/Bluetooth/NX15-Module-Integration/NX15-Module-Integration_FAQ'},
        ],
      },
    ],
  },
];

function normalizePath(path) {
  return path.replace(/\/$/, '');
}

function isActive(pathname, to) {
  return normalizePath(pathname) === normalizePath(to);
}

function hasActiveChild(node, pathname) {
  if (node.to && isActive(pathname, node.to)) {
    return true;
  }

  return node.children?.some((child) => hasActiveChild(child, pathname));
}

function DocsNode({node, pathname, closeDrawer, level = 0}) {
  if (node.children) {
  return (
    <details className={styles.docsGroup}>
      <summary className={styles.docsGroupSummary}>
        {node.label}
      </summary>

      <div className={styles.docsGroupChildren}>
        {node.children.map((child) => (
          <DocsNode
            key={child.label}
            node={child}
            pathname={pathname}
            closeDrawer={closeDrawer}
            level={level + 1}
          />
        ))}
      </div>
    </details>
    );
  }

  const active = isActive(pathname, node.to);

  return (
    <Link
      to={node.to}
      className={active ? styles.docsLinkActive : styles.docsLink}
      onClick={closeDrawer}
    >
      {node.label}
    </Link>
  );
}

export default function MobileDocsDrawer() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!open) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  return (
    <div className={styles.mobileDocsRoot}>
      <button
        type="button"
        className={styles.mobileDocsButton}
        onClick={() => setOpen(true)}
        aria-label="Open docs menu"
      >
        <span className={styles.mobileDocsButtonIcon}>☰</span>
        <span>Docs Menu</span>
      </button>

      {open && (
        <button
          type="button"
          className={styles.mobileDocsBackdrop}
          aria-label="Close docs menu"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`${styles.mobileDocsDrawer} ${
          open ? styles.mobileDocsDrawerOpen : ''
        }`}
      >
        <div className={styles.mobileDocsHeader}>
          <span>Korlinx Wiki</span>

          <button
            type="button"
            className={styles.mobileDocsClose}
            onClick={() => setOpen(false)}
            aria-label="Close docs menu"
          >
            ×
          </button>
        </div>

        <nav className={styles.mobileDocsNav}>
          {docsTree.map((node) => (
            <DocsNode
              key={node.label}
              node={node}
              pathname={location.pathname}
              closeDrawer={() => setOpen(false)}
            />
          ))}
        </nav>
      </aside>
    </div>
  );
}
