"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center justify-center 
    bg-gradient-to-b from-[#fdfcf9] via-[#faf8f3] to-[#f8f5f0] px-6 pt-8 pb-16"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="mx-auto mb-12 h-[2px] w-64 bg-[#d4af37] origin-left"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-800 mb-10 leading-loose"
        >
          <span className="font-semibold text-[#2a2a2a]">한우대가 NO.9</span>은
          한우 등급 중 최고인{" "}
          <span className="font-semibold text-[#7b1113]">1++ (7·8·9)</span>{" "}
          등급, 그중에서도 <span className="font-semibold">최상위</span>를
          의미합니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-700 mb-10 leading-loose"
        >
          저희 한우대가는{" "}
          <span className="text-[#2a2a2a] font-medium">
            최고급 한우만을 고집하며
          </span>
          , 고객님께서{" "}
          <span className="text-[#2a2a2a] font-medium">합리적인 가격</span>으로
          최고의 품질을 즐기실 수 있도록 언제나 최선을 다하고 있습니다.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="italic text-xl text-[#444] leading-relaxed"
        >
          단 하나의 타협 없는 기준,{" "}
          <span className="text-[#d4af37] font-semibold">
            품격 있는 한우의 진수
          </span>{" "}
          를 전합니다.
        </motion.p>
      </div>
    </section>
  );
}
