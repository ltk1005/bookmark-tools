# ❓ Câu hỏi thường gặp (FAQ)

Tổng hợp các câu hỏi thường gặp khi sử dụng **Bookmark Tools**.

---

## 🔧 Cài đặt & Chạy

### Q: Làm thế nào để chạy ứng dụng trên máy tính?

**A:** Bạn cần một local web server. Cách đơn giản nhất:

```bash
# Clone repository
git clone https://github.com/ltk1005/bookmark-tools.git
cd bookmark-tools

# Chạy server với Python
python -m http.server 8000

# Mở trình duyệt
# Truy cập http://localhost:8000
```

Xem chi tiết tại [Hướng dẫn cài đặt](Installation).

---

### Q: Tại sao tôi không thể mở file `index.html` trực tiếp?

**A:** Do chính sách bảo mật CORS của trình duyệt. Khi mở file trực tiếp (`file://`), JavaScript không thể load file `root-urls.js`. Bạn cần chạy qua local server.

---

### Q: Làm sao để cài đặt ứng dụng như PWA trên điện thoại?

**A:** 

**Trên Android (Chrome):**
1. Mở trang web trong Chrome
2. Nhấn menu ⋮ → "Add to Home screen"

**Trên iOS (Safari):**
1. Mở trang web trong Safari
2. Nhấn nút Share → "Add to Home Screen"

---

## 📝 Sử dụng

### Q: Làm thế nào để thêm URL mới?

**A:** Chỉnh sửa file `root-urls.js`:

```javascript
{
  name: "Tên URL mới",
  path: "https://example.com",
  title: "Mô tả (tùy chọn)",
}
```

Xem chi tiết tại [Hướng dẫn cấu hình](Configuration).

---

### Q: Làm thế nào để tạo nhóm mới?

**A:** Thêm một object mới vào mảng `urls`:

```javascript
const urls = [
  // Nhóm hiện tại...
  
  // Nhóm mới
  {
    group: "📂 Nhóm mới",
    group_id: "nhom_moi",
    links: [
      { name: "Link 1", path: "https://link1.com" },
    ]
  },
];
```

---

### Q: Tìm kiếm không hoạt động?

**A:** Kiểm tra các điều sau:
- Ô tìm kiếm có được focus không?
- Có nhập đúng từ khóa không?
- Tìm kiếm chỉ lọc theo **tên** liên kết, không tìm theo URL

---

### Q: URL đã lưu không được khôi phục?

**A:** Ứng dụng lưu trạng thái trong `localStorage`. Nếu bạn:
- Xóa dữ liệu trình duyệt
- Sử dụng chế độ ẩn danh
- Đổi trình duyệt

→ Trạng thái sẽ bị mất.

---

## 🖼️ Hiển thị

### Q: Tại sao một số trang không hiển thị trong iframe?

**A:** Nhiều website chặn hiển thị trong iframe bằng header `X-Frame-Options` hoặc `Content-Security-Policy`. Các trang thường bị chặn:
- Google, YouTube
- Facebook, Instagram
- Twitter/X
- Các trang ngân hàng, thanh toán

**Giải pháp:** Sử dụng `target: '_blank'` để mở trong tab mới:

```javascript
{
  name: "YouTube",
  path: "https://youtube.com",
  target: '_blank',  // ← Thêm dòng này
}
```

---

### Q: Iframe hiển thị trang trắng?

**A:** Có thể do:
1. **URL sai** - Kiểm tra lại đường dẫn
2. **Trang bị chặn iframe** - Dùng `target: '_blank'`
3. **Lỗi HTTPS/HTTP** - Đảm bảo URL dùng HTTPS
4. **Lỗi mạng** - Kiểm tra kết nối internet

---

### Q: Làm sao để thay đổi kích thước sidebar?

**A:** Chỉnh sửa CSS trong file `index.html`:

```css
/* Tìm dòng này */
.col-md-3 { /* Sidebar 25% */ }

/* Đổi thành */
.col-md-4 { /* Sidebar 33% */ }
```

Các giá trị có thể dùng: `col-md-2` (17%), `col-md-3` (25%), `col-md-4` (33%)

---

## ⚙️ Cấu hình

### Q: Tôi có thể dùng tiếng Việt trong tên URL không?

**A:** Có, hoàn toàn được. Ví dụ:

```javascript
{
  name: "Công cụ tải video",
  path: "https://example.com",
  title: "Tải video từ YouTube, TikTok...",
}
```

---

### Q: Làm sao để thay đổi icon của ứng dụng?

**A:** Chỉnh sửa file `manifest.json`:

```json
{
  "icons": [
    {
      "src": "/assets/imgs/brand/your-icon.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

Đảm bảo file icon tồn tại tại đường dẫn đã chỉ định.

---

### Q: Làm sao để thay đổi màu nền ứng dụng?

**A:** Trong `manifest.json`:

```json
{
  "background_color": "#0d6efd",  // Màu nền khi load
  "theme_color": "#fff"           // Màu thanh trạng thái
}
```

---

## 🐛 Xử lý lỗi

### Q: Lỗi "urls is not defined"?

**A:** Có vấn đề với file `root-urls.js`:
1. Kiểm tra file có tồn tại không
2. Kiểm tra cú pháp JavaScript (dấu phẩy, ngoặc)
3. Mở Console (F12) để xem chi tiết lỗi

---

### Q: Lỗi CORS khi load dữ liệu?

**A:** Bạn đang mở file trực tiếp. Hãy chạy qua local server:

```bash
python -m http.server 8000
```

---

### Q: Ứng dụng không cập nhật sau khi chỉnh sửa?

**A:** 
1. **Hard refresh:** Ctrl+Shift+R (Windows) hoặc Cmd+Shift+R (Mac)
2. **Xóa cache:** F12 → Network → "Disable cache" ✓
3. File `root-urls.js` đã được load với timestamp để tránh cache

---

## 📞 Hỗ trợ

### Q: Tôi cần hỗ trợ thêm, liên hệ ai?

**A:** 
- Tạo issue tại: [GitHub Issues](https://github.com/ltk1005/bookmark-tools/issues)
- Xem thêm tài liệu: [Wiki](Home)

---

📖 Xem thêm: [Home](Home) | [Hướng dẫn cài đặt](Installation) | [Cấu hình](Configuration)
