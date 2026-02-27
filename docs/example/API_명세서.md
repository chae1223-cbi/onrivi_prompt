# 뉴뉴스메일(NewNewsMail) API 명세서 v1.1

## 1. 개요
본 문서는 뉴뉴스메일 서비스의 백엔드 에이전트 및 클라이언트 간 통신을 위한 RESTful API 규격을 정의합니다. 모든 API는 Next.js App Router를 기반으로 하며, `/api` prefix를 가집니다.

---

## 2. 콘텐츠 관리 API (Content)

| 메서드 | 경로 | 설명 |
| :--- | :--- | :--- |
| **GET** | `/api/articles` | 뉴스 목록 조회 및 필터링 |
| **POST** | `/api/articles` | 뉴스 수동 등록 및 인사이트 생성 요청 |
| **GET** | `/api/categories` | 설정된 뉴스 카테고리 목록 조회 |

---

## 3. 회원 및 서비스 API (Users & Service)

| 메서드 | 경로 | 설명 |
| :--- | :--- | :--- |
| **POST** | `/api/subscribe` | 신규 뉴스레터 구독 신청 |
| **GET** | `/api/users` | 구독자 목록 및 상태 조회 |
| **PATCH** | `/api/user/consent` | 수신 동의 상태 변경 로그 기록 |

---

## 4. 운영 및 에이전트 제어 (Ops)

| 메서드 | 경로 | 설명 |
| :--- | :--- | :--- |
| **GET** | `/api/jobs` | 현재 등록된 에이전트 작업(Job) 목록 조회 |
| **POST** | `/api/admin/run-agent` | 특정 에이전트(Intake, Dispatch 등) 즉시 가동 |

---

## 5. 공통 응답 규격
성공 시:
```json
{
  "STATUS": "SUCCESS",
  "DATA": { ... }
}
```
실패 시:
```json
{
  "STATUS": "ERROR",
  "MESSAGE": "상세 에러 내용"
}
```

---
**문서 버전**: v1.1 | **최종 업데이트**: 2026-02-24
