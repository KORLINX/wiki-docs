import React from "react";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <Giscus
      repo="KORLINX/wiki-docs"
      repoId="R_kgDOSwvDqQ"
      category="Documentation Comments"
      categoryId="DIC_kwDOSwvDqc4C-ioJ"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
    />
  );
}