"use client";

import { motion } from "framer-motion";

export default function AnimatedSet({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: { name: string; desc: string; img: string }[];
}) {
  return (
    <main className="w-full">
      {/* 인트로 섹션 */}
      <section className="relative w-full h-screen flex items-center justify-center bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
            정성을 다해, 최고급 한우만을 선별하여 담았습니다.
          </p>
        </motion.div>
      </section>

      {/* 고기 사진들 */}
      {items.map((item, idx) => (
        <motion.section
          key={idx}
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: idx * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={item.img}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.div
            className="relative z-10 text-center text-white px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-extrabold tracking-widest drop-shadow-lg">
              {item.name}
            </h2>
            <p className="mt-6 text-xl italic">{item.desc}</p>
          </motion.div>
        </motion.section>
      ))}

      {/* 마무리 섹션 */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center bg-red-900 text-white px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          당신의 소중한 분께 드리는 최고의 마음
        </motion.h2>
        <p className="text-lg md:text-2xl text-center max-w-2xl mb-10">
          한우대가 선물세트로 감사와 정성을 전하세요.
        </p>
        <a
          href="tel:010-1234-5678"
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold shadow hover:bg-yellow-400 transition"
        >
          📞 지금 예약하기
        </a>
      </section>
    </main>
  );
}
