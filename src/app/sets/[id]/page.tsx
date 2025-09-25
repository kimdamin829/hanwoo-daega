"use client";
import { motion } from "framer-motion";
import { use } from "react";

interface Params {
  id: string;
}

const setData: Record<
  string,
  {
    title: string;
    desc: string;
    items: {
      name: string;
      desc: string;
      details: string[];
      img: string;
    }[];
  }
> = {
  "10": {
    title: "10만원 세트",
    desc: "안심 + 등심 + 갈비살 구성",
    items: [
      {
        name: "안심",
        desc: "한입마다 부드럽게 스며드는 최상급 안심",
        details: [
          "부위 위치: 소의 허리 안쪽, 갈비뼈 아래쪽 깊숙한 근육",
          "특징: 운동량이 적어 근섬유가 가늘고 부드러움",
          "맛: 담백하면서 은은한 풍미",
          "식감: 결이 거의 느껴지지 않을 만큼 부드럽게 녹아듦",
        ],
        img: "/images/tenderloin.jpeg",
      },
      {
        name: "등심",
        desc: "풍부한 육즙과 깊은 풍미의 등심",
        details: [
          "부위 위치: 소의 등 쪽, 안심 위쪽의 두툼한 근육",
          "특징: 근육 사이에 마블링이 풍부",
          "맛: 고소한 풍미와 진한 육향",
          "식감: 겉은 쫄깃, 속은 부드럽고 육즙이 가득",
        ],
        img: "/images/sirloin.jpg",
      },
      {
        name: "갈비살",
        desc: "쫄깃하면서도 담백한 갈비살",
        details: [
          "부위 위치: 갈비뼈 사이와 주변",
          "특징: 근육과 지방이 교차하며 독특한 결을 형성",
          "맛: 진하고 고소하며 불향과 잘 어울림",
          "식감: 쫄깃하면서 씹을수록 고소함이 배어남",
        ],
        img: "/images/rib.jpg",
      },
    ],
  },
};

