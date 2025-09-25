import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import GiftSetSection from "@/components/GiftSetSection";
import ReviewSection from "@/components/ReviewSection";
import ContactSection from "@/components/ContactSection";
import NaverMap from "@/components/NaverMap";

export default function Home() {
  return (
    <main className="font-sans bg-white min-h-screen text-gray-900">
      {/* Hero Section - 매장 전경 */}
      <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/store_outside.jpeg"
          alt="한우대가 매장 전경"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-extrabold tracking-widest">
            한우대가 NO.9
          </h1>
          <p className="mt-4 text-xl">
            정성을 다해, 최고급 한우만을 선별하여 드립니다
          </p>
        </div>
      </section>

      <AboutSection />
      <GiftSetSection />
      <ReviewSection />
      <ContactSection />

      {/* 매장 안내 */}
      <section className="py-12 text-center">
        <h2 className="text-2xl font-semibold mb-6">매장 안내</h2>
        <p className="mb-4">전남 광양시 광양읍 덕산4길 10 1층, 한우대가 NO.9</p>
        <NaverMap />
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p>© 2025 한우대가</p>
      </footer>
    </main>
  );
}
