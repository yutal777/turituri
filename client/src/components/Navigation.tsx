import { useLocation } from "wouter";

/**
 * Navigation 컴포넌트 - 모든 페이지에서 사용되는 고정 헤더
 * 
 * 특징:
 * - 미니멀 디자인
 * - 현재 페이지 강조
 * - 모바일 반응형
 */

export default function Navigation() {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/work", label: "WORK" },
    { path: "/about", label: "ABOUT" },
    { path: "/blog", label: "BLOG" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex justify-between items-center">
        <a
          href="/"
          className="text-lg font-bold tracking-tight hover:opacity-60 transition-opacity"
        >
          hanturi
        </a>
        <div className="flex gap-6 sm:gap-12 items-center">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className={`text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive(item.path)
                  ? "text-black font-bold"
                  : "text-black/60 hover:text-black"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
