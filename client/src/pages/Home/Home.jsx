import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/home/Hero";
import Categories from "../../components/home/Categories";
import Trending from "../../components/home/Trending";
import Latest from "../../components/home/Latest";
import MostLiked from "../../components/home/MostLiked";
import AdBanner from "../../components/home/AdBanner";
import Footer from "../../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-black text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        {/* Hero */}
        <Hero />

        {/* Categories */}
        <Categories />

        {/* Trending Prompts */}
        <Trending />

        {/* Latest Prompts */}
        <Latest />

        {/* Most Liked Prompts */}
        <MostLiked />

        {/* CTA / Advertisement */}
        <AdBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}