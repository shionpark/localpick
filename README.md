# Localpick Monorepo

로컬 기반 맛집 저장 및 공유 서비스를 위한 프론트엔드 모노레포 프로젝트입니다.  
이 프로젝트는 Next.js 애플리케이션(localpick-client)과 디자인 시스템(design-system)으로 구성되어 있으며, `pnpm`, `Turbo`, `Storybook`을 기반으로 효율적인 개발 환경을 구축했습니다.

---

## 프로젝트 구조

```
localpick/
├── packages/
│   ├── localpick-client/    # 사용자-facing Next.js 앱
│   └── design-system/       # 공통 UI 컴포넌트 및 스토리북
├── turbo.json               # Turbo 파이프라인 설정
├── pnpm-workspace.yaml      # pnpm 모노레포 설정
├── package.json             # 루트 스크립트 및 devDependencies
```

## 실행 방법

1. 의존성 설치
   `pnpm install`
2. 모든 패키지의 개발 서버 실행
   `pnpm run dev`
3. 각 패키지 별 실행 (개별 디버깅 시)

- local-client (Next.js 앱)
  `pnpm --filter localpick-client dev`
- design-system (Storybook)
  `pnpm --filter design-system dev`

## 주요 기술 스택

|     영역      |           기술           |
| :-----------: | :----------------------: |
| 패키지 매니저 |     pnpm (Workspace)     |
| 앱 프레임워크 |  Next.js 15 (React 19)   |
| 디자인 시스템 | Storybook 8, React, Vite |
|   빌드 관리   |        TurboRepo         |
|    스타일     |       Tailwind CSS       |
|  타입 시스템  |        TypeScript        |
|  린팅/포맷팅  |     ESLint, Prettier     |
