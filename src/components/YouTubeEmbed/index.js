import React from 'react';
import styles from './styles.module.css';

export default function YouTubeEmbed({videoId, title}) {
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <figure className={styles.videoFigure}>
      <div className={styles.videoFrame}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption>
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
