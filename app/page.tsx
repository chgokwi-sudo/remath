import { Plus } from "lucide-react";

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
      <section className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 text-center max-w-2xl w-full flex flex-col items-center border border-gray-50/50">
        
        {/* 환영 문구 영역 */}
        <div className="inline-flex items-center rounded-full border border-gray-100 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500 mb-6">
          🎉 첫 번째 웹앱 세팅 완료!
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
          나만의 <span className="text-blue-500">교육용 웹앱</span> 만들기
        </h1>
        
        <p className="text-gray-500 mb-10 max-w-md mx-auto text-base leading-relaxed">
          선생님만의 특별한 아이디어를 이곳에 추가해 보세요.
          이 코드는 자유롭게 수정하고 확장할 수 있도록 만들어졌습니다.
        </p>

        {/* 기능 추가를 위한 가짜(Placeholder) 버튼 */}
        <button className="group flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 py-3 text-sm font-medium transition-all shadow-sm hover:shadow-md w-full sm:w-auto">
          <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
          <span>새로운 기능 추가하기</span>
        </button>
        
      </section>
    </div>
  );
}
