import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * Blog 페이지 - 소셜 미디어 피드
 * 
 * 디자인 철학:
 * - Instagram, X 피드를 실시간으로 로드
 * - 탭으로 소셜 미디어 분류
 * - 미니멀한 카드 디자인
 */

export default function Blog() {
  const [activeTab, setActiveTab] = useState<"instagram" | "x">("instagram");

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

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
            소셜 미디어
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl">
            Instagram과 X에서 최신 작업물과 생각을 공유하고 있습니다.
          </p>
        </section>

        {/* Tab Navigation */}
        <section className="max-w-7xl mx-auto px-8 mb-12">
          <div className="flex gap-4 border-b border-black/20 pb-4">
            <button
              onClick={() => setActiveTab("instagram")}
              className={`text-sm font-medium tracking-widest transition-colors pb-2 ${
                activeTab === "instagram"
                  ? "text-black border-b-2 border-black"
                  : "text-black/60 hover:text-black"
              }`}
            >
              INSTAGRAM
            </button>
            <button
              onClick={() => setActiveTab("x")}
              className={`text-sm font-medium tracking-widest transition-colors pb-2 ${
                activeTab === "x"
                  ? "text-black border-b-2 border-black"
                  : "text-black/60 hover:text-black"
              }`}
            >
              X (TWITTER)
            </button>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          {activeTab === "instagram" && (
            <div className="space-y-8">
              <div className="bg-black/5 rounded-lg p-8 text-center">
                <p className="text-black/60 mb-4">Instagram 피드를 로드 중입니다...</p>
                <a
                  href="https://www.instagram.com/hanturi777/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
                >
                  Instagram에서 보기 →
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="bg-black/5 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square bg-gradient-to-br from-black/10 to-black/20 flex items-center justify-center">
                      <p className="text-black/40 font-medium">Instagram Post {item}</p>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-black/60">최신 작업물 및 일상</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "x" && (
            <div className="space-y-8">
              <div className="bg-black/5 rounded-lg p-8 text-center">
                <p className="text-black/60 mb-4">X 피드를 로드 중입니다...</p>
                <a
                  href="https://x.com/hanturi8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
                >
                  X에서 보기 →
                </a>
              </div>

              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="border border-black/20 rounded-lg p-6 hover:bg-black/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-black/10 rounded-full flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">@hanturi8</p>
                        <p className="text-black/60 text-sm mt-2">
                          최신 프로젝트 업데이트와 생각 공유 중...
                        </p>
                        <p className="text-black/40 text-xs mt-3">X Post {item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-8 mb-24">
          <div className="bg-black/5 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">더 많은 콘텐츠 보기</h2>
            <p className="text-black/70 mb-8">
              Instagram과 X에서 실시간으로 업데이트되는 최신 작업물을 팔로우하세요.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://www.instagram.com/hanturi777/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
              >
                Instagram 팔로우
              </a>
              <a
                href="https://x.com/hanturi8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition-colors"
              >
                X 팔로우
              </a>
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
