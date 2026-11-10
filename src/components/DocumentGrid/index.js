import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function DocumentIcon({title}) {
  const paths = /PCB Footprint|Schematic|Gerber/.test(title)
    ? <><rect x="3" y="3" width="18" height="18" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M6 3v4h6v2M3 12h6M15 12h6M12 15v6M15 6h3v3M6 16v2h3" /><circle cx="6" cy="12" r="1" /><circle cx="18" cy="12" r="1" /></>
    : title === 'BOM'
      ? <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18M9 3v18" /></>
    : title === '3D Model'
    ? <><path d="m12 3 9 5v8l-9 5-9-5V8l9-5Z" /><path d="m3 8 9 5 9-5M12 13v8M7.5 5.5l9 5" /></>
    : title === 'Product Datasheet'
      ? <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 12h8M8 16h8M8 19h4" /></>
      : title === 'User Manual'
        ? <><path d="M12 5v16M12 5C9 3 5 3 2 4v15c3-1 7-1 10 2 3-3 7-3 10-2V4c-3-1-7-1-10 1Z" /></>
        : /Certificat/.test(title)
          ? <><circle cx="12" cy="9" r="6" /><path d="m8 14-1 8 5-3 5 3-1-8M9.5 9l1.5 1.5 3.5-3.5" /></>
          : <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6M8 12h8M8 16h8" /></>;

  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {paths}
    </svg>
  );
}

function DocumentBlock({title, description, viewUrl, downloadUrl, index}) {
  const downloadHref = useBaseUrl(downloadUrl || '/');
  const viewHref = useBaseUrl(viewUrl || '/');
  const available = Boolean(viewUrl || downloadUrl);
  const format = downloadUrl?.split('.').pop().toUpperCase();

  return (
    <article className={styles.document}>
      <div className={styles.metadata}>
        <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
        <DocumentIcon title={title} />
      </div>
        <span className={available ? styles.available : styles.unavailable}>
          {available ? `${format || 'Document'} · Available` : 'Not available'}
        </span>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.actions}>
        {viewUrl && (
          <a className={styles.view} href={viewHref} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} (opens in a new tab)`}>
            View
          </a>
        )}
        {downloadUrl && (
          <a className={styles.download} href={downloadHref} download aria-label={`Download ${title}`}>
            Download
          </a>
        )}
        {!available && <span className={styles.notice}>File not yet available.</span>}
      </div>
    </article>
  );
}

export function DocumentIntro({
  productName = 'KSE-91A',
  technology = 'LTE-M / NB-IoT',
  image,
  imageAlt,
  imageVariant,
  description = 'An industrial cellular modem for sensors, controllers, and embedded systems.',
}) {
  const productImages = {
    'KSE-91A': '/img/KSE-91A-sty-flat.png',
    'KSP-N51U': '/img/KSP-N51U-sty-flat.png',
    'KSP-N51U-M.2': '/img/KSP-N51U-M2-sty-flat.png',
    NX15: '/img/bluetooth/nx15/series/nx15-module.png',
  };
  const imageSrc = image || productImages[productName];
  const imageHref = useBaseUrl(imageSrc || '/');
  return (
    <header className={styles.intro}>
      <div>
        <p className={styles.eyebrow}>{technology}</p>
        <h1>{productName}<span>Product documents</span></h1>
        <p className={styles.summary}>
          {description}{' '}
          Find the files you need for hardware integration, device setup, and certification.
        </p>
      </div>
      {imageSrc && (
        <div className={styles.productVisual}>
          <img
            className={`${styles.productImage} ${imageVariant === 'large' ? styles.productImageLarge : ''}`}
            src={imageHref}
            alt={imageAlt || `${productName} product`}
            decoding="async"
          />
        </div>
      )}
    </header>
  );
}

export default function DocumentGrid({documents, id = 'product-files', label = 'Product documents', heading = 'View & Downloads'}) {
  const availableDocuments = documents.filter(({viewUrl, downloadUrl}) => viewUrl || downloadUrl);
  return (
    <section id={id} className={styles.library} aria-label={label}>
      <div className={styles.libraryHeader}>
        <span>{heading}</span>
        <span>{availableDocuments.length} documents available</span>
      </div>
      <div className={styles.grid}>
        {availableDocuments.map((document, index) => <DocumentBlock key={document.title} {...document} index={index} />)}
      </div>
    </section>
  );
}
