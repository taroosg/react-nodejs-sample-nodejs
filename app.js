import express from "express";
import { omikujiRouter } from "./routes/omikuji.route.js";
import { jankenRouter } from "./routes/janken.route.js";
import { tweetRouter } from "./routes/tweet.route.js";
// import * as fs from 'fs' // 読み込む

// fs.readFile("./hoge.txt", "utf8", (err, data) => {
//   console.log(data);
// })

// import sqlite3 from "sqlite3";
// const db = new sqlite3.Database('./db/sample.db');

// const getSqlResult = (db, sql) => new Promise((resolve, reject) => db.get(sql, (err, data) => resolve(data)));
// const getAllSqlResult = (db, sql) => new Promise((resolve, reject) => db.all(sql, (err, data) => resolve(data)));

// db.serialize(async () => {
//   const isExistTableSQL = `SELECT count(*) FROM sqlite_master WHERE type='table' AND name='sample_table'`;
//   const isExistsResult = await getSqlResult(db, isExistTableSQL);
//   console.log(isExistsResult);
//   const selectAllDataSQL = `SELECT * FROM sample_table`;
//   const allData = await getAllSqlResult(db, selectAllDataSQL);
//   console.log(allData);
//   const createTableSql = `
//     CREATE TABLE IF NOT EXISTS sample_table (
//       ID INTEGER PRIMARY KEY AUTOINCREMENT,
//       NAME TEXT NOT NULL
//     )
//   `;
//   // db.run(createTableSql);
//   // db.run('INSERT INTO sample_table (id, name) VALUES ($id, $name)', { $id: null, $name: 'fuga' });
// });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const port = 3002;

// 編集
app.get("/", (req, res) => {
  res.json({
    uri: "/",
    message: "Hello Node.js!",
  });
});

app.use("/omikuji", (req, res) => omikujiRouter(req, res));
app.use("/janken", (req, res) => jankenRouter(req, res));

app.use("/tweet", (req, res) => tweetRouter(req, res));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

