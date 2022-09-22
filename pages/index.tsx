import type { NextPage } from "next";
import Head from "next/head";
import ProductPreviewCard from "../components/ProductPreviewCard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <title>Product Preview Card</title>
      </Head>
      <main className='bg-cream h-screen flex items-center justify-center text-base font-sans'>
        <ProductPreviewCard />
      </main>
    </>
  );
};

export default Home;
