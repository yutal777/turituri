import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

/**
 * 관리자 로그인 페이지
 * 비밀번호를 입력하여 관리자 페이지에 접근
 */

const ADMIN_PASSWORD = "woltale010";

export default function AdminLogin() {
  const [, navigate] = useLocation();
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (password === ADMIN_PASSWORD) {
      // 로컬 스토리지에 관리자 세션 저장
      localStorage.setItem("adminSession", "true");
      localStorage.setItem("adminLoginTime", new Date().getTime().toString());
      toast.success("관리자 페이지로 이동합니다.");
      navigate("/admin");
    } else {
      toast.error("비밀번호가 올바르지 않습니다.");
      setPassword("");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">관리자 로그인</h1>
          <p className="text-black/60 text-sm">작품을 관리하기 위해 비밀번호를 입력하세요.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">비밀번호</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
              disabled={isLoading}
              autoFocus
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !password}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t border-black/10">
          <a
            href="/"
            className="text-sm text-black/60 hover:text-black transition-colors"
          >
            ← 홈으로 돌아가기
          </a>
        </div>
      </Card>
    </div>
  );
}
