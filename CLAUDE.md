# dennislzy.github.io

Dennis 的個人履歷 / 作品集網站,部署在 GitHub Pages(user page)。

## 技術棧

- **框架**:Next.js(App Router)
- **語言**:TypeScript
- **UI 套件**:MUI (Material UI)
- **部署**:GitHub Pages,透過 `next export` 產出純靜態檔案

## GitHub Pages 部署的關鍵限制(務必遵守)

這是 user page(`dennislzy.github.io`),不是 project page,所以**不需要** `basePath`/`assetPrefix`。但靜態匯出本身有以下限制,寫程式碼時要避開:

- `next.config.ts` 必須設定 `output: 'export'`
- **不能用**任何需要 Node.js server 的功能:
  - 不能用 API Routes(`app/api/*`)
  - 不能用 Server Actions
  - 不能用 ISR(`revalidate`)、SSR(`dynamic` rendering)
  - 動態路由(`[slug]`)必須搭配 `generateStaticParams` 產生所有頁面
- **圖片**:`next/image` 在靜態匯出下無法用內建的圖片優化伺服器,`next.config.ts` 需設定 `images: { unoptimized: true }`
- 匯出後的靜態檔案在 `out/` 目錄,部署時要把 `out/` 的內容推到 GitHub Pages 使用的分支(或透過 GitHub Actions 自動部署)
- 根目錄需要 `.nojekyll` 檔案(放在 `public/` 下,build 後會一起複製到 `out/`),避免 GitHub Pages 用 Jekyll 處理含底線開頭的 `_next` 資料夾導致資源讀不到

## MUI + App Router 注意事項

- App Router 預設是 Server Component,但 MUI 元件多半需要 client-side 的 emotion cache,記得設定 `ThemeRegistry`(用 `AppRouterCacheProvider` 包起來),放在根 layout
- 用到 `useState`、`useTheme`、事件處理的元件要加 `'use client'`
- 主題設定(顏色、字體)集中放在一個 `theme.ts`,不要散落在各元件裡重複定義

## 目錄結構慣例

```
app/
  layout.tsx          # 根 layout,放 ThemeRegistry、Metadata
  page.tsx             # 首頁
  [其他頁面]/page.tsx
components/            # 共用元件
theme/
  theme.ts             # MUI theme 設定
public/
  .nojekyll
  [圖片、履歷 PDF 等靜態資源]
```

## 常用指令

```bash
npm run dev       # 本機開發伺服器
npm run build     # 建置 + 靜態匯出(產出 out/)
npm run lint      # ESLint 檢查
```

## 撰寫慣例

- Component 一律用 function component + TypeScript,不用 class component
- 檔名用 PascalCase(元件)或 camelCase(工具函式)
- 樣式優先用 MUI 的 `sx` prop 或 theme 設定,避免額外寫一堆自訂 CSS
- commit message 用 conventional commits(例如 `feat: add about section`、`fix: image not loading on GitHub Pages`)

## 已知雷區

- 忘記設 `images.unoptimized: true` 會導致 build 時圖片報錯或在正式環境圖片根本不顯示
- 忘記 `.nojekyll` 會導致 CSS/JS 載入失敗(404)
- 用了 API Route 或 Server Action 會導致 `next build` 失敗(因為設了 `output: 'export'`)
