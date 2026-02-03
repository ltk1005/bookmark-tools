# 📚 Bookmark Tools

Một ứng dụng web đơn giản giúp quản lý và truy cập nhanh danh sách các URL hữu ích theo nhóm. Ứng dụng được thiết kế như một Progressive Web App (PWA) có thể cài đặt trên thiết bị và sử dụng offline.

## ✨ Tính năng

- 📋 **Quản lý URL theo nhóm**: Tổ chức các liên kết theo danh mục để dễ dàng tìm kiếm
- 🔍 **Tìm kiếm nhanh**: Tìm kiếm liên kết theo tên với bộ lọc real-time
- 🖼️ **Xem trực tiếp**: Xem nội dung trang web ngay trong ứng dụng thông qua iframe
- 💾 **Lưu trạng thái**: Tự động lưu URL đã mở lần cuối để tiếp tục khi quay lại
- 📱 **PWA Support**: Có thể cài đặt như ứng dụng trên điện thoại và máy tính
- 🔄 **Tải lại nhanh**: Nút reload để làm mới nội dung đang xem

## 🚀 Demo

Truy cập ứng dụng tại: [GitHub Pages](https://ltk1005.github.io/bookmark-tools/)

## 📦 Cài đặt

### Sử dụng trực tiếp

1. Clone repository:
```bash
git clone https://github.com/ltk1005/bookmark-tools.git
```

2. Mở file `index.html` bằng trình duyệt hoặc sử dụng local server:
```bash
# Sử dụng Python
python -m http.server 8000

# Hoặc sử dụng Node.js
npx serve .
```

3. Truy cập `http://localhost:8000` trong trình duyệt

### Cài đặt như PWA

1. Mở ứng dụng trong trình duyệt (Chrome, Edge, Safari)
2. Click vào biểu tượng cài đặt trên thanh địa chỉ
3. Chọn "Install" hoặc "Add to Home Screen"

## 📝 Hướng dẫn sử dụng

### Thêm URL mới

Chỉnh sửa file `root-urls.js` để thêm các URL mới:

```javascript
const urls = [
  {
    group: "🛠️ Online Tools",
    group_id: "online_tools",
    links: [
      {
        name: "Tên hiển thị",
        path: "https://example.com",
        title: "Mô tả tooltip",
        target: '_blank', // Mở trong tab mới (tùy chọn)
      },
      // Thêm nhiều liên kết khác...
    ]
  },
  // Thêm nhiều nhóm khác...
];
```

### Cấu hình các thuộc tính

| Thuộc tính | Mô tả | Bắt buộc |
|------------|-------|----------|
| `group` | Tên nhóm (có thể dùng emoji) | ✅ |
| `group_id` | ID duy nhất cho nhóm | ✅ |
| `links` | Mảng các liên kết trong nhóm | ✅ |
| `name` | Tên hiển thị của liên kết | ✅ |
| `path` | URL của liên kết | ✅ |
| `title` | Mô tả hiển thị khi hover (tooltip) | ❌ |
| `target` | Mở trong tab mới (`_blank`) hoặc iframe | ❌ |

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Giao diện và responsive design
- **JavaScript (Vanilla)** - Logic ứng dụng
- **Bootstrap 5** - UI Framework
- **Font Awesome** - Icon library
- **Web App Manifest** - PWA support

## 📁 Cấu trúc dự án

```
bookmark-tools/
├── index.html          # Trang chính
├── root-urls.js        # Danh sách URL
├── manifest.json       # PWA manifest
├── assets/             # Tài nguyên
│   ├── css/           # Style sheets
│   └── js/            # JavaScript files
├── docs/              # Tài liệu
│   └── wiki/          # Wiki documentation
├── CHANGELOG.md       # Lịch sử thay đổi
├── LICENSE            # MIT License
└── README.md          # File này
```

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork dự án
2. Tạo branch mới (`git checkout -b feature/TinhNangMoi`)
3. Commit thay đổi (`git commit -m 'Thêm tính năng mới'`)
4. Push lên branch (`git push origin feature/TinhNangMoi`)
5. Tạo Pull Request

## 📄 License

Dự án được phát hành dưới giấy phép [MIT License](LICENSE).

## 📞 Liên hệ

- GitHub: [@ltk1005](https://github.com/ltk1005)
- Issues: [GitHub Issues](https://github.com/ltk1005/bookmark-tools/issues)

---

⭐ Nếu dự án hữu ích, hãy cho một star nhé!