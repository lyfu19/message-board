require("dotenv").config();
const { Client } = require("pg");

const connectionString = process.argv[2] || process.env.DATABASE_URL;
if (!connectionString) {
  console.error("❌ No database connection string provided.");
  process.exit(1);
}

const client = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  text TEXT NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, text)
VALUES 
  ('Charles', 'Hello World!'),
  ('Alice', 'This is a test message'),
  ('Bob', 'Node + PostgreSQL is cool!');
`;

async function main() {
  try {
    await client.connect();
    console.log("Seeding messages...");
    await client.query(SQL);
    console.log("✅ Done.");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();