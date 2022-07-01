import React from "react";
import Head from "next/head";
import { PageTagsProps } from "types/tags";

const PageTags = ({ title, description, url }: PageTagsProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default PageTags;