export default function SetDetail({ params }: { params: Promise<Params> }) {
  const { id } = use(params);
  const data = setData[id];

  if (!data) {
    return <p className="text-center py-12">존재하지 않는 세트입니다.</p>;
  }

  return (
    <main className="bg-black text-white">
      {/* 인트로 섹션 */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-b from-[#fdfcf9] via-[#f8f5f0] to-[#fdfdfd] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
        >
          {/* 타이틀 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-widest text-[#c8a978] drop-shadow-sm mb-4 leading-snug">
            한우대가 <br className="block md:hidden" />
            <span className="font-semibold">프리미엄</span> 선물세트
          </h1>

          {/* 타이틀 밑에 긴 얇은 골드 라인 */}
          <div className="w-40 h-[1px] bg-gradient-to-r from-yellow-600 to-yellow-400 mx-auto mb-6"></div>

          {/* 서브 카피 */}
          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-700 leading-relaxed">
            소중한 분께 드리는 최고의 선택, <br />
            <span className="text-[#c8a978] font-semibold">
              총 1.2kg 프리미엄 패키지
            </span>
          </p>
        </motion.div>
      </section>

      {/* 고기 부위 섹션 */}
      {data.items.map((item, idx) => (
        <motion.section
          key={idx}
          className="relative w-full h-screen flex items-end justify-center overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }} // ✅ 순차 등장
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* 배경 사진 */}
          <img
            src={item.img}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* 텍스트 */}
          <motion.div
            className={`relative z-10 max-w-2xl px-8 py-6 mb-20 rounded-lg bg-black/30 shadow-lg
                  ${
                    idx % 2 === 0 ? "text-left md:ml-24" : "text-right md:mr-24"
                  }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 + 0.1 }} // ✅ 텍스트도 순차적
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4 
                     bg-gradient-to-r from-yellow-400 to-yellow-200 
                     bg-clip-text text-transparent drop-shadow-md"
            >
              {item.name}
            </h2>
            <p className="text-base md:text-lg text-gray-100 italic mb-4">
              {item.desc}
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl">
              {item.name === "안심" && (
                <>
                  소 한 마리에서 극소량만 얻을 수 있는 귀한 부위, 안심. <br />
                  결이 곱고 부드러워 입안에서 스르르 녹아내리듯 사라집니다.{" "}
                  <br />
                  담백하면서도 깊은 풍미로, 특별한 순간에 가장 잘 어울립니다.
                </>
              )}
              {item.name === "등심" && (
                <>
                  촉촉한 마블링이 살아 있는 등심. <br />
                  고소한 육즙과 진한 풍미가 조화를 이루며, <br />
                  누구와 함께해도 만족스러운 한 점을 선사합니다.
                </>
              )}
              {item.name === "갈비살" && (
                <>
                  불향과 함께 어우러지는 갈비살 특유의 매력. <br />
                  쫄깃하면서도 씹을수록 고소한 맛이 퍼져나가, <br />
                  숯불 위에서 더욱 빛나는 부위입니다.
                </>
              )}
            </p>
          </motion.div>
        </motion.section>
      ))}

      {/* 세트 전체 강조 섹션 */}
      <section className="relative w-full py-24 bg-gradient-to-b from-[#1f1f1f] via-[#2a2a2a] to-[#1f1f1f] text-center text-white">
        {/* 메인 타이틀 */}
        <h2
          className="text-3xl md:text-5xl font-serif font-bold mb-8 
                 bg-gradient-to-r from-yellow-400 to-yellow-200 
                 bg-clip-text text-transparent"
        >
          총 1.2kg 프리미엄 구성
        </h2>

        {/* 서브 카피 */}
        <p className="text-base md:text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          안심, 등심, 갈비살을 각각 400g씩 담아내어 <br />
          소중한 분께 드리기에 부족함 없는 풍성함을 자랑합니다.
        </p>

        {/* 구성 리스트 */}
        <div className="space-y-6 max-w-xl mx-auto text-left">
          <div className="flex items-start gap-4">
            <span className="text-yellow-400 font-bold text-xl">1.</span>
            <div>
              <h3 className="text-xl font-bold text-yellow-300">안심 400g</h3>
              <p className="text-gray-300 text-sm md:text-base">
                한 마리에서 극소량만 얻을 수 있는 귀한 부위. 결이 고와 부드럽게
                녹아내립니다.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-yellow-400 font-bold text-xl">2.</span>
            <div>
              <h3 className="text-xl font-bold text-yellow-300">등심 400g</h3>
              <p className="text-gray-300 text-sm md:text-base">
                촉촉한 마블링이 살아있는 인기 부위. 고소한 육즙과 풍부한 풍미가
                가득합니다.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-yellow-400 font-bold text-xl">3.</span>
            <div>
              <h3 className="text-xl font-bold text-yellow-300">갈비살 400g</h3>
              <p className="text-gray-300 text-sm md:text-base">
                쫄깃한 식감과 불향이 어우러진 별미. 씹을수록 고소한 맛이
                배어납니다.
              </p>
            </div>
          </div>
        </div>

        {/* 하단 카피 */}
        <p className="mt-12 text-lg md:text-xl text-yellow-200 font-semibold">
          한우대가 NO.9의 정성과 품격이 담긴 선물세트
        </p>
      </section>

      {/* 하단 섹션 */}
      <section className="relative w-full py-24 bg-gradient-to-b from-[#fdfcf9] via-[#f8f5f0] to-[#fdfdfd] text-center">
        {/* 메인 카피 */}
        <h2
          className="text-3xl md:text-5xl font-serif font-bold mb-6 
                 bg-gradient-to-r from-[#c8a978] via-[#d4af7a] to-[#b8926a] 
                 bg-clip-text text-transparent tracking-wide drop-shadow-md"
        >
          감사의 마음을 전하는 가장 세련된 방법
        </h2>

        {/* 서브 카피 */}
        <p className="text-base md:text-lg text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
          한우대가 선물세트로 소중한 순간을 더욱 특별하게. <br />
          명절, 기념일, 단체 주문에도 품격을 더하세요.
        </p>

        {/* 버튼 그룹 */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:061-763-1223"
            className="px-10 py-4 border border-[#c8a978] text-[#a87f5d] text-lg font-medium 
                 tracking-widest rounded-full shadow-sm
                 hover:bg-[#c8a978] hover:text-white transition-all duration-300"
          >
            📞 전화 문의
          </a>
          <a
            href="https://pf.kakao.com/XXXX"
            className="px-10 py-4 border border-[#c8a978] text-[#a87f5d] text-lg font-medium 
                 tracking-widest rounded-full shadow-sm
                 hover:bg-[#c8a978] hover:text-white transition-all duration-300"
          >
            💬 카카오톡 문의
          </a>
        </div>
      </section>
    </main>
  );
}
