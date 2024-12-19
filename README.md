# NYCU_GDSC-frontend-project
> [NYCU GDSC 前端開發課程](https://github.com/chou-ting-wei/NYCU_GDSC-frontend) 專案  

## 目標

完成一個基於 React 的前端頁面，並將其整合到現有的專案路由中

## 環境設置

1. 確保已安裝 [Node.js](https://nodejs.org/) 與 npm。
2. 將專案 clone 下來後，進入專案的 frontend 資料夾：
   ```
   cd frontend
   ```
3. 安裝必要的 dependency：
   ```
   npm install
   ```
4. 啟動開發伺服器：
   ```
   npm run dev
   ```
5. 開啟瀏覽器並訪問 http://localhost:5173/

## 開發要求

1. **分支要求**

   - 需從 `main` 建立一個新的分支，分支命名格式為：`feature/<your-page-name>`，例如：`feature/my-page`

2. **新增頁面路由**

   - 在 app.tsx 中新增一個頁面路由，確保路由名稱與頁面內容匹配
   - 路由名稱可以自行設定，例如：`/my-page`

3. **頁面主題**

   - 主題內容可隨機選擇，例如「個人簡介」、「隨機圖片展示」、「動態表格」等
   - 確保頁面具備一定的互動性

4. **新增元件**

   - 在 src/component 資料夾中新增與您的頁面相關的元件檔案（`.jsx` 與 `.css`）

5. **整合頁面**
   - 在新增的頁面中引用自定義元件
   - 將頁面內容顯示在新增的路由中，並確保頁面能正常顯示

## 文件結構

```
frontend/
├── src
│   ├── App.css
│   ├── App.jsx              # 路由設定
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   └── Home.jsx
│   │   ├── MyComponent.jsx  # 新增的 jsx 檔案
│   │   ├── MyComponent.css  # 新增的 CSS 檔案
│   ├── index.css
│   ├── main.jsx
│   ├── ...
├── vite.config.js
└── ...
```

## 備註

1. 開發內容需在個人分支中完成，並透過 Pull Request 提交進行代碼審查

2. 確保頁面路由與頁面內容匹配，並正確呈現在瀏覽器中
