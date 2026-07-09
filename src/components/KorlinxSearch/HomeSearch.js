import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import styles from './styles.module.css';

function SearchFallback() {
  return (
    <button type="button" className={styles.heroSearchBox}>
      <span>Try searching for what you use in KORLINX Wiki</span>

      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <line
          x1="20"
          y1="20"
          x2="16.5"
          y2="16.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}

export default function HomeSearch() {
  return (
    <div className={`${styles.heroSearch} korlinx-home-search`}>
      <BrowserOnly fallback={<SearchFallback />}>
        {() => {
          const SearchBar = require('@theme/SearchBar').default;
          return <SearchBar />;
        }}
      </BrowserOnly>
    </div>
  );
}
