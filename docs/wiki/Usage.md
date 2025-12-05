# 📝 Hướng dẫn sử dụng

Hướng dẫn chi tiết cách sử dụng **Bookmark Tools** để quản lý và truy cập URL hiệu quả.

## 🖥️ Giao diện chính

Ứng dụng được chia thành 2 phần chính:

```
┌─────────────────────────────────────────────────────────┐
│  📄 Danh sách trang                    │  [🔄 Tải lại] │
│  ┌─────────────────────┐               │               │
│  │ 🔍 Tìm kiếm...      │               │               │
│  └─────────────────────┘               │               │
│                                        │               │
│  🛠️ Online Tools ▲                     │               │
│  ├─ YouTube miễn phí                   │    IFRAME     │
│  ├─ Trình tải xuống video              │    CONTENT    │
│  ├─ Tải xuống video Tiktok             │               │
│  └─ Tải video Facebook                 │               │
│                                        │               │
│  📂 Nhóm khác ▲                        │               │
│  ├─ Liên kết 1                         │               │
│  └─ Liên kết 2                         │               │
│                                        │               │
└─────────────────────────────────────────────────────────┘
     SIDEBAR (25%)                           MAIN (75%)
```

### Sidebar (Thanh bên trái)

- **Ô tìm kiếm**: Nhập từ khóa để lọc liên kết
- **Danh sách nhóm**: Các URL được tổ chức theo nhóm
- **Các liên kết**: Click để xem nội dung

### Main Content (Nội dung chính)

- **Nút Tải lại**: Làm mới nội dung đang xem
- **Iframe**: Hiển thị nội dung trang web đã chọn

## 🔍 Tìm kiếm

1. Click vào ô **"Tìm kiếm..."**
2. Nhập từ khóa cần tìm
3. Danh sách sẽ tự động lọc theo tên liên kết
4. Xóa từ khóa để hiển thị lại toàn bộ

**Ví dụ:**
- Nhập `YouTube` → Hiển thị các liên kết có chứa "YouTube"
- Nhập `tải` → Hiển thị các liên kết có chứa "tải"

## 📌 Xem nội dung

### Xem trong iframe

1. Click vào tên liên kết trong sidebar
2. Liên kết đang xem sẽ được đánh dấu 🔵
3. Nội dung trang web hiển thị bên phải

### Mở trong tab mới

Một số liên kết được cấu hình mở trong tab mới (có `target: '_blank'`):
1. Click vào liên kết
2. Một tab/cửa sổ mới sẽ mở ra
3. Liên kết này không hiển thị trong iframe

## 🔄 Làm mới nội dung

Nếu trang web trong iframe không load đúng:

1. Click nút **"🔄 Tải lại"** ở góc trên bên phải
2. Iframe sẽ tự động reload trang đang xem

## 💾 Lưu trạng thái

Ứng dụng tự động lưu URL bạn đang xem:

- Khi đóng và mở lại ứng dụng, URL cuối cùng sẽ được khôi phục
- Dữ liệu được lưu trong `localStorage` của trình duyệt
- Xóa dữ liệu trình duyệt sẽ xóa trạng thái đã lưu

## ⌨️ Phím tắt

| Phím | Chức năng |
|------|-----------|
| `Ctrl + Shift + Y` | Toggle feature (Windows/Mac) |
| `Ctrl + Shift + U` | Toggle feature (Linux) |

## 📱 Sử dụng trên Mobile

1. Mở ứng dụng trên trình duyệt mobile
2. Sidebar nằm ở phía trên (responsive)
3. Scroll xuống để xem nội dung iframe
4. Cài đặt PWA để trải nghiệm tốt hơn

## ⚠️ Lưu ý quan trọng

### Một số trang không hiển thị được trong iframe

Do chính sách bảo mật **X-Frame-Options** của một số website:
- Google, Facebook, và nhiều trang lớn không cho phép embed
- Những trang này nên được cấu hình với `target: '_blank'`
- Xem [Cấu hình](Configuration) để biết cách thiết lập

### Tooltip

- Hover chuột lên liên kết để xem mô tả chi tiết
- Tooltip hiển thị nội dung từ thuộc tính `title`

---

📖 Xem thêm: [Cấu hình](Configuration) | [FAQ](FAQ)
