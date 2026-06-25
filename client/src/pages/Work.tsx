import Navigation from "@/components/Navigation";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";

/**
 * Work 페이지 - 포트폴리오 작업 갤러리
 * 
 * 디자인 철학:
 * - 비대칭 레이아웃으로 동적 느낌
 * - 작업별 제목과 설명으로 정보 전달
 * - 미니멀한 카드 디자인
 */

const defaultWorks = [
  {
    id: 1,
    title: "브랜드 모션 그래픽",
    category: "Motion Graphics",
    description: "기업 브랜드의 정체성을 표현하는 동적 모션 그래픽 시퀀스",
    year: 2024,
    client: "X",
    imageUrl: "",
  },
  {
    id: 2,
    title: "소셜 미디어 콘텐츠",
    category: "Social Media",
    description: "Instagram, YouTube를 위한 고임팩트 숏폼 콘텐츠 제작",
    year: 2024,
    client: "이세계아이돌",
    imageUrl: "",
  },
  {
    id: 3,
    title: "3D 애니메이션",
    category: "3D Animation",
    description: "Blender를 활용한 3D 모델링 및 애니메이션 프로젝트",
    year: 2023,
    client: "X",
    imageUrl: "",
  },
];

export default function Work() {
  const [, navigate] = useLocation();
  const { data: dbWorks = [] } = trpc.works.list.useQuery();
  
  // DB에 데이터가 있으면 사용, 없으면 기본값 사용
  const worksToDisplay = dbWorks.length > 0 ? dbWorks : defaultWorks;

  const handleWorkClick = (workId: number) => {
    navigate(`/work/${workId}`);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-black/60 mb-8">
              WORK
            </p>
            <div className="h-px bg-black/20 mb-16"></div>
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-none mb-6">
              포트폴리오
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl">
              다양한 프로젝트를 통해 창의성과 기술을 표현한 작업들입니다.
            </p>
          </div>
        </section>

        {/* Works Grid */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {worksToDisplay.map((work, index) => (
              <div
                key={work.id}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                onClick={() => handleWorkClick(work.id)}
              >
                <div className="mb-6 overflow-hidden rounded-lg bg-black/5 h-64 sm:h-72 md:h-80">
                  {work.imageUrl ? (
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-black/10 to-black/20 flex items-center justify-center">
                      <p className="text-black/40 font-medium">이미지 없음</p>
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 group-hover:opacity-60 transition-opacity">
                  {work.title}
                </h3>
                <p className="text-sm text-black/60 mb-4">{work.description || work.category}</p>
                <div className="flex justify-between items-center text-xs text-black/50">
                  <span>{work.client || work.year}</span>
                  <span className="text-black/40 group-hover:text-black/60 transition-colors">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="pt-16 border-t border-black/20">
            <p className="text-black/60 text-sm">
              © 2024 한튜리. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
