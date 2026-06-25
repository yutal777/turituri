import Navigation from "@/components/Navigation";

/**
 * Blog 페이지 - 블로그 포스트 목록
 * 
 * 디자인 철학:
 * - 미니멀한 카드 디자인
 * - 날짜, 제목, 요약으로 정보 구성
 * - 타이포그래피 계층으로 가독성 확보
 */

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "모션 그래픽 디자인의 기초",
    excerpt: "모션 그래픽의 핵심 원리와 실무에서 자주 사용되는 기법들을 소개합니다.",
    date: "2024년 6월 15일",
    category: "Design",
    readTime: "5분",
  },
  {
    id: 2,
    title: "After Effects 팁 & 트릭",
    excerpt: "생산성을 높이는 After Effects의 숨겨진 기능들과 단축키를 알아봅시다.",
    date: "2024년 6월 8일",
    category: "Tutorial",
    readTime: "7분",
  },
  {
    id: 3,
    title: "Blender로 시작하는 3D 애니메이션",
    excerpt: "3D 애니메이션 입문자를 위한 Blender 기본 가이드입니다.",
    date: "2024년 5월 30일",
    category: "3D",
    readTime: "8분",
  },
  {
    id: 4,
    title: "AI 도구를 활용한 디자인 워크플로우",
    excerpt: "인공지능 도구들이 디자인 프로세스를 어떻게 변화시키고 있는지 살펴봅니다.",
    date: "2024년 5월 20일",
    category: "Technology",
    readTime: "6분",
  },
  {
    id: 5,
    title: "소셜 미디어 콘텐츠 제작 가이드",
    excerpt: "Instagram, YouTube 등 플랫폼별 콘텐츠 제작 전략과 최적화 방법.",
    date: "2024년 5월 10일",
    category: "Social Media",
    readTime: "6분",
  },
  {
    id: 6,
    title: "색상 이론과 감정 표현",
    excerpt: "색상이 어떻게 시각적 감정을 전달하는지, 그리고 효과적인 색상 선택 방법.",
    date: "2024년 4월 28일",
    category: "Design",
    readTime: "5분",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-black/60 mb-8">
              BLOG
            </p>
            <div className="h-px bg-black/20 mb-16"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8">
            블로그
          </h1>

          <p className="text-base sm:text-lg text-black/70 max-w-2xl">
            디자인, 기술, 창의성에 관한 생각과 경험을 공유합니다.
          </p>
        </section>

        {/* Blog Posts */}
        <section className="max-w-4xl mx-auto px-8">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group pb-12 border-b border-black/10 hover:border-black/30 transition-colors duration-300 cursor-pointer"
              >
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs font-medium text-black/60">
                    {post.category}
                  </span>
                  <span className="text-xs font-medium text-black/40">•</span>
                  <span className="text-xs font-medium text-black/60">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h2>

                <p className="text-base text-black/70 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <p className="text-sm font-medium text-black/50">
                  {post.date}
                </p>
              </article>
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
