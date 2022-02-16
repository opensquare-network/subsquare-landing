import styled from "styled-components";
import Head from "next/head";

import Header from "components/header";
import Overview from "components/overview";
import Partner from "components/partner";
import Feature from "components/feature";
import Advantage from "components/advantage";
import Explore from "components/explore";
import Footer from "components/footer";
import Preload from "components/preload";
import { NextSeo } from 'next-seo';

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  z-index: 1;
  flex-grow: 1;
  margin-top: 64px;
`;

export default function Home() {
  const defaultSeoInfo = {
    title:`SubSquare | Empower the Governance of substrate`,
    description:`A platform that scans and normalizes the blockchain governance data. It enables community members to propose, vote proposals and discuss the corresponding topics.`,
  };
  const seoInfo = {
    ...defaultSeoInfo,
    openGraph: {
      ...defaultSeoInfo,
      images: [
        {
          url: 'https://ipfs.fleek.co/ipfs/bafybeif4ru2wovqtt4adq7xkhfcrcvdvbckfd36vrxhngct2z5cntobel4',
          width: 1200,
          height: 628,
          alt: 'Og Image Alt',
          type: 'image/png',
        },
      ],
    },
    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    }
  }

  return (
    <>
      <NextSeo
        {...seoInfo}
      />
      <Preload />
      <Layout>
        <Head>
          <title>Subsquare</title>
          <meta name="thumbnail" content="https://ipfs.fleek.co/ipfs/bafybeie7dlklmnv5uioexc5erpli3kowir65chm66khtjkw2h46cil7w7q" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Main>
          <Overview />
          <Partner />
          <Feature />
          <Advantage />
          <Explore />
        </Main>
        <Footer />
      </Layout>
    </>
  );
}
