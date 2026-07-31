// 公共导航栏组件 - 所有页面共用，只需引入此JS文件
// 使用方法：在页面body开头放置 <div id="nav-placeholder"></div> 并引入 <script src="nav.js"></script>
document.addEventListener('DOMContentLoaded', function() {
    var navHtml = `
    <nav>
        <h2><a href="index.html">Welcome</a></h2>
        <div class="nav-links">
            <a href="index.html">Resume</a>
            <a href="agent.html">agent</a>
            <a href="image-classification.html">图像分类</a>
            <a href="novel-app.html">小说app</a>
            <a href="vits.html">VITS语音</a>
            <a href="yolo.html">yolo</a>
        </div>
    </nav>`;

    var placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.innerHTML = navHtml;
    } else {
        document.body.insertAdjacentHTML('afterbegin', navHtml);
    }
});
