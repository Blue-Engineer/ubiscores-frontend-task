/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";

interface Props {
  title: string;
  children: React.ReactNode;
  description?: string;
}

const Meta = ({ title, description, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Metricks" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/vectors/logo.svg" sizes="32x32" />
        <link rel="icon" href="/vectors/logo.svg" sizes="192x192" />
        <link rel="apple-touch-icon" href="/vectors/logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <>{children}</>
    </>
  );
};

export default Meta;
