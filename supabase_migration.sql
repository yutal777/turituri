-- Supabase PostgreSQL Migration for Hanturi Portfolio
-- This script creates the necessary tables for the portfolio application

-- Create role enum type
CREATE TYPE role AS ENUM ('user', 'admin');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  "openId" VARCHAR(64) NOT NULL UNIQUE,
  name TEXT,
  email VARCHAR(320),
  "loginMethod" VARCHAR(64),
  role role NOT NULL DEFAULT 'user',
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "lastSignedIn" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create works table
CREATE TABLE IF NOT EXISTS works (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  client VARCHAR(255),
  category VARCHAR(100),
  "imageUrl" TEXT,
  "videoUrl" TEXT,
  "detailedContent" TEXT,
  year INTEGER,
  "workOrder" INTEGER DEFAULT 0,
  "isPublished" INTEGER DEFAULT 1,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_users_openId ON users("openId");
CREATE INDEX IF NOT EXISTS idx_works_workOrder ON works("workOrder");
CREATE INDEX IF NOT EXISTS idx_works_isPublished ON works("isPublished");

-- Insert sample work data
INSERT INTO works (title, description, client, category, "imageUrl", "detailedContent", year, "workOrder", "isPublished")
VALUES 
  (
    '브랜드 모션 그래픽',
    '기업 브랜드의 정체성을 표현하는 동적 모션 그래픽 시리즈',
    'X',
    'Motion Graphics',
    NULL,
    '브랜드의 핵심 가치를 움직임으로 표현한 프로젝트입니다.',
    2024,
    1,
    1
  ),
  (
    '소셜 미디어 콘텐츠',
    'Instagram, YouTube를 위한 고임팩트 숏 콘텐츠 제작',
    '→',
    '3D Animation',
    NULL,
    '이세계아이돌과 같은 소셜 미디어 플랫폼을 위한 콘텐츠입니다.',
    2024,
    2,
    1
  );
