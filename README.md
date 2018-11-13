# ffix

- Batch add file fix 批量为文件添加商标
- Batch remove file fix 批量为文件移除商标

## 安装

```
npm i -g ffix
```

## 使用方法 添加商标篇 ffix add
### 文件夹添加商标

```
进入需要加商标的文件夹目录时，默认为命令执行目录 即 process.cwd()

若需指定目录github 示例: ffix add -d demo github

# 给 执行目录 里面的文件夹添加后缀 "商标"
ffix add -d 商标

# 给 执行目录 里面的文件夹添加前缀 "商标"
ffix add -q 商标
```
### 文件添加商标
```
# 给 执行目录 里面的文件添加后缀 "商标"
ffix add -f 商标

# 给 执行目录 里面的文件添加前缀 "商标"
ffix add -p 商标
```

## 使用方法 移除商标篇
### 文件夹移除商标

```
进入需要移除商标的文件夹目录时，默认为命令执行目录 即 process.cwd()

若需指定目录github 示例: ffix remove -d demo github

# 给 执行目录 里面的文件夹后移除后缀 "商标"
ffix remove -d 商标

# 给 执行目录 里面的所有文件移除前缀 "商标"
ffix remove -q 商标
```
### 文件移除商标

```
进入需要移除商标的文件夹目录时，默认为命令执行目录 即 process.cwd()

若需指定目录github 示例: ffix remove -f demo github

# 给 执行目录 里面的文件夹后移除后缀 "商标"
ffix remove -f 商标

# 给 执行目录 里面的所有文件移除前缀 "商标"
ffix remove -p 商标
```

## 说明

- 商标添加或移除：后缀，前缀
- 以上里面的文件夹或文件均指所有
- 默认递归
- 文件夹 后缀参数为-d 前缀参数为 -q 
- 文件 后缀参数为-f 前缀参数为 -p
- 默认为命令执行目录  即 process.cwd() 如需改变 则在后面加上相对路径



