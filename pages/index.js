import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <div className="text-black">
      <NextSeo
        title="Home: Genesis Ordinals"
        description="Genesis Ordinals"
        canonical="https://ordinals.science/"
        openGraph={{
          url: "https://ordinals.science",
        }}
      />
      <Head>
        <title>Genesis Ordinals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
