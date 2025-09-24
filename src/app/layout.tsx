import "./globals.css";
import { Noto_Serif_KR } from "next/font/google";

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "한우대가",
  description: "프리미엄 한우 선물세트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoSerif.className}>{children}</body>
    </html>
  );
}
