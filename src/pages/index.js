import React, {useEffect} from 'react';
import Head from '@docusaurus/Head';

const DESTINATION = '/docs/Network/';

export default function HomeRedirect() {
  useEffect(() => {
    window.location.replace(DESTINATION);
  }, []);

  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0; url=${DESTINATION}`} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://wiki.korlinx.com/docs/Network/" />
      </Head>

      <main>
        <p>
          Redirecting to <a href={DESTINATION}>Network documentation</a>…
        </p>
      </main>
    </>
  );
}