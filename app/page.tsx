import { Plus } from "lucide-react";
import QuadraticGraph from "@/components/QuadraticGraph";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full flex-1">
      {/* 
        [스타일 설명]
        bg-white: 완전 흰색 배경 카드
        rounded-2xl: 애플 스타일의 부드럽고 둥근 모서리
        shadow-lg: 은은하고 넓게 퍼지는 그림자 효과
        p-8 md:p-16: 모바일에서는 적당히(8), 태블릿 이상에서는 넓은(16) 여백 적용
      */}
      <section className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-12 text-center w-full flex flex-col items-center border border-gray-50/50">
        
        {/* 환영 문구 영역 */}
        <div className="inline-flex items-center rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500 mb-6">
          🎉 수학 교육 앱에 오신 것을 환영합니다!
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          <span className="text-blue-500">이차함수</span> 그래프 탐구
        </h1>
        
        <p className="text-gray-500 mb-10 max-w-lg mx-auto text-base leading-relaxed">
          아래 슬라이더를 움직여서 이차함수의 계수 $a, b, c$ 값이 그래프의 모양과 위치에 어떤 영향을 미치는지 실시간으로 확인해 보세요.
        </p>

        {/* 이차함수 그래프 컴포넌트 렌더링 */}
        <QuadraticGraph />
        
      </section>
    </div>
  );
}
