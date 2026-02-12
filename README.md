# 📚 Bookmark Tools

Một ứng dụng web đơn giản giúp quản lý và truy cập nhanh danh sách các URL hữu ích theo nhóm. Ứng dụng được thiết kế như một Progressive Web App (PWA) có thể cài đặt trên thiết bị và sử dụng offline.

## ✨ Tính năng

- 📋 **Quản lý URL theo nhóm**: Tổ chức các liên kết theo danh mục để dễ dàng tìm kiếm
- 🔍 **Tìm kiếm nhanh**: Tìm kiếm liên kết theo tên, tiêu đề hoặc URL với bộ lọc real-time
- 🖼️ **Xem trực tiếp**: Xem nội dung trang web ngay trong ứng dụng thông qua iframe
- 💾 **Lưu trạng thái**: Tự động lưu URL đã mở lần cuối và trạng thái sidebar để tiếp tục khi quay lại
- 📱 **PWA Support**: Có thể cài đặt như ứng dụng trên điện thoại và máy tính
- 🔄 **Tải lại nhanh**: Nút reload để làm mới nội dung đang xem
- ↔️ **Sidebar thu gọn**: Thu nhỏ/mở rộng sidebar để tối ưu không gian xem
- 🖥️ **Chế độ toàn màn hình**: Xem nội dung iframe ở chế độ toàn màn hình
- 🔗 **Menu ngữ cảnh**: Click phải vào liên kết để xem thêm tùy chọn (sao chép link, mở tab mới, xem chi tiết, v.v.)
- 💡 **Xem chi tiết**: Modal hiển thị thông tin đầy đủ về mỗi liên kết

## 🚀 Demo

Truy cập ứng dụng tại: [https://ltk1005.github.io/bookmark-tools/](https://ltk1005.github.io/bookmark-tools/)

<!-- 
### Screenshots

![Bookmark Tools Interface](assets/imgs/screenshot.png)
> _Giao diện chính của Bookmark Tools với sidebar, tìm kiếm và iframe viewer_
-->

## 📦 Cài đặt

### Yêu cầu hệ thống

- Trình duyệt hiện đại hỗ trợ HTML5, CSS3, và JavaScript ES6+
- Khuyến nghị: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Hỗ trợ PWA: Chrome, Edge, Safari (iOS 11.3+)

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

### Giao diện và thao tác cơ bản

- **Tìm kiếm**: Nhập từ khóa vào ô tìm kiếm để lọc liên kết theo tên, tiêu đề hoặc URL
- **Mở liên kết**: Click vào tên liên kết để xem trong iframe (hoặc mở tab mới nếu có cấu hình `target: '_blank'`)
- **Thu gọn sidebar**: Click vào nút mũi tên (◄/►) để thu nhỏ/mở rộng sidebar
- **Toàn màn hình**: Click nút expand (⛶) để xem iframe ở chế độ toàn màn hình
- **Reload**: Click nút reload (🔄) để làm mới nội dung đang xem
- **Menu ngữ cảnh**: Click phải vào liên kết để:
  - Xem chi tiết (Show Hint)
  - Mở trong tab mới (Open in New Tab)
  - Sao chép link (Copy Link)
  - Mở DevTools (Open DevTools)

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
| `description` | Mô tả chi tiết (hiển thị trong hint modal) | ❌ |
| `hints` | Mảng các gợi ý/lưu ý bổ sung | ❌ |
| `target` | Mở trong tab mới (`_blank`) hoặc iframe | ❌ |

## 🛠️ Công nghệ sử dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Giao diện và responsive design
- **JavaScript (Vanilla)** - Logic ứng dụng
- **jQuery 3.7.1** - DOM manipulation và event handling
- **Bootstrap 5.3.3** - UI Framework
- **Font Awesome 5.15.3** - Icon library
- **Google Fonts (Inter)** - Typography
- **Web App Manifest** - PWA support

## ⌨️ Phím tắt và Accessibility

- **ESC** - Đóng modal hoặc menu ngữ cảnh
- **Enter/Space** - Kích hoạt liên kết hoặc nhóm đang focus
- **Tab** - Di chuyển giữa các phần tử có thể tương tác
- Hỗ trợ **ARIA labels** cho screen reader
- Hỗ trợ **keyboard navigation** đầy đủ

## 📁 Cấu trúc dự án

```
bookmark-tools/
├── index.html          # Trang chính (chứa HTML, CSS, JS)
├── root-urls.js        # Danh sách URL và cấu hình
├── manifest.json       # PWA manifest
├── LICENSE             # MIT License
├── README.md           # File này
├── CHANGELOG.md        # Lịch sử thay đổi
├── .version.txt        # Số phiên bản hiện tại
├── assets/             # Tài nguyên (CSS, JS, hình ảnh)
│   ├── css/           # Style sheets
│   ├── js/            # JavaScript files
│   └── imgs/          # Images và icons
├── docs/              # Tài liệu
│   └── wiki/          # Wiki documentation
├── .github/           # GitHub workflows và cấu hình
└── .vscode/           # VS Code settings
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