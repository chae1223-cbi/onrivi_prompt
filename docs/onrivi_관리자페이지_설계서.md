# OnriviPrompt 관리자 페이지(Admin Dashboard) 기획서

성공적인 1인 라이선스 비즈니스를 영위하기 위해서는 구매 내역 관리, 라이선스 통제, 고객 지원 등을 위한 **[관리자 전용 웹 페이지(Admin Page)]** 구조가 필수적입니다. 

---

## 1. 관리자 페이지 필수 기능 (MVP)

### 1.1 대시보드 (Dashboard)
- **주요 지표 시각화:** 실시간 총 매출(MRR/ARR), 이번 달 활성 사용자 수(MAU), 신규 결제 건수 등
- **최근 알림:** 최근 발생한 환불 요청, 문의 메일 등 알림 표시

### 1.2 라이선스 관리 (License Management)
- **발급 내역 조회:** 고객별 라이선스 키(Key), 발급일, 유효 기한 목록 제공
- **수동 컨트롤:** 특정 악성 유저의 라이선스 키 무효화(Revoke) 기능 또는 특별 제공용 키 수동 발급(Generate) 기능
- **인증 로그 모니터링:** 특정 라이선스 키가 어느 IP/PC 환경에서 얼마나 자주 활성화(Check)되었는지 추적하여 계정 공유 어뷰징 색출

### 1.3 결제 및 구독 내역 (Transactions & Billing)
- 해외 결제 플랫폼(Paddle 등)과 Webhook으로 연동된 내역을 리스트화
- **환불/취소 내역 조회:** 환불 처리된 내역 파악하여 즉시 라이선스 취소 연동

### 1.4 사용자 및 고객 지원 (User / Support)
- **회원 목록:** 고객 이메일 목록(회원가입 시 또는 구매 시 수집된 이메일)
- Contact Us 포맷으로 들어온 문의 내역 답변 메일 연동

---

## 2. 관리자 페이지 아키텍처 및 보안 설계

### 2.1 접근 보안
- **IP WhiteListing:** 허용된 IP(오피스/회사 등)에서만 관리자 페이지 접속 허용
- **MFA (다중 인증) 필수:** 1인 기업이라 하더라도 구글 OTP 등을 활용한 2FA 로그인 필수 구현
- 관리자 로그인 루트 은닉 (예: `/admin-dashboard-secret-url` 와 같은 비공개 라우팅 구조)

### 2.2 기술 스택 제안 (빠른 구축을 위한 조합)
1. **Frontend:** React + Tailwind CSS (지금 작업 중인 프론트엔드 레포지토리에 특정 비공개 Route 추가)
2. **Backend/Database:** 
   - Supabase (PostgreSQL + Auth 인증 지원) 
   - 또는 Firebase (기본적인 로그인/DB 처리 초고속 구현 가능)
3. **결제 Webhook 서버:** Cloudflare Workers(비용 절감) 또는 Vercel Serverless Function

---

## 3. 플랫폼 연동 구조도 흐름
1. (고객) OnriviPrompt 웹사이트에서 결제 진행 (Paddle 위젯)
2. (Paddle) 우리 서버의 Webhook URL로 결제 성공 알림(Event Payload) 전송
3. (내부 서버) Webhook을 받아 유효한 라이선스 키 문자열 생성
4. (내부 서버) 데이터베이스(`License Table`)에 구매자 이메일과 해당 키 저장
5. (내부 서버/이메일 시스템) 생성된 라이선스 키를 고객 이메일로 자동 전송
6. **(관리자) 관리자 페이지 접속 -> `License Table` 목록 확인 및 통제 가능**
