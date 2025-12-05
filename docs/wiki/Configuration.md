# ⚙️ Hướng dẫn cấu hình

Hướng dẫn chi tiết cách tùy chỉnh danh sách URL trong **Bookmark Tools**.

## 📁 File cấu hình

Tất cả URL được định nghĩa trong file `root-urls.js` tại thư mục gốc của dự án.

```
bookmark-tools/
├── root-urls.js    ← File cấu hình URL
├── index.html
└── ...
```

## 📝 Cấu trúc cơ bản

```javascript
// root-urls.js
const urls = [
  {
    group: "🛠️ Tên nhóm",
    group_id: "ten_nhom",
    links: [
      {
        name: "Tên hiển thị",
        path: "https://example.com",
        title: "Mô tả tooltip",
        target: '_blank',
      },
      // Thêm nhiều liên kết khác...
    ]
  },
  // Thêm nhiều nhóm khác...
];
```

## 📋 Mô tả các thuộc tính

### Thuộc tính của nhóm (Group)

| Thuộc tính | Kiểu | Bắt buộc | Mô tả |
|------------|------|----------|-------|
| `group` | String | ✅ | Tên nhóm hiển thị (có thể dùng emoji) |
| `group_id` | String | ✅ | ID duy nhất cho nhóm (dùng cho DOM) |
| `links` | Array | ✅ | Mảng các liên kết trong nhóm |

### Thuộc tính của liên kết (Link)

| Thuộc tính | Kiểu | Bắt buộc | Mô tả |
|------------|------|----------|-------|
| `name` | String | ✅ | Tên hiển thị của liên kết |
| `path` | String | ✅ | URL đầy đủ của liên kết |
| `title` | String | ❌ | Mô tả hiển thị khi hover (tooltip) |
| `target` | String | ❌ | `'_blank'` để mở trong tab mới, bỏ qua để mở trong iframe |

## 📚 Ví dụ chi tiết

### Ví dụ 1: Nhóm công cụ online

```javascript
{
  group: "🛠️ Online Tools",
  group_id: "online_tools",
  links: [
    {
      name: "YouTube Downloader",
      path: "https://yt5s.rip/vi11/",
      title: "Tải xuống video YouTube miễn phí",
      target: '_blank',
    },
    {
      name: "TikTok Downloader",
      path: "https://snaptik.vn/",
      title: "Tải xuống video TikTok không watermark",
      target: '_blank',
    },
  ]
}
```

### Ví dụ 2: Nhóm tài liệu (mở trong iframe)

```javascript
{
  group: "📖 Tài liệu",
  group_id: "documents",
  links: [
    {
      name: "MDN Web Docs",
      path: "https://developer.mozilla.org/",
      title: "Tài liệu web từ Mozilla",
      // Không có target → mở trong iframe
    },
    {
      name: "W3Schools",
      path: "https://www.w3schools.com/",
      title: "Hướng dẫn HTML, CSS, JavaScript",
    },
  ]
}
```

### Ví dụ 3: Nhiều nhóm

```javascript
const urls = [
  {
    group: "🛠️ Tools",
    group_id: "tools",
    links: [
      { name: "Tool 1", path: "https://tool1.com" },
      { name: "Tool 2", path: "https://tool2.com" },
    ]
  },
  {
    group: "📖 Docs",
    group_id: "docs",
    links: [
      { name: "Doc 1", path: "https://doc1.com" },
      { name: "Doc 2", path: "https://doc2.com" },
    ]
  },
  {
    group: "🎮 Games",
    group_id: "games",
    links: [
      { name: "Game 1", path: "https://game1.com", target: '_blank' },
    ]
  },
];
```

## 🎨 Sử dụng Emoji

Bạn có thể dùng emoji trong tên nhóm để tạo điểm nhấn:

| Emoji | Gợi ý sử dụng |
|-------|---------------|
| 🛠️ | Công cụ |
| 📖 | Tài liệu |
| 🎮 | Giải trí |
| 💼 | Công việc |
| 🔗 | Liên kết |
| ⭐ | Yêu thích |
| 📱 | Ứng dụng |
| 🌐 | Web |

## ⚠️ Lưu ý quan trọng

### 1. Quy tắc đặt `group_id`

- Chỉ dùng chữ cái, số và underscore (`_`)
- Không dùng khoảng trắng hoặc ký tự đặc biệt
- Mỗi nhóm phải có `group_id` duy nhất

```javascript
// ✅ Đúng
group_id: "online_tools"
group_id: "my_docs"
group_id: "group1"

// ❌ Sai
group_id: "online tools"  // Có khoảng trắng
group_id: "my-docs"       // Có dấu gạch ngang
group_id: "nhóm 1"        // Có tiếng Việt và khoảng trắng
```

### 2. Khi nào dùng `target: '_blank'`

Sử dụng `target: '_blank'` cho các trang:
- Không cho phép hiển thị trong iframe (X-Frame-Options)
- Cần tương tác phức tạp (đăng nhập, thanh toán)
- Các trang lớn như Google, Facebook, YouTube

### 3. Tránh lỗi JavaScript

Đảm bảo cú pháp JavaScript đúng:
- Mỗi thuộc tính kết thúc bằng dấu phẩy (trừ thuộc tính cuối)
- Mỗi phần tử trong array kết thúc bằng dấu phẩy (trừ phần tử cuối)
- Sử dụng dấu nháy đúng: `"string"` hoặc `'string'`

```javascript
// ✅ Đúng
{
  name: "Test",
  path: "https://test.com",
  title: "Description"  // Không có dấu phẩy ở cuối
}

// ❌ Sai
{
  name: "Test"
  path: "https://test.com"  // Thiếu dấu phẩy
}
```

## 🔄 Áp dụng thay đổi

Sau khi chỉnh sửa file `root-urls.js`:

1. Lưu file
2. Refresh trang web (F5 hoặc Ctrl+R)
3. Kiểm tra danh sách URL mới

**Lưu ý:** File được load với timestamp để tránh cache, nên thay đổi sẽ được áp dụng ngay lập tức.

---

📖 Xem thêm: [Hướng dẫn sử dụng](Usage) | [FAQ](FAQ)
