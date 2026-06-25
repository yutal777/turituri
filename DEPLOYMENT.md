# Hanturi Portfolio - Vercel 배포 가이드

## 개요

이 프로젝트는 **Supabase PostgreSQL + Vercel** 구조로 배포됩니다.

## 필수 환경 변수

Vercel 프로젝트 설정에서 다음 환경 변수를 추가해야 합니다:

### 데이터베이스
- `DATABASE_URL`: `postgresql://postgres:OevfJDFXmDo6kEZa@db.xcychpkfmraoszyhmxvd.supabase.co:5432/postgres`

### 인증
- `JWT_SECRET`: 임의의 보안 문자열 (최소 32자)
- `ADMIN_PASSWORD`: `woltale010`

### Supabase API (선택사항)
- `NEXT_PUBLIC_SUPABASE_URL`: `https://xcychpkfmraoszyhmxvd.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `sb_publishable_IX7RDAbp2fU3OMMnC4i3iw_ELtm-FPO`

## Vercel 배포 단계

### 1. GitHub 저장소에 코드 푸시
```bash
git init
git add .
git commit -m "Initial commit: Hanturi Portfolio with Supabase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hanturi-portfolio.git
git push -u origin main
```

### 2. Vercel에 프로젝트 생성
1. [Vercel 대시보드](https://vercel.com/dashboard)에 접속
2. "Add New" → "Project" 클릭
3. GitHub 저장소 선택
4. 프로젝트 설정:
   - **Framework Preset**: Other
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`

### 3. 환경 변수 설정
Vercel 프로젝트 설정 → Environment Variables에서:

```
DATABASE_URL = postgresql://postgres:OevfJDFXmDo6kEZa@db.xcychpkfmraoszyhmxvd.supabase.co:5432/postgres
JWT_SECRET = [임의의 보안 문자열]
ADMIN_PASSWORD = woltale010
```

### 4. 배포
설정 완료 후 "Deploy" 버튼 클릭

## 로컬 개발

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev

# 빌드
pnpm build

# 프로덕션 실행
pnpm start
```

## 데이터베이스 마이그레이션

Supabase에 이미 테이블이 생성되어 있습니다:
- `users` - 사용자 정보
- `works` - 포트폴리오 작품

## 주요 기능

- **관리자 페이지**: `/admin-login` (비밀번호: woltale010)
- **작품 관리**: 관리자 페이지에서 작품 추가/수정/삭제
- **작품 상세 페이지**: `/work/{id}`
- **소셜 미디어**: Instagram, X, YouTube 링크 연결

## 문제 해결

### 데이터베이스 연결 오류
- Supabase 프로젝트가 실행 중인지 확인
- `DATABASE_URL` 환경 변수가 올바른지 확인

### 빌드 실패
```bash
# 의존성 재설치
pnpm install --force

# 캐시 삭제
pnpm store prune
```

## 지원

문제가 발생하면 Supabase 및 Vercel 문서를 참고하세요:
- [Supabase 문서](https://supabase.com/docs)
- [Vercel 문서](https://vercel.com/docs)
