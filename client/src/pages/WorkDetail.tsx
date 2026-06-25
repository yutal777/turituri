import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { trpc } from "@/lib/trpc";
import Navigation from "@/components/Navigation";

/**
 * 작품 상세 페이지
 * 각 작품의 제목, 설명, 이미지, 비디오를 표시
 */

export default function WorkDetail() {
  const params = useParams();
  const [, navigate] = useLocation();
  const workId = params?.id ? parseInt(params.id) : null;

  const { data: work, isLoading } = trpc.works.getById.useQuery(
    { id: workId! },
    { enabled: !!workId }
  );

  if (!workId) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">작품을 찾을 수 없습니다.</h1>
          <Button onClick={() => navigate("/work")}>작품 목록으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <p>로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!work) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">작품을 찾을 수 없습니다.</h1>
          <Button onClick={() => navigate("/work")}>작품 목록으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/work")}
            className="flex items-center gap-2 text-black/60 hover:text-black transition-colors mb-8"
          >
            <ChevronLeft size={20} />
            <span className="text-sm font-medium">작품 목록으로</span>
          </button>

          {/* Header */}
          <div className="mb-12">
            <div className="mb-4">
              <p className="text-xs font-medium tracking-widest text-black/60 mb-4">
                {work.category || "작품"}
              </p>
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
                {work.title}
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              {work.client && (
                <div>
                  <p className="text-black/60 mb-1">클라이언트</p>
                  <p className="font-medium">{work.client}</p>
                </div>
              )}
              {work.year && (
                <div>
                  <p className="text-black/60 mb-1">연도</p>
                  <p className="font-medium">{work.year}</p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          {work.description && (
            <div className="mb-12 pb-12 border-b border-black/20">
              <p className="text-lg text-black/70 leading-relaxed">
                {work.description}
              </p>
            </div>
          )}

          {/* Image */}
          {work.imageUrl && (
            <div className="mb-12">
              <Card className="overflow-hidden">
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>
          )}

          {/* Video */}
          {work.videoUrl && (
            <div className="mb-12">
              <div className="aspect-video bg-black/5 rounded-lg overflow-hidden">
                {work.videoUrl.includes("youtube") || work.videoUrl.includes("youtu.be") ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={work.videoUrl.replace("watch?v=", "embed/")}
                    title={work.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    width="100%"
                    height="100%"
                    controls
                    src={work.videoUrl}
                  />
                )}
              </div>
            </div>
          )}

          {/* Detailed Content */}
          {work.detailedContent && (
            <div className="mb-12 pb-12 border-b border-black/20">
              <h2 className="text-2xl font-bold mb-6">프로젝트 상세</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-base text-black/70 leading-relaxed whitespace-pre-wrap">
                  {work.detailedContent}
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={() => navigate("/work")}
            >
              ← 작품 목록으로
            </Button>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-black/80 transition-colors"
            >
              <span className="text-sm font-medium">연락하기</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
