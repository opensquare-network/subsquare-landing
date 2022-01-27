import styled from "styled-components";
import Head from "next/head";

import Header from "components/header";
import Overview from "components/overview";
import Partner from "components/partner";
import Feature from "components/feature";
import Advantage from "components/advantage";
import Footer from "components/footer";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  margin-top: 64px;
`;

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Subsquare</title>
        <meta name="description" content="Subsquare landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Main>
        <Overview />
        <Partner />
        <Feature />
        <Advantage />
      </Main>
      <Footer />
    </Layout>
  );
}
