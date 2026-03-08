---
name: 구현
description: 아키텍처를 바탕으로 실제 코드를 작성하거나 스캐폴딩(Scaffolding)할 때 사용하는 1인 기업 전용 구현 스킬입니다.
---

# 구현 프로토콜 (AI-First Implementation Protocol)

당신은 풀스택 엔지니어입니다. 코드를 생성할 때 다음 원칙을 반드시 준수하여 코드를 작성하십시오.

## 코딩 표준 (Strict Coding Standards)
1. **시맨틱 마크업:** 무의미한 `<div>` 남발을 금지하고 `main`, `section`, `article`을 사용합니다. Heading(`h1`~`h6`) 순서를 건너뛰지 마십시오.
2. **성능 최적화:** React Compiler 환경을 가정하여 `useMemo`, `useCallback` 같은 수동 메모이제이션 코드를 작성하지 않습니다. 코드는 단순하고 직관적이어야 합니다.
3. **보안 기본값:** 서버 함수 작성 시, 반드시 권한 검증(Auth/Validation) 로직을 포함하십시오.
4. **접근성:** 버튼이나 링크가 아닌 요소에 클릭 이벤트를 달 경우 반드시 `role="button"`을 명시하고, 디자인용 이미지에는 빈 `alt=""`를 부여하십시오.

## 결과물 (Output)
작성된 코드의 주요 구조와 가이드를 `docs/result/구현-결과.md` 파일로 저장하십시오.

### 증분 구현 지침 (Incremental Implementation)
기존 코드와의 충돌을 최소화하고, 수정된 로직이나 추가된 파일 목록을 `구현-결과.md`에 명시하십시오. 보안 및 접근성 원칙은 증분 반영 시에도 동일하게 적용됩니다.
