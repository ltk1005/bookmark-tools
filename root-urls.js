// root-urls.js

/**
 * @typedef {Object} LinkItem
 * @description Individual link item with metadata
 * @author QuyIT Platform
 * @property {string} name // e.g., display name
 * @property {string} path // e.g., URL or relative path
 * @property {string} [title] // e.g., tooltip text
 * @property {string} [description] // e.g., brief description
 * @property {string} [target] // e.g., "_blank"
 * @property {string[]} [hints] // Additional hints or notes
 */

/**
 * @typedef {Object} UrlGroup
 * @description Group of URLs with metadata and links
 * @author QuyIT Platform
 * @version 1.0.0
 * @property {string} group // e.g., group name
 * @property {string} group_id // e.g., group identifier
 * @property {LinkItem[]} links // Array of link items
 */

/** @type {UrlGroup[]} */
const urls = [
  {
    group: "🛠️ Online Tools",
    group_id: "online_tools",
    links: [
      {
        name: "Trình tải xuống video YouTube",
        path: "https://yt5s.rip/vi11/",
        title: "Trình tải xuống video YouTube trực tuyến miễn phí tại yt5s.best",
        target: '_blank',
      },
      {
        name: "Tải xuống video Tiktok (Douyin)",
        path: "https://snaptik.vn/",
        title: "Tải xuống video Tiktok (Douyin) không có watermark miễn phí",
        target: '_blank',
      },
      {
        name: "Tải Video TikTok HD Không Logo, Download Mp3 Miễn Phí",
        path: "https://snapsave.vn/tiktok",
        title: "Tải Video TikTok HD Không Logo, Download Mp3 Miễn Phí",
        target: '_blank',
      },
      {
        name: "Tải video Facebook",
        path: "https://vi.clipsave.net/",
        title: "Cách tải xuống video và Reels Facebook một cách dễ dàng",
        target: '_blank',
      },
      {
        name: "Download video",
        path: "https://downloadvideo.vn/vi",
        title: "Tải video từ nhiều nền tảng như YouTube, Facebook, TikTok...",
        target: '_blank',
      },
    ],
  },
];
