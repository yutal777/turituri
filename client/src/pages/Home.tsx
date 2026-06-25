import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";

/**
 * 홈 페이지 - 미니멀 모던 포트폴리오 스타일
 * 
 * 디자인 철학:
 * - 극단적 미니멀리즘: 순백 배경 + 검은 텍스트
 * - 타이포그래피 중심의 시각 계층
 * - 여백의 미학으로 세련된 분위기
 * - 섹션 번호와 수평선으로 명확한 구분
 */

export default function Home() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Section 001 - Intro */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="mb-12 animate-fade-in">
            <p className="text-xs font-medium tracking-widest text-black/60 mb-8">
              001
            </p>
            <div className="h-px bg-black/20 mb-16"></div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-8">
              HELLO,
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none">
              I'M 한튜리
            </h1>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            모션그래픽 디자이너로서 움직임과 시각의 조화를 통해 이야기를 전달합니다.
            Adobe After Effects, Photoshop, Illustrator, Blender, AI를 활용하여
            창의적인 디지털 콘텐츠를 제작합니다.
          </p>
        </section>

        {/* Section 002 - Specialization */}
        <section className="max-w-7xl mx-auto px-8 mb-24 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-black/60 mb-8">
              002
            </p>
            <div className="h-px bg-black/20 mb-16"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            <div>
              <h3 className="text-sm font-bold tracking-widest mb-6 text-black/80">
                SPECIALIZATION
              </h3>
              <div className="space-y-3">
                <p className="text-base font-medium">Motion Graphics</p>
                <p className="text-base font-medium">Visual Identity</p>
                <p className="text-base font-medium">3D Animation</p>
                <p className="text-base font-medium">UI/UX Design</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest mb-6 text-black/80">
                TOOLS
              </h3>
              <div className="space-y-3">
                <p className="text-base font-medium">Adobe After Effects</p>
                <p className="text-base font-medium">Photoshop</p>
                <p className="text-base font-medium">Illustrator</p>
                <p className="text-base font-medium">Blender</p>
                <p className="text-base font-medium">AI Tools</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-black/20">
            <p className="text-black/60 text-sm">
              © 2024 한튜리. All rights reserved.
            </p>
          </div>
        </section>
      </main>

      {/* Scroll Indicator */}
      {showScroll && (
        <div className="fixed bottom-8 right-8 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs font-medium tracking-widest text-black/60">
              SCROLL
            </p>
            <ChevronDown size={20} className="text-black/60" />
          </div>
        </div>
      )}
    </div>
  );
}
