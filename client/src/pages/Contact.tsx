import { Mail, Instagram, Youtube, Twitter } from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Contact 페이지 - 연락처 정보 및 소셜 미디어
 * 
 * 디자인 철학:
 * - 연락처 정보를 명확하게 표시
 * - SNS 링크를 미니멀하게 배치
 * - 여백으로 호흡감 있는 구성
 */

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />

      {/* Main Content */}
      <main className="pt-32 pb-20 flex items-center justify-center min-h-screen">
        <section className="max-w-2xl mx-auto px-8 w-full">
          <div className="mb-16">
            <p className="text-xs font-medium tracking-widest text-black/60 mb-8">
              CONTACT
            </p>
            <div className="h-px bg-black/20 mb-16"></div>
          </div>

          <div className="text-center mb-24">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-8">
              함께 일해보시다
            </h1>
            <p className="text-base sm:text-lg text-black/70 max-w-xl mx-auto">
              새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으신가요?
              언제든지 연락 주세요.
            </p>
          </div>

          {/* Email Section */}
          <div className="mb-24 pb-24 border-b border-black/20">
            <h2 className="text-sm font-bold tracking-widest mb-8 text-black/80">
              EMAIL
            </h2>
            <a
              href="mailto:contact@hanturi.work"
              className="text-2xl sm:text-3xl md:text-4xl font-bold hover:opacity-60 transition-opacity duration-200 break-all"
            >
              contact@hanturi.work
            </a>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-sm font-bold tracking-widest mb-12 text-black/80">
              FOLLOW ME
            </h2>

            <div className="space-y-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <Instagram size={24} className="group-hover:opacity-60 transition-opacity" />
                <span className="text-lg font-medium group-hover:opacity-60 transition-opacity">
                  Instagram
                </span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <Twitter size={24} className="group-hover:opacity-60 transition-opacity" />
                <span className="text-lg font-medium group-hover:opacity-60 transition-opacity">
                  X (Twitter)
                </span>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <Youtube size={24} className="group-hover:opacity-60 transition-opacity" />
                <span className="text-lg font-medium group-hover:opacity-60 transition-opacity">
                  YouTube
                </span>
              </a>

              <a
                href="mailto:contact@hanturi.work"
                className="flex items-center gap-4 group"
              >
                <Mail size={24} className="group-hover:opacity-60 transition-opacity" />
                <span className="text-lg font-medium group-hover:opacity-60 transition-opacity">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-24 pt-16 border-t border-black/20">
            <p className="text-black/60 text-sm">
              © 2024 한튜리. All rights reserved. |
              <a
                href="/admin-login"
                className="text-black/60 hover:text-black transition-colors ml-2"
              >
                rights
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
