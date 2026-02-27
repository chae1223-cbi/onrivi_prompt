-- OnriviPrompt D1 Database Schema
-- Last Updated: 2026-02-27

-- 1. Licenses Table (라이선스 정보 저장)
CREATE TABLE IF NOT EXISTS licenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_email TEXT NOT NULL,
    license_key TEXT UNIQUE NOT NULL,
    plan_type TEXT NOT NULL DEFAULT 'Pro', -- Pro, Enterprise 등
    status TEXT NOT NULL DEFAULT 'active',   -- active, revoked, expired
    issued_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,                    -- 무제한일 경우 NULL
    last_verified_at DATETIME,              -- 최근 앱 인증 시간
    metadata TEXT                            -- 추가 정보 (JSON 형태)
);

-- 2. Transactions Table (결제 내역 저장)
CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id TEXT UNIQUE NOT NULL,          -- 결제 대행사(Paddle 등)의 주문 ID
    customer_email TEXT NOT NULL,
    amount REAL NOT NULL,                   -- 결제 금액
    currency TEXT NOT NULL DEFAULT 'USD',   -- 통화
    payment_status TEXT NOT NULL,           -- completed, refunded, disputed
    provider TEXT NOT NULL DEFAULT 'Paddle',-- 결제 플랫폼 이름
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 3. Activation Logs Table (앱 사용/인증 로그 - 부정 사용 방지용)
CREATE TABLE IF NOT EXISTS activation_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    license_key TEXT NOT NULL,
    ip_address TEXT,                        -- 접속 IP
    device_info TEXT,                       -- 기기 정보 (OS 등)
    activated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (license_key) REFERENCES licenses (license_key)
);

-- 초기 관리자 대시보드 테스트용 데이터 (선택 사항)
-- INSERT INTO licenses (customer_email, license_key, plan_type) VALUES ('test@onrivi.com', 'ONRIVI-DEMO-KEY-2026', 'Pro');
