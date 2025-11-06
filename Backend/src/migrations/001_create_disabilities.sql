-- src/migrations/001_create_disabilities.sql
CREATE TABLE IF NOT EXISTS disabilities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    slug VARCHAR(191) UNIQUE,
    title_en VARCHAR(255) NOT NULL,
    title_mr VARCHAR(255),
    short_desc_en TEXT,
    short_desc_mr TEXT,
    details_en LONGTEXT,
    details_mr LONGTEXT,
    image_url VARCHAR(1024),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE INDEX idx_disability_title_en ON disabilities(title_en);
CREATE INDEX idx_disability_slug ON disabilities(slug);