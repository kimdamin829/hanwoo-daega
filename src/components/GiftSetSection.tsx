"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const giftSets = [
  { price: 10, desc: "구이용 + 국거리", img: "/images/set_10.jpg" },
  { price: 20, desc: "구이용 + 국거리", img: "/images/set_20.jpg" },
  { price: 30, desc: "구이용 + 국거리", img: "/images/set_30.jpg" },
  { price: 40, desc: "구이용 + 국거리", img: "/images/set_40.jpg" },
  { price: 50, desc: "구이용 + 국거리", img: "/images/set_50.jpg" },
];

export default function GiftSetSection() {
  return (
    <section className="py-24 text-center bg-gradient-to-b from-[#e9dfd0] via-[#f1e9dd] to-white">
      <h2 className="text-3xl font-bold mb-16 text-[#7b1113] tracking-widest">
        선물세트 안내
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto px-4">
        {giftSets.map((set, i) => (
          <motion.div
            key={set.price}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <Link href={`/sets/${set.price}`} className="block">
              <div className="relative aspect-[4/3] rounded-md overflow-hidden">
                <img
                  src={set.img}
                  alt={`${set.price}만원 한우 선물세트`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="card-title">{set.price}만원 세트</h3>
                <p className="card-desc">{set.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
