import React from "react";
import Giscus from "@giscus/react";
import styles from "./styles.module.css";

export default function DocItemLayout({children}) {
  const {metadata} = useDoc();

  const isFaqPage =
    metadata?.id?.endsWith('_FAQ') ||
    metadata?.permalink?.toLowerCase().includes('faq');

  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>

          <DocItemPaginator />

          {isFaqPage && <GiscusComments />}
        </div>
      </div>

      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
    </div>
  );
}