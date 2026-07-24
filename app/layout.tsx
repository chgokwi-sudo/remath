import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GraduationCap } from "lucide-react"; // 추가 기능을 위한 아이콘 (lucide-react)

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "나만의 교육용 웹앱",
  description: "선생님을 위한 교육용 웹 서비스 뼈대 코드입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.className} h-full antialiased`}>
      {/* 
        [스타일 설명]
        bg-gray-50: 아주 연한 회색 배경으로 깔끔함을 강조
        text-gray-800: 너무 진하지 않은 짙은 차콜색 텍스트로 가독성 향상
        tracking-tight: 애플 스타일의 좁은 자간
      */}
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-800 tracking-tight">
        
        {/* 상단 헤더: 부드러운 그림자와 반투명 유리 효과 (Glassmorphism) 적용 */}
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* 로고 영역 */}
            <div className="flex items-center gap-2 text-gray-900 font-semibold text-lg cursor-pointer">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              <span>EduApp</span>
            </div>
            
            {/* 네비게이션 공간 (추가 기능 구현을 위한 뼈대) */}
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-500">
              <a href="#" className="hover:text-blue-500 transition-colors">홈</a>
              <a href="#" className="hover:text-blue-500 transition-colors">클래스</a>
              <a href="#" className="hover:text-blue-500 transition-colors">소개</a>
            </nav>
          </div>
        </header>

        {/* 메인 콘텐츠 영역: 하단 푸터를 밀어내기 위해 flex-1 사용 */}
        <main className="flex-1 w-full max-w-5xl mx-auto flex flex-col px-6 py-12">
          {children}
        </main>

        {/* 하단 푸터 */}
        <footer className="bg-white border-t border-gray-100 py-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} EduApp. All rights reserved.</p>
        </footer>
        
      </body>
    </html>
  );
}
