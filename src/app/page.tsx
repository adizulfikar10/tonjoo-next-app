"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductsSection from "@/components/ProductsSection";
import CtaSection from "@/components/CtaSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import CategoryGrid from "@/components/CategoryGrid";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <CategoryGrid />
      <CtaSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
