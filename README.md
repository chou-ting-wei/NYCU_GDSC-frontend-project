# NYCU_GDSC-frontend-project

## 目標

完成一個基於 React 的前端頁面，並將其整合到現有的專案路由中。

## 環境設置

1. 確保您已安裝 [Node.js](https://nodejs.org/) 與 npm。
2. 將專案 clone 下來後，進入專案的 frontend 資料夾：
   ```
   cd frontend
   ```
3. 安裝必要的依賴：
   ```
   npm install
   ```
4. 啟動開發伺服器：
   ```
   npm run dev
   ```
5. 開啟瀏覽器並訪問：
   ```
   http://localhost:5173/
   ```

## 開發要求

1. **分支要求**

   - 每位開發者需從 `dev` 建立一個新的分支，分支命名格式為：`feature/<your-page-name>`，例如：`feature/my-page`。
   - 在分支中進行所有的開發工作，並確保最終提交前完成分支合併。

2. **新增頁面路由**

   - 在 app.tsx 中新增一個屬於您的頁面路由，確保路由名稱與頁面內容匹配。
   - 路由名稱可以自行設定，例如：`/my-page`。

3. **頁面主題**

   - 主題內容可隨機選擇，例如「個人簡介」、「隨機圖片展示」、「動態表格」等。
   - 確保頁面具備一定的互動性。

4. **新增元件**

   - 在 src/component 資料夾中新增與您的頁面相關的元件檔案（`.jsx` 與 `.css`）。
   - 元件應具備分離的樣式檔案，並符合 React 的組件化設計。

5. **整合頁面**
   - 在新增的頁面中引用自定義元件。
   - 將頁面內容顯示在新增的路由中，並確保頁面能正常導航。

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

1. 分支提交

   - 所有開發內容需在個人分支中完成，並透過 Pull Request 提交進行代碼審查。
   - 合併至主分支前，確保分支已更新至最新的主分支版本，並解決所有衝突。

2. 確保頁面路由與頁面內容匹配，並正確呈現在瀏覽器中。
3. 使用 React 組件化的設計方式，確保程式碼可讀性與可維護性。
4. 元件應具有分離的樣式檔案，並遵循基本的 CSS 規範。
