"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    text: "설 명절 선물로 드렸는데 가족들이 너무 좋아하셨어요. 고기도 정말 부드럽고 신선했습니다!",
    author: "김민수 고객님",
  },
  {
    text: "등심과 안심이 정말 최고였습니다. 손님 대접할 때 사용했는데 다들 극찬했어요!",
    author: "이서연 고객님",
  },
  {
    text: "고급스러운 포장부터 퀄리티까지 완벽했습니다. 믿고 재구매하고 있습니다.",
    author: "박준호 고객님",
  },
];

export default function ReviewSection() {
  return (
    <motion.section
      className="py-16 bg-white text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-10">소중한 고객님의 말씀</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            className="review-card p-6 bg-gray-50 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="review-stars text-yellow-500 mb-3">★★★★★</div>
            <p className="review-text mb-4 text-gray-700">"{review.text}"</p>
            <p className="review-author font-semibold">{review.author}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
