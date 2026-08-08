运行
mvn spring-boot:run
访问
http://localhost:8080/

结束进程
ctrl + c
命令行结束进程
kill -9 8080

更新github
git add.<!-- 更新全部文件 -->

git add src/main/resources/static/index.html src/main/resources/static/style.css
<!-- 更新指定文件 -->
git commit -m "Update HTML"<!-- 更新描述 -->

git push origin master<!-- 推送更新到github -->