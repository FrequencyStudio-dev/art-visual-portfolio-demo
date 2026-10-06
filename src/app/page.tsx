import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import SelectedWork from "@/components/portfolio/SelectedWork";
import About from "@/components/portfolio/About";
import Services from "@/components/portfolio/Services";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}