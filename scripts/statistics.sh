#!/bin/bash
# 获取当前文件夹下的所有文件夹名称（排除名为"scripts"、"node_modules"、".git"、".vscode"的文件夹）
dirs=$(ls -l | grep ^d | awk '{print $NF}' | grep -v "scripts\|node_modules\|\.git\|\.vscode")
# 创建一个空字符串，用于构建Markdown表格
table=''
# 遍历每个文件夹，统计其下的所有.js、.ts、.c文件数量，并将结果添加到Markdown表格中
for dir in $dirs
do
  # 统计该文件夹下的所有.js、.ts、.c文件数量
  count=$(find $dir -name "*.js" -o -name "*.ts" -o -name "*.c" | wc -l)
  # 如果该文件夹下有.js、.ts、.c文件，则将结果添加到Markdown表格中
  if [ $count -gt 0 ]
  then
    # 将文件夹名称和文件数量添加到Markdown表格中
    table=$table"| $dir | $count |\\
"
  fi
done
# 将README.md 文件中 <!--START_TABLE-->和<!--END_TABLE-->| 中间包裹的部分替换为Markdown表格，并保留头尾标识
sed -i '' '/<!--START_TABLE-->/, /<!--END_TABLE-->/c\
'"<!--START_TABLE-->\\
| 文件夹 | 文件数量 |\\
| --- | --- |\\
$table\\
<!--END_TABLE-->\\
"'' README.md

echo "Stastics coumputed completed!"