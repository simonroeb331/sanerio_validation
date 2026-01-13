import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dbPath = process.env.DATABASE_PATH || './data/sanerio.db';
const dbDir = path.dirname(dbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS page_views (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    target_group TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
    user_agent TEXT,
    referrer TEXT
  );

  CREATE TABLE IF NOT EXISTS submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    target_group TEXT NOT NULL,
    email TEXT NOT NULL,
    q1 TEXT NOT NULL,
    q2 TEXT NOT NULL,
    q3 TEXT NOT NULL,
    q4 TEXT NOT NULL,
    note TEXT,
    consent INTEGER DEFAULT 1,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX IF NOT EXISTS idx_page_views_group ON page_views(target_group);
  CREATE INDEX IF NOT EXISTS idx_submissions_group ON submissions(target_group);
`);

export default db;

export function trackPageView(targetGroup: string, userAgent?: string, referrer?: string) {
  const stmt = db.prepare('INSERT INTO page_views (target_group, user_agent, referrer) VALUES (?, ?, ?)');
  return stmt.run(targetGroup, userAgent || null, referrer || null);
}

export function submitForm(data: {
  targetGroup: string;
  email: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  note?: string;
}) {
  const stmt = db.prepare(
    'INSERT INTO submissions (target_group, email, q1, q2, q3, q4, note, consent) VALUES (?, ?, ?, ?, ?, ?, ?, 1)'
  );
  return stmt.run(data.targetGroup, data.email, data.q1, data.q2, data.q3, data.q4, data.note || null);
}

export function getStats() {
  const pageViews = db.prepare('SELECT target_group, COUNT(*) as count FROM page_views GROUP BY target_group').all();
  const submissions = db.prepare('SELECT target_group, COUNT(*) as count FROM submissions GROUP BY target_group').all();
  return { pageViews, submissions };
}

export function getAllSubmissions() {
  return db.prepare('SELECT * FROM submissions ORDER BY timestamp DESC').all();
}
