import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import Trending from "../../components/home/Trending/Trending";
import Latest from "../../components/home/Latest/Latest";
import MostLiked from "../../components/home/MostLiked/MostLiked";
import AdBanner from "../../components/home/AdBanner/AdBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Trending />
        <Latest />
        <MostLiked />
        <AdBanner />
      </main>
      <Footer />
    </>
  );
}
