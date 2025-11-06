CREATE TABLE IF NOT EXISTS schemes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title_en VARCHAR(255) NOT NULL,
  title_mr VARCHAR(255),
  description_en LONGTEXT,
  description_mr LONGTEXT,
  applicable_disability_ids VARCHAR(255),
  govt_link VARCHAR(1024),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE INDEX idx_scheme_title_en ON schemes(title_en);