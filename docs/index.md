# index.html 开发者文档

## 文件路径
`src/main/resources/static/index.html`

## 页面标题
Personal Profile

## 已实现功能
1. **公共导航栏**：通过引入 `nav.js` 自动加载导航栏，包含以下链接：
   - Welcome（logo，点击返回首页）
   - Resume（点击返回首页）
   - agent（跳转到 agent.html）
   - 图像分类（跳转到 image-classification.html）
   - 小说app（跳转到 novel-app.html）
   - VITS语音（跳转到 vits.html）
   - yolo（跳转到 yolo.html）
2. **简历页面（A4 PDF尺寸）**：对标标准A4纸（210mm × 297mm）的简历容器，居中显示，带阴影
3. **简历基础信息（上半部分）**：已排版以下信息（暂不包含头像图片）：
   - 姓名（大号加粗显示）
   - 性别
   - 出生年月
   - 电话
   - 邮箱
   - 民族
   - 籍贯
   - 政治面貌
   - 现居地
   - 信息采用双列网格布局，标签/值分离显示，底部分割线

## 依赖文件
- `style.css` - 导航栏等公共页面样式
- `resume.css` - 简历页面（A4容器 + 基础信息排版）独立样式文件
- `nav.js` - 公共导航栏组件
