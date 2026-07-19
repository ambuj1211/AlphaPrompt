import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import Trending from "../../components/home/Trending";
// import Latest from "../../components/home/Latest";
import MostLiked from "../../components/home/MostLiked";
import AdBanner from "../../components/home/AdBanner";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative overflow-hidden">
        <Hero />

        <Categories />

        <Trending />

        {/* <Latest /> */}

        <MostLiked />

        <AdBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}