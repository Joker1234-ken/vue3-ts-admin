<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>

type表示提交类别，scope表示修改范围，subject表示标题行， body表示主体描述内容。

type说明
feat:添加新特性
fix:修复bug
docs:仅仅修改了文档
style:仅仅修改了空格,格式缩进,逗号等等,不改变代码逻辑
refactor:代码重构,没有加新功能或者修复bug
perf:优化相关,比如提升性能,体验
test:添加测试用例
chore:改变构建流程,或者添加依赖库,工具等
revert:回滚到上一个版本

scope说明
非必填（建议填写），scope用于说明 commit 影响的范围，建议填写影响的功能模块。

如果你的修改影响了不止一个scope，你可以使用*代替。

subject说明
必填， commit 目的的简短描述，不超过50个字符。

以动词开头，使用第一人称现在时，比如change，而不是changed或changes
第一个字母小写
结尾不加句号

body说明
非必填（建议填写），可描述当前修改的行为详细信息或修改的目的。

footer说明
非必填，一般用于描述BREAKING CHANGE，在项目开发中一般不需要填写，组件研发的工程需要填写。
