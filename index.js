const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// Kết nối PostgreSQL từ Docker Network
const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'taxidb',
  port: 5432,
});

app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`
      <div style="font-family: Arial; text-align: center; margin-top: 50px;">
        <h1 style="color: #f39c12;">HỆ THỐNG ĐẶT XE TAXI (ĐỀ 22)</h1>
        <p>Trạng thái kết nối PostgreSQL: <b style="color: green;">Thành công!</b></p>
        <p>Thời gian từ Database: ${result.rows[0].now}</p>
        <hr style="width: 50%;">
        <input type="text" placeholder="Điểm đón..." style="padding: 10px; width: 250px;"><br><br>
        <input type="text" placeholder="Điểm đến..." style="padding: 10px; width: 250px;"><br><br>
        <button style="padding: 10px 20px; background: #f39c12; color: white; border: none; font-weight: bold; cursor: pointer;">Tìm Tài Xế</button>
      </div>
    `);
  } catch (err) {
    res.send(`Lỗi kết nối database: ${err.message}`);
  }
});

app.listen(port, () => {
  console.log(`Ứng dụng đang chạy tại cổng ${port}`);
});
