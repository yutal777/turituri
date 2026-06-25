import Navigation from "@/components/Navigation";

/**
 * About 페이지 - 디자이너 소개
 * 
 * 디자인 철학:
 * - 미니멀 레이아웃으로 정보 전달
 * - 타이포그래피 계층으로 가독성 확보
 * - 충분한 여백으로 호흡감 있는 구성
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20">
        {/* Header */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="mb-12">
            <p className="text-xs font-medium tracking-widest text-black/60 mb-8">
              ABOUT
            </p>
            <div className="h-px bg-black/20 mb-16"></div>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-12">
            디자이너 한튜리
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-3xl leading-relaxed">
            움직임을 통해 감정을 전달하는 모션그래픽 디자이너입니다.
            각 프로젝트에서 창의성과 기술을 결합하여 시각적으로 임팩트 있는 콘텐츠를 만들어냅니다.
          </p>
        </section>

        {/* About Content */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            {/* Bio */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-8">소개</h2>
              <div className="space-y-6 text-black/70 leading-relaxed">
                <p>
                  저는 디지털 콘텐츠의 가능성을 믿습니다. 정적인 이미지에서 벗어나
                  움직임을 통해 더 깊은 감정적 연결을 만들 수 있다고 생각합니다.
                </p>
                <p>
                  각 프로젝트마다 클라이언트의 브랜드 정체성과 메시지를 이해하고,
                  그것을 시각적으로 표현하는 것을 목표로 합니다.
                </p>
                <p>
                  기술과 창의성의 조화로 독특하고 기억에 남는 작업을 만들어내고 있습니다.
                </p>
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h3 className="text-sm font-bold tracking-widest mb-8 text-black/80">
                QUICK INFO
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs font-medium text-black/60 mb-2">
                    NICKNAME
                  </p>
                  <p className="text-base font-medium">한튜리</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-black/60 mb-2">
                    PROFESSION
                  </p>
                  <p className="text-base font-medium">모션그래픽 디자이너</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-black/60 mb-2">
                    EMAIL
                  </p>
                  <a
                    href="mailto:contact@hanturi.work"
                    className="text-base font-medium hover:opacity-60 transition-opacity"
                  >
                    contact@hanturi.work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="pt-16 border-t border-black/20">
            <h2 className="text-2xl font-bold mb-12">사용 도구</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-sm font-bold tracking-widest mb-6 text-black/80">
                  MOTION & VIDEO
                </h3>
                <ul className="space-y-3">
                  <li className="text-base font-medium">Adobe After Effects</li>
                  <li className="text-base font-medium">Adobe Premiere Pro</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold tracking-widest mb-6 text-black/80">
                  DESIGN & 3D
                </h3>
                <ul className="space-y-3">
                  <li className="text-base font-medium">Adobe Photoshop</li>
                  <li className="text-base font-medium">Adobe Illustrator</li>
                  <li className="text-base font-medium">Blender</li>
                  <li className="text-base font-medium">AI Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="max-w-7xl mx-auto px-8">
          <div className="pt-16 border-t border-black/20">
            <p className="text-black/60 text-sm">
              © 2026 한튜리. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
