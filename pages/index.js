import Head from "next/head";

import Navigation from "../components/nav";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Projects from "../components/projects";
import Footerstyles from "../styles/footer.module.css";
import Indexstyles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={Indexstyles.bgdark}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={Indexstyles.container}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>

      <footer className={Footerstyles.footer}></footer>
      <p>Hello</p>
    </div>
  );
}
