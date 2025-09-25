"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      className="py-12 bg-gray-100 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold mb-6">예약 / 단체 주문 문의</h2>
      <p className="mb-8 text-gray-700">
        개인 예약부터 단체 주문, 맞춤 견적까지 언제든 문의주세요.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="tel:061-763-1223" className="btn btn-red">
          📞 전화 문의
        </a>
        <a href="https://pf.kakao.com/XXXX" className="btn btn-yellow">
          💬 카카오톡 문의
        </a>
      </div>
    </motion.section>
  );
}
