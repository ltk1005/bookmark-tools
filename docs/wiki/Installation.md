# 📦 Hướng dẫn cài đặt

Hướng dẫn chi tiết cách cài đặt và chạy **Bookmark Tools** trên máy tính của bạn.

## 📋 Yêu cầu hệ thống

- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- (Tùy chọn) Python 3.x hoặc Node.js để chạy local server

## 🚀 Cài đặt nhanh

### Bước 1: Clone repository

```bash
git clone https://github.com/ltk1005/bookmark-tools.git
cd bookmark-tools
```

### Bước 2: Chạy local server

Bạn có thể chọn một trong các cách sau:

#### Sử dụng Python

```bash
# Python 3
python -m http.server 8000

# Python 2 (cũ)
python -m SimpleHTTPServer 8000
```

#### Sử dụng Node.js

```bash
# Cài đặt serve nếu chưa có
npm install -g serve

# Chạy server
npx serve .
```

#### Sử dụng PHP

```bash
php -S localhost:8000
```

### Bước 3: Truy cập ứng dụng

Mở trình duyệt và truy cập:
```
http://localhost:8000
```

## 📱 Cài đặt như PWA

**Bookmark Tools** hỗ trợ Progressive Web App (PWA), cho phép bạn cài đặt ứng dụng trực tiếp trên thiết bị.

### Trên Chrome/Edge (Desktop)

1. Mở ứng dụng trong trình duyệt
2. Click vào biểu tượng **⊕** trên thanh địa chỉ (bên phải)
3. Chọn **"Install"** hoặc **"Cài đặt"**
4. Ứng dụng sẽ được thêm vào desktop

### Trên Chrome (Android)

1. Mở ứng dụng trong Chrome
2. Nhấn vào menu **⋮** (3 chấm dọc)
3. Chọn **"Add to Home screen"** hoặc **"Thêm vào màn hình chính"**
4. Đặt tên và nhấn **"Add"**

### Trên Safari (iOS)

1. Mở ứng dụng trong Safari
2. Nhấn vào nút **Share** (hình vuông có mũi tên lên)
3. Cuộn xuống và chọn **"Add to Home Screen"**
4. Đặt tên và nhấn **"Add"**

## 🔄 Cập nhật

Để cập nhật ứng dụng lên phiên bản mới nhất:

```bash
cd bookmark-tools
git pull origin main
```

## ❓ Xử lý sự cố

### Không thể chạy local server

Đảm bảo bạn đã cài đặt Python hoặc Node.js. Kiểm tra bằng:

```bash
python --version
# hoặc
node --version
```

### Trang không load được

- Kiểm tra xem server có đang chạy không
- Đảm bảo port 8000 không bị sử dụng bởi ứng dụng khác
- Thử đổi sang port khác: `python -m http.server 3000`

### PWA không hiển thị nút cài đặt

- Đảm bảo đang truy cập qua HTTPS hoặc localhost
- Thử xóa cache trình duyệt
- Kiểm tra xem file `manifest.json` có tồn tại không

---

📖 Xem thêm: [Hướng dẫn sử dụng](Usage) | [Cấu hình](Configuration)
