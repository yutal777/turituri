import Navigation from "@/components/Navigation";

/**
 * Work 페이지 - 포트폴리오 작업 갤러리
 * 
 * 디자인 철학:
 * - 비대칭 레이아웃으로 동적 느낌
 * - 작업별 제목과 설명으로 정보 전달
 * - 미니멀한 카드 디자인
 */

interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
}

const workItems: WorkItem[] = [
  {
    id: 1,
    title: "브랜드 모션 그래픽",
    category: "Motion Graphics",
    description: "기업 브랜드의 정체성을 표현하는 동적 모션 그래픽 시퀀스",
    year: "2024",
  },
  {
    id: 2,
    title: "소셜 미디어 콘텐츠",
    category: "Social Media",
    description: "Instagram, YouTube를 위한 고임팩트 숏폼 콘텐츠 제작",
    year: "2024",
  },
  {
    id: 3,
    title: "3D 애니메이션",
    category: "3D Animation",
    description: "Blender를 활용한 3D 모델링 및 애니메이션 프로젝트",
    year: "2023",
  },
  {
    id: 4,
    title: "UI/UX 애니메이션",
    category: "UI Animation",
    description: "웹 및 모바일 애플리케이션의 인터랙티브 애니메이션",
    year: "2023",
  },
  {
    id: 5,
    title: "광고 영상",
    category: "Commercial",
    description: "제품 및 서비스 홍보를 위한 고품질 광고 영상",
    year: "2023",
  },
  {
    id: 6,
    title: "뮤직 비디오",
    category: "Music Video",
    description: "음악과 시각의 완벽한 조화를 이루는 뮤직 비디오",
    year: "2022",
  },
];

export default function Work() {
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

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8">
            포트폴리오
          </h1>

          <p className="text-base sm:text-lg text-black/70 max-w-2xl">
            다양한 프로젝트를 통해 창의성과 기술을 표현한 작업들입니다.
          </p>
        </section>

        {/* Work Grid */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="space-y-12">
            {workItems.map((item, index) => (
              <div
                key={item.id}
                className="group pb-12 border-b border-black/10 hover:border-black/30 transition-colors duration-300"
              >
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
                  {/* Left - Number & Category */}
                  <div>
                    <p className="text-xs font-medium tracking-widest text-black/60 mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-sm font-medium text-black/70">
                      {item.category}
                    </p>
                  </div>

                  {/* Center - Title & Description */}
                  <div className="md:col-span-2">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:opacity-70 transition-opacity">
                      {item.title}
                    </h3>
                    <p className="text-base text-black/70 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <p className="text-sm font-medium text-black/60">
                      {item.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-7xl mx-auto px-8 mt-24">
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
