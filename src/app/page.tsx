import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import NaverMap from "@/components/NaverMap";

export default function Home() {
  return (
    <main className="font-sans bg-gradient-to-b from-[#f8f5f0] via-[#fdfcf9] to-white min-h-screen text-gray-900">
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

      {/* 소개 섹션 */}
      <AboutSection />

      {/* 선물세트 안내 */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#7b1113] tracking-widest">
          선물세트 안내
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* 세트 1 */}
          <Link href="/sets/10" className="card">
            {/* 사진 자리 */}
            <div className="card-image">
              <span className="text-gray-500">사진 자리</span>
            </div>

            {/* 텍스트 */}
            <div className="p-4 text-center">
              <h3 className="card-title">10만원 세트</h3>
              <p className="card-desc">구이용 + 국거리</p>
            </div>
          </Link>

          {/* 세트 2 */}
          <Link href="/sets/20" className="card">
            {/* 사진 자리 */}
            <div className="card-image">
              <span className="text-gray-500">사진 자리</span>
            </div>

            {/* 텍스트 */}
            <div className="p-4 text-center">
              <h3 className="card-title">20만원 세트</h3>
              <p className="card-desc">구이용 + 국거리</p>
            </div>
          </Link>

          {/* 세트 3 */}
          <Link href="/sets/30" className="card">
            {/* 사진 자리 */}
            <div className="card-image">
              <span className="text-gray-500">사진 자리</span>
            </div>

            {/* 텍스트 */}
            <div className="p-4 text-center">
              <h3 className="card-title">30만원 세트</h3>
              <p className="card-desc">구이용 + 국거리</p>
            </div>
          </Link>

          {/* 세트 4 */}
          <Link href="/sets/40" className="card">
            {/* 사진 자리 */}
            <div className="card-image">
              <span className="text-gray-500">사진 자리</span>
            </div>

            {/* 텍스트 */}
            <div className="p-4 text-center">
              <h3 className="card-title">40만원 세트</h3>
              <p className="card-desc">구이용 + 국거리</p>
            </div>
          </Link>

          {/* 세트 5 */}
          <Link href="/sets/50" className="card">
            {/* 사진 자리 */}
            <div className="card-image">
              <span className="text-gray-500">사진 자리</span>
            </div>

            {/* 텍스트 */}
            <div className="p-4 text-center">
              <h3 className="card-title">50만원 세트</h3>
              <p className="card-desc">구이용 + 국거리</p>
            </div>
          </Link>
        </div>
      </section>

      {/* 고객 리뷰 섹션 */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">소중한 고객님의 말씀</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {/* 리뷰 1 */}
          <div className="review-card">
            <div className="review-stars">{"★★★★★"}</div>
            <p className="review-text">
              "설 명절 선물로 드렸는데 가족들이 너무 좋아하셨어요. 고기도 정말
              부드럽고 신선했습니다!"
            </p>
            <p className="review-author">김민수 고객님</p>
          </div>

          {/* 리뷰 2 */}
          <div className="review-card">
            <div className="review-stars">{"★★★★★"}</div>
            <p className="review-text">
              "등심과 안심이 정말 최고였습니다. 손님 대접할 때 사용했는데 다들
              극찬했어요!"
            </p>
            <p className="review-author">이서연 고객님</p>
          </div>

          {/* 리뷰 3 */}
          <div className="review-card">
            <div className="review-stars">{"★★★★★"}</div>
            <p className="review-text">
              "고급스러운 포장부터 퀄리티까지 완벽했습니다. 믿고 재구매하고
              있습니다."
            </p>
            <p className="review-author">박준호 고객님</p>
          </div>
        </div>
      </section>

      {/* 예약 문의 */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-6">예약 / 단체 주문 문의</h2>
        <p className="mb-8 text-gray-700">
          개인 예약부터 단체 주문, 맞춤 견적까지 언제든 문의주세요.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:010-3941-1223" className="btn btn-red">
            📞 전화 문의
          </a>
          <a href="https://pf.kakao.com/XXXX" className="btn btn-yellow">
            💬 카카오톡 문의
          </a>
        </div>
      </section>

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
