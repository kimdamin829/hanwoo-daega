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
    items: { name: string; desc: string; img: string }[];
  }
> = {
  "10": {
    title: "10만원 세트",
    desc: "안심 + 등심 + 갈비살 구성",
    items: [
      {
        name: "안심",
        desc: "한입마다 부드럽게 스며드는 최상급 안심",
        img: "/images/tenderloin.jpeg",
      },
      {
        name: "등심",
        desc: "풍부한 육즙과 깊은 풍미의 등심",
        img: "/images/sirloin.jpg",
      },
      {
        name: "갈비살",
        desc: "쫄깃하면서도 담백한 갈비살",
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
    <main className="bg-gradient-to-b from-[#1e1e1e] via-[#2a2a2a] to-[#3a2a2a] text-white">
      {/* 인트로 섹션 */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest mb-6">
            {data.title}
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed text-gray-200">
            {data.desc}
          </p>
        </motion.div>
      </section>

      {/* 고기 부위 섹션 */}
      {data.items.map((item, idx) => (
        <div key={idx}>
          {/* 섹션 전환용 그라데이션 */}
          <div className="h-0 bg-gradient-to-b from-transparent to-black" />

          <motion.section
            className="relative w-full h-screen flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* 배경 사진 */}
            <img
              src={item.img}
              alt={item.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/40" />
            {/* 텍스트 */}
            <motion.div
              className="relative z-10 text-center text-white px-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest drop-shadow-lg">
                {item.name}
              </h2>
              <p className="mt-4 text-lg md:text-xl italic max-w-xl mx-auto text-gray-200">
                {item.desc}
              </p>
            </motion.div>
          </motion.section>
        </div>
      ))}

      {/* 마무리 섹션 */}
      <section
        className="relative w-full h-screen flex flex-col items-center justify-center 
bg-gradient-to-b from-[#f8f5f0] via-[#faf8f5] to-[#fdfdfd] text-center px-6"
      >
        {/* 텍스트 */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-serif font-bold mb-6 text-[#2a2a2a] tracking-wide"
        >
          당신의 소중한 분께 드리는{" "}
          <span className="text-[#d4af37]">최고의 마음</span>
        </motion.h2>

        <p className="relative z-10 text-lg md:text-2xl max-w-2xl mx-auto text-gray-600 mb-12 leading-relaxed">
          한우대가 선물세트로 감사와 정성을 전하세요.
        </p>

        {/* 버튼 (심플 & 세련된) */}
        <div className="relative z-10">
          <a
            href="tel:010-1234-5678"
            className="px-10 py-4 border border-[#d4af37] text-[#2a2a2a] text-lg font-medium 
                 tracking-widest rounded-full shadow-sm hover:bg-[#d4af37] hover:text-white transition"
          >
            📞 예약 문의
          </a>
        </div>
      </section>
    </main>
  );
}
