---
title: Git 命令
layout: doc
---

# [官网](https://git-scm.com/)

## 初始化config
* 使用git config -l 可列出git当前配置信息  
* 使用git config --global user.name "名字" 来配置git个人名字  
* 使用git config --global user.email "邮箱" 来配置git个人邮箱

## 增加/删除文件
* git add [file] 添加指定文件到暂存区  
* git add [dir] 添加指定目录到暂存区  
* git add . 添加所有文件到暂存区  
* git add -p 添加每个变化前，都会要求确认  
* git rm [file] 删除工作区文件，并且会把删除添加到暂存区  
* git rm --cached [file] 停止追踪指定文件，但该文件会保留在工作区  
* git mv [file-original] [file-renamed] 改名文件，并且将这个改名放入暂存区

## 代码提交
* git commit -m [message] 提交暂存区到仓库区  
* git commit [file1] [file2] ... -m [message] 提交暂存区的指定文件到仓库区
* git push 代码提交完需要使用该命令上传

## 分支
* git branch git branch  
* git branch -r 列出所有远程分支  
* git branch -a 列出所有本地分支和远程分支  
* git branch [branch-name] 新建一个分支，但依然停留在当前分支  
* git checkout -b [branch]  新建一个分支，并切换到该分支  
* git checkout [branch-name] 切换到指定分支，并更新工作区  
* git branch -d [branch-name] 删除分支

## 错误合集

### 克隆时报SSL错误
* git config --global http.sslVerify false
* git config --global https.sslVerify false

### 提交代码或克隆时卡死 用Clash代理工具
* git config --global http.proxy http://127.0.0.1:7890
* git config --global https.proxy http://127.0.0.1:7890

代理端口为Clash设置的端口