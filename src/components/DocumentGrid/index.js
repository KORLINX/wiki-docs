import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function getDocumentType(title, downloadUrl) {
  if (/KiCad/i.test(title)) return 'KiCad';
  if (/Altium/i.test(title)) return 'Altium';
  return downloadUrl?.split(/[?#]/)[0].split('.').pop()?.toUpperCase() || 'Document';
}

function DocumentBlock({title, description, viewUrl, downloadUrl}) {
  const downloadHref = useBaseUrl(downloadUrl || '/');
  const viewHref = useBaseUrl(viewUrl || '/');
  const available = Boolean(viewUrl || downloadUrl);
  const documentType = getDocumentType(title, downloadUrl);
  const displayTitle = title.replace(/\s*[—-]\s*(KiCad|Altium)\s*$/i, '');

  return (
    <article className={styles.document}>
      <div className={styles.documentContent}>
        <span className={available ? styles.available : styles.unavailable}>
          {available ? documentType : 'Not available'}
        </span>
        <h2>{displayTitle}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
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
        {availableDocuments.map((document) => <DocumentBlock key={document.title} {...document} />)}
      </div>
    </section>
  );
}
