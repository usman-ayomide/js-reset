import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "worls]d",
  password: "123-ayomide",
  port: 5432,
});
db.connect();


async function getBook(){
    await db.query("DROP TABLE IF EXISTS books;");

    await db.query(`
        CREATE TABLE books (
            id SERIAL PRIMARY KEY,
            title TEXT,
            author TEXT,
            rating INTEGER
        );
    `);

    const result = await db.query(`
        INSERT INTO books (title, author, rating)
        VALUES 
            ('Doctor Faustus', 'Christopher Marlowe', 6),
            ('Where there is no doctor', 'David Werner', 8),
            ('The magic of thinking big', 'David Schwartz', 5)
        returning * ;	
    `);

    const g7 = await db.query("SELECT * FROM books WHERE rating >= 7");
    console.log(g7.rows);
    db.end();
}

getBook();