# index.html 开发者文档

## 文件路径
`src/main/resources/static/index.html`

## 页面标题
Personal Profile

## 已实现功能
1. **首页展示**：显示 "Hello World!" 标题
2. **公共导航栏**：通过引入 `nav.js` 自动加载导航栏，包含以下链接：
   - Welcome（logo，点击返回首页）
   - Resume（点击返回首页）
   - agent（跳转到 agent.html）
   - 图像分类（跳转到 image-classification.html）
   - 小说app（跳转到 novel-app.html）
   - VITS语音（跳转到 vits.html）
   - yolo（跳转到 yolo.html）
3. **样式引入**：通过 `style.css` 统一管理页面样式

## 依赖文件
- `style.css` - 页面样式
- `nav.js` - 公共导航栏组件
