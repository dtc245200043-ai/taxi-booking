# ĐỀ TÀI 22: HỆ THỐNG ĐẶT XE TAXI (TAXI BOOKING SYSTEM)

Báo cáo Bài tập lớn học phần **Triển khai và Quản trị Hệ thống Phần mềm**.

## 👤 Thông tin sinh viên
- **Họ và tên:** Lý Đức Hiệu
- **Mã số sinh viên (MSSV):** DTC245200043
- **Lớp:** CNTT K23G
- **Trường:** Đại học Công nghệ Thông tin & Truyền thông - Đại học Thái Nguyên

---

## 🚀 Kiến trúc & Công nghệ sử dụng
Hệ thống được đóng gói hoàn toàn bằng **Docker Compose** bao gồm 10 container dịch vụ:
- **Web App / Backend:** Node.js (Express) xử lý logic đặt xe & tìm tài xế ngẫu nhiên.
- **Database:** PostgreSQL (`taxidb`) lưu trữ danh sách tài xế.
- **Database Admin:** pgAdmin 4 quản trị CSDL qua giao diện web.
- **Reverse Proxy:** Nginx (cổng `8080`) định tuyến request và bảo mật headers.
- **Monitoring Layer:** Prometheus (cổng `9090`), Grafana (cổng `3001`), cAdvisor & Postgres Exporter.
- **Logging Layer:** Grafana Loki (cổng `3100`) & Promtail thu thập log tập trung.

---

## 🛠️ Cổng dịch vụ (Port Mapping)
| Dịch vụ | Cổng Pubish | Chức năng |
| :--- | :--- | :--- |
| **Nginx Web App** | `http://localhost:8080` | Giao diện Đặt xe Taxi công khai |
| **pgAdmin 4** | `http://localhost:5050` | Quản trị CSDL PostgreSQL |
| **Grafana** | `http://localhost:3001` | Dashboard biểu đồ giám sát hệ thống |
| **Prometheus** | `http://localhost:9090` | Thu thập & quản lý chỉ số Metrics |

---

## ⚡ Hướng dẫn khởi chạy hệ thống (Quick Start)

1. **Clone repository về máy:**
   ```bash
   git clone [https://github.com/dtc245200043-ai/taxi-booking.git](https://github.com/dtc245200043-ai/taxi-booking.git)
   cd taxi-booking
