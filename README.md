# 翻譯網頁專案

> 一個翻譯網頁，使用 [Gary0302](https://github.com/Gary0302/gemini_flask_api) 提供的翻譯 API，並採用 Svelte 與 Vite 作為主要技術。


## 專案簡介
本專案為一個簡單易用的翻譯網頁應用程式，透過 Flask API 提供多語言翻譯服務，幫助用戶快速地進行文字翻譯。API [Gary0302/gemini_flask_api](https://github.com/Gary0302/gemini_flask_api)

## 技術特色
- **主要依賴**：
- `@sveltejs/vite-plugin-svelte@3.1.2`：Vite 中的 Svelte 插件
- `axios@1.7.7`：用於與 API 進行 HTTP 請求
- `svelte@4.2.19`：前端框架，用於創建 UI 組件
- `vite@5.4.9`：前端構建工具


## 安裝與執行

### 前置需求
- Node.js v14+ 
- 已啟用的 Flask API Server，詳細請參考 [gemini_flask_api](https://github.com/Gary0302/gemini_flask_api)

# 複製專案
git clone https://github.com/你的帳號/你的專案名稱.git

# 進入專案目錄
cd /home/user/translator

# 安裝依賴
npm install

# 啟動專案
npm run dev
