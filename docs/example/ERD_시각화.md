# 뉴뉴스메일(NewNewsMail) ERD 시각화 문서 v1.0

## 1. 개요
본 문서는 뉴뉴스메일 서비스의 데이터베이스 아키텍처와 엔티티 간의 관계를 정의합니다. SQLite 경량 데이터베이스를 사용하며, 법적 준수를 위한 로그 기록과 AI 가공 데이터를 효율적으로 관리하는 데 중점을 둡니다.

---

## 2. 엔티티 관계도 (ERD)

```mermaid
erDiagram
    USERS ||--o{ CONSENT_LOGS : "records"
    USERS ||--o{ REGULAR_CONSENT_CHECK_LOGS : "monitors"
    USERS ||--o{ SUBSCRIPTIONS : "manages"
    USERS ||--o{ EMAIL_SEND_LOGS : "receives"
    USERS ||--o{ PAYMENT_LOGS : "pays"
    
    ARTICLES ||--o| ARTICLE_SUMMARIES : "summarized_by"
    
    USERS {
        integer user_id PK
        varchar email UNIQUE
        varchar password_hash
        varchar name
        boolean is_marketing_agreed
        datetime created_at
    }
    
    CONSENT_LOGS {
        integer log_id PK
        integer user_id FK
        varchar action_type "OPT_IN, OPT_OUT 등"
        datetime action_date
        varchar ip_address
        datetime notification_sent_at
    }
    
    ARTICLES {
        integer article_id PK
        varchar title
        varchar original_url UNIQUE
        text content_raw
        varchar category
        datetime published_at
    }
    
    ARTICLE_SUMMARIES {
        integer summary_id PK
        integer article_id FK
        text summary_brief
        text summary_basic
        text summary_detail
        text keywords_json
        text image_prompt
    }
    
    SUBSCRIPTIONS {
        integer sub_id PK
        integer user_id FK
        varchar plan_type "FREE, PRO"
        varchar sub_status "ACTIVE, PAUSED"
    }
```

---

## 3. 핵심 테이블 정의

### 3.1 사용자 및 법적 로그 (`USERS`, `CONSENT_LOGS`)
- **목적**: 사용자의 마케팅 수신 동의 이력을 추적하여 정보통신망법 준수 보장.
- **특이사항**: `CONSENT_LOGS`는 14일 이내 처리 결과 통지 발송 일시(`notification_sent_at`)를 필수로 기록함.

### 3.2 뉴스 콘텐츠 및 AI 가공 (`ARTICLES`, `ARTICLE_SUMMARIES`)
- **목적**: 수집된 원문과 Gemini가 생성한 3단계 요약 데이터를 분리하여 관리.
- **특이사항**: `ARTICLE_SUMMARIES`에는 Pollinations.ai용 이미지 생성 프롬프트가 포함됨.

---

## 4. 데이터 표준 가이드
- **날짜 형식**: `YYYY-MM-DD HH:MM:SS` (ISO 8601 기반)
- **ID 명명 규칙**: 테이블명(단수형) + `_id`를 기본 PK로 사용.
- **상태 관리**: `is_used`, `status` 등 예약어를 통해 활성/비활성 관리.

---
**문서 버전**: v1.0 | **최종 업데이트**: 2026-02-24
