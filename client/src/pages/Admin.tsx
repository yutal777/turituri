import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Trash2, Edit2, Plus } from "lucide-react";

/**
 * 관리자 대시보드
 * 작품을 추가, 수정, 삭제할 수 있는 페이지
 */

interface WorkForm {
  id?: number;
  title: string;
  description: string;
  client: string;
  category: string;
  imageUrl: string;
  videoUrl: string;
  detailedContent: string;
  year: number;
  workOrder: number;
}

export default function Admin() {
  const [, navigate] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<WorkForm>({
    title: "",
    description: "",
    client: "",
    category: "",
    imageUrl: "",
    videoUrl: "",
    detailedContent: "",
    year: new Date().getFullYear(),
    workOrder: 0,
  });

  // 관리자 세션 확인
  useEffect(() => {
    const adminSession = localStorage.getItem("adminSession");
    const loginTime = localStorage.getItem("adminLoginTime");
    
    if (!adminSession) {
      navigate("/admin-login");
      return;
    }

    // 24시간 후 자동 로그아웃
    if (loginTime) {
      const elapsed = new Date().getTime() - parseInt(loginTime);
      if (elapsed > 24 * 60 * 60 * 1000) {
        localStorage.removeItem("adminSession");
        localStorage.removeItem("adminLoginTime");
        navigate("/admin-login");
      }
    }
  }, [navigate]);

  const { data: works, refetch } = trpc.works.list.useQuery();
  const createMutation = trpc.works.create.useMutation();
  const updateMutation = trpc.works.update.useMutation();
  const deleteMutation = trpc.works.delete.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingId) {
        await updateMutation.mutateAsync({
          id: editingId,
          ...formData,
        });
        toast.success("작품이 수정되었습니다.");
      } else {
        await createMutation.mutateAsync(formData);
        toast.success("작품이 추가되었습니다.");
      }

      setIsOpen(false);
      setEditingId(null);
      setFormData({
        title: "",
        description: "",
        client: "",
        category: "",
        imageUrl: "",
        videoUrl: "",
        detailedContent: "",
        year: new Date().getFullYear(),
        workOrder: 0,
      });
      refetch();
    } catch (error) {
      toast.error("작업 중 오류가 발생했습니다.");
      console.error(error);
    }
  };

  const handleEdit = (work: any) => {
    setFormData(work);
    setEditingId(work.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("정말로 이 작품을 삭제하시겠습니까?")) {
      try {
        await deleteMutation.mutateAsync({ id });
        toast.success("작품이 삭제되었습니다.");
        refetch();
      } catch (error) {
        toast.error("삭제 중 오류가 발생했습니다.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    localStorage.removeItem("adminLoginTime");
    navigate("/");
    toast.success("로그아웃되었습니다.");
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">관리자 대시보드</h1>
          <Button variant="outline" onClick={handleLogout}>
            로그아웃
          </Button>
        </div>

        <div className="mb-8">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setEditingId(null);
                  setFormData({
                    title: "",
                    description: "",
                    client: "",
                    category: "",
                    imageUrl: "",
                    videoUrl: "",
                    detailedContent: "",
                    year: new Date().getFullYear(),
                    workOrder: 0,
                  });
                }}
              >
                <Plus className="w-4 h-4 mr-2" />
                새 작품 추가
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {editingId ? "작품 수정" : "새 작품 추가"}
                </DialogTitle>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">제목 *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="작품 제목"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">설명</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="작품 설명"
                    rows={2}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">클라이언트</label>
                    <Input
                      value={formData.client}
                      onChange={(e) =>
                        setFormData({ ...formData, client: e.target.value })
                      }
                      placeholder="클라이언트명"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">카테고리</label>
                    <Input
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      placeholder="카테고리"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">이미지 URL</label>
                  <Input
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="이미지 URL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">비디오 URL</label>
                  <Input
                    value={formData.videoUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, videoUrl: e.target.value })
                    }
                    placeholder="비디오 URL (YouTube 등)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">상세 설명</label>
                  <Textarea
                    value={formData.detailedContent}
                    onChange={(e) =>
                      setFormData({ ...formData, detailedContent: e.target.value })
                    }
                    placeholder="상세한 작품 설명"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">연도</label>
                    <Input
                      type="number"
                      value={formData.year}
                      onChange={(e) =>
                        setFormData({ ...formData, year: parseInt(e.target.value) })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">순서</label>
                    <Input
                      type="number"
                      value={formData.workOrder}
                      onChange={(e) =>
                        setFormData({ ...formData, workOrder: parseInt(e.target.value) })
                      }
                    />
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button type="submit" className="flex-1">
                    {editingId ? "수정" : "추가"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    취소
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/10 bg-black/5">
                  <th className="px-6 py-3 text-left text-sm font-semibold">제목</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">클라이언트</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">카테고리</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">연도</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">작업</th>
                </tr>
              </thead>
              <tbody>
                {works?.map((work) => (
                  <tr key={work.id} className="border-b border-black/10 hover:bg-black/5">
                    <td className="px-6 py-3 text-sm">{work.title}</td>
                    <td className="px-6 py-3 text-sm">{work.client || "-"}</td>
                    <td className="px-6 py-3 text-sm">{work.category || "-"}</td>
                    <td className="px-6 py-3 text-sm">{work.year || "-"}</td>
                    <td className="px-6 py-3 text-sm">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(work)}
                        >
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(work.id)}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!works || works.length === 0 && (
            <div className="px-6 py-12 text-center text-black/60">
              <p>등록된 작품이 없습니다.</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
