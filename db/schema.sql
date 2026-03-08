-- onrivi_prompt SaaS Database Schema v1.1 (Cloudflare D1)
-- 작성일: 2026-03-08
-- 목적: 사용자별 데이터 격리 및 관리자 권한 관리를 위한 통합 스키마

-- 1. 사용자(Users) 테이블: 계정 정보 및 권한/플랜 관리
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,           -- 고유 식별자 (Auth ID 또는 UUID)
    email TEXT UNIQUE NOT NULL,    -- 사용자 이메일
    role TEXT DEFAULT 'user',      -- 'admin' (관리자), 'user' (일반)
    plan TEXT DEFAULT 'free',      -- 'free', 'basic', 'pro'
    usage_limit INTEGER DEFAULT 500,-- 월간 무료 호출 한도
    createdAt INTEGER DEFAULT (strftime('%s', 'now')),
    updatedAt INTEGER DEFAULT (strftime('%s', 'now'))
);

-- 2. 프롬프트(Prompts) 테이블: 사용자별 독립적인 데이터 저장
CREATE TABLE IF NOT EXISTS prompts (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,         -- 소유자 식별자 (외래키)
    title TEXT NOT NULL,           -- 제목
    content TEXT,                  -- 프롬프트 본문
    instruction TEXT,              -- 시스템 지시문
    result TEXT,                   -- AI 실행 결과
    type TEXT DEFAULT 'file',      -- 'file' 또는 'folder'
    rootType TEXT,                 -- 'archive', 'workbench', 'lifeprompt', 'markdown'
    parentId TEXT,                 -- 부모 폴더 ID
    sortOrder INTEGER DEFAULT 0,    -- 정렬 순서 (Dnd용)
    createdAt INTEGER DEFAULT (strftime('%s', 'now')),
    updatedAt INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. 사용량(Usage) 테이블: AI API 호출 기록 및 비용 트래킹 (어드민용)
CREATE TABLE IF NOT EXISTS usage (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    model TEXT,                    -- 사용된 Gemini 모델명
    prompt_tokens INTEGER,         -- 입력 토큰
    completion_tokens INTEGER,     -- 출력 토큰
    total_tokens INTEGER,          -- 총 토큰
    cost REAL,                     -- 예상 발생 비용 (USD)
    createdAt INTEGER DEFAULT (strftime('%s', 'now')),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 성능 및 보안을 위한 인덱스 설정
CREATE INDEX IF NOT EXISTS idx_prompts_user ON prompts(user_id);
CREATE INDEX IF NOT EXISTS idx_prompts_user_parent ON prompts(user_id, parentId);
CREATE INDEX IF NOT EXISTS idx_usage_user ON usage(user_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
