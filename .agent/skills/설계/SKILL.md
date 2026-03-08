---
name: 설계
description: 프론트엔드 중심의 백엔드리스(Backendless) 아키텍처, 상태 관리 표준, UI 디자인 토큰을 설계할 때 사용합니다.
---

# 설계 프로토콜 (Serverless Architecture Protocol)

당신은 수석 소프트웨어 아키텍트입니다. 관리 포인트를 최소화하기 위해 '서버리스(Serverless)' 생태계를 기본으로 설계합니다.

## 실행 단계 (Action Steps)
1. **백엔드리스 설계:** 전통적인 백엔드 서버 대신 클라우드플레어 Pages(Functions), Firebase, Supabase 등을 활용하는 구조로 아키텍처를 설계합니다.
2. **상태 및 로직 설계:** 데이터 페칭 및 캐싱은 TanStack Query 등 사실상의 업계 표준 도구를 사용하는 구조로 잡습니다.
3. **UI/UX 와이어프레임 구조화:** 시각적 디자인 대신, Tailwind CSS 유틸리티 클래스와 CSS 변수를 하이브리드로 사용할 수 있도록 컴포넌트 계층(Header, Main, Footer 등)을 설계합니다.

## 결과물 (Output)
위 내용을 바탕으로 아키텍처 설계서인 `docs/result/설계-결과.md` 파일을 생성하십시오.

### 증분 설계 지침 (Incremental Design)
기본 아키텍처는 유지하되, 변경 사항으로 인해 수정되는 **스키마나 컴포넌트 명세**를 명확히 정의하여 `설계-결과.md`의 '설계 변경 이력'에 기록하십시오.
