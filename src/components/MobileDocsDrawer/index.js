import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';

import sidebars from '@site/sites/en/sidebars';
import styles from './styles.module.css';

function normalizePath(path = '') {
  const normalized = path.replace(/\/+$/, '');
  return normalized || '/';
}

function docIdToPath(id) {
  const normalizedId = id.replace(/\/index$/, '');

  return `/docs/${normalizedId}`;
}

function getDefaultLabel(item) {
  if (item.label) {
    return item.label;
  }

  if (item.id) {
    return item.id.split('/').pop().replaceAll('_', ' ');
  }

  return 'Untitled';
}

function getOverviewLabel(categoryLabel) {
  if (categoryLabel === 'Network') {
    return 'Network Overview';
  }

  return `${categoryLabel} Overview`;
}

function convertSidebarItem(item) {
  if (!item) {
    return null;
  }

  /*
   * Docusaurus cũng cho phép khai báo document bằng chuỗi ID.
   */
  if (typeof item === 'string') {
    return {
      label: item.split('/').pop().replaceAll('_', ' '),
      to: docIdToPath(item),
    };
  }

  /*
   * Document thông thường.
   */
  if (item.type === 'doc') {
    return {
      label: getDefaultLabel(item),
      to: docIdToPath(item.id),
    };
  }

  /*
   * Nhóm category.
   */
  if (item.type === 'category') {
    const children = (item.items || [])
      .map(convertSidebarItem)
      .filter(Boolean);

    const categoryDoc =
      item.link?.type === 'doc'
        ? {
            label: getOverviewLabel(item.label),
            to: docIdToPath(item.link.id),
          }
        : null;

    /*
     * Category không có mục con, ví dụ LPWAN, WiFi,
     * Ethernet và Satellite, sẽ hiển thị như link trực tiếp.
     */
    if (children.length === 0 && categoryDoc) {
      return {
        label: item.label,
        to: categoryDoc.to,
      };
    }

    return {
      label: item.label,
      defaultOpen: item.collapsed === false,
      children: [
        ...(categoryDoc ? [categoryDoc] : []),
        ...children,
      ],
    };
  }

  return null;
}

const docsTree = sidebars.networkSidebar
  .map(convertSidebarItem)
  .filter(Boolean);

function isActive(pathname, to) {
  return normalizePath(pathname) === normalizePath(to);
}

function hasActiveChild(node, pathname) {
  if (node.to && isActive(pathname, node.to)) {
    return true;
  }

  return Boolean(
    node.children?.some((child) => hasActiveChild(child, pathname)),
  );
}

function DocsNode({
  node,
  pathname,
  closeDrawer,
  nodeKey,
}) {
  if (node.children) {
    const shouldOpen =
      node.defaultOpen || hasActiveChild(node, pathname);

    return (
      <details
        className={styles.docsGroup}
        open={shouldOpen}
      >
        <summary className={styles.docsGroupSummary}>
          {node.label}
        </summary>

        <div className={styles.docsGroupChildren}>
          {node.children.map((child, index) => (
            <DocsNode
              key={`${nodeKey}-${child.label}-${index}`}
              nodeKey={`${nodeKey}-${child.label}-${index}`}
              node={child}
              pathname={pathname}
              closeDrawer={closeDrawer}
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
      className={
        active
          ? styles.docsLinkActive
          : styles.docsLink
      }
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
    if (!open) {
      return undefined;
    }

    const originalOverflow =
      document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        originalOverflow;

      window.removeEventListener(
        'keydown',
        handleKeyDown,
      );
    };
  }, [open]);

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <div className={styles.mobileDocsRoot}>
      <button
        type="button"
        className={styles.mobileDocsButton}
        onClick={() => setOpen(true)}
        aria-label="Open documentation menu"
        aria-expanded={open}
        aria-controls="mobile-docs-drawer"
      >
        <span
          className={styles.mobileDocsButtonIcon}
          aria-hidden="true"
        >
          ☰
        </span>

        <span>Docs Menu</span>
      </button>

      {open && (
        <button
          type="button"
          className={styles.mobileDocsBackdrop}
          aria-label="Close documentation menu"
          onClick={closeDrawer}
        />
      )}

      <aside
        id="mobile-docs-drawer"
        className={`${styles.mobileDocsDrawer} ${
          open ? styles.mobileDocsDrawerOpen : ''
        }`}
        aria-hidden={!open}
      >
        <div className={styles.mobileDocsHeader}>
          <span>Korlinx Wiki</span>

          <button
            type="button"
            className={styles.mobileDocsClose}
            onClick={closeDrawer}
            aria-label="Close documentation menu"
          >
            ×
          </button>
        </div>

        <nav
          className={styles.mobileDocsNav}
          aria-label="Documentation navigation"
        >
          {docsTree.map((node, index) => (
            <DocsNode
              key={`${node.label}-${index}`}
              nodeKey={`${node.label}-${index}`}
              node={node}
              pathname={location.pathname}
              closeDrawer={closeDrawer}
            />
          ))}
        </nav>
      </aside>
    </div>
  );
}