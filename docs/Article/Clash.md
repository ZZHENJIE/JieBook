---
title: Clash 安装与使用
layout: doc
---

## 安装

[下载地址](https://www.clash.la/releases/)

::: tip
请选择适合自己的安装包
:::
### Linux安装问题

可以直接运行可执行程序 但是没有快捷方式 下面就是在Ubuntu系统下创建快捷方式的方法

首先在桌面创建一个Clash.desktop的文件 在文件内写入以下内容

```desktop
[Desktop Entry]
Name=Clash //快捷方式名称
Exec=/opt/Clash/cfw //可执行程序路径
Terminal=false
Type=Application
Icon=/opt/Clash/internet.png //快捷方式图标路径
Categories=Network;
```

然后使用命令把desktop文件创建快捷方式`sudo mv ./Clash.desktop /usr/share/applications/`

## 使用

### 获取节点

打开[每日免费节点](https://clash-meta.github.io/free-nodes/)网站 打开最新日期的网页 复制订阅链接

<img src="/Article/Clash/FreeNode.png" style="height:400px;width:800px;" />

### Windows

1. 把[节点](#获取节点)链接复制到 Profiles 界面的输入框内 然后点击下载

<img src="/Article/Clash/PC1.png" style="height:400px;width:800px;" />

2. 选择下载好的.yaml 订阅

3. 在`Proxies`页面选择一个能连接的国外节点

<img src="/Article/Clash/PC2.png" style="height:400px;width:800px;" />

4. 在`General`页面打开System proxy选项

<img src="/Article/Clash/Windows1.png" style="height:400px;width:800px;" />

::: tip
设置完毕可以开心的科学上网了 需要科学上网时打开System proxy 不需要时关闭System proxy
:::

### Linux

1. 打开软件 并记住端口号

<img src="/Article/Clash/Linux1.png" style="height:400px;width:800px;" />

2. 把[节点](#获取节点)链接复制到 Profiles 界面的输入框内 然后点击下载

<img src="/Article/Clash/PC1.png" style="height:400px;width:800px;" />

3. 选择下载好的.yaml 订阅

4. 在`Proxies`页面选择一个能连接的国外节点

<img src="/Article/Clash/PC2.png" style="height:400px;width:800px;" />

5. 选择完后打开系统设置 选择网络 打开网络代理设置页面 在手动页面填写参数

<img src="/Article/Clash/Linux2.png" style="height:400px;width:800px;" />

::: tip
设置完毕可以开心的科学上网了 需要科学上网时选择网络代理为手动 不需要时选择已禁用
:::

### Android

1. 打开软件点击`配置`

<img src="/Article/Clash/Andriod1.png" style="height:700px;" />

2. 点击右上角添加按钮

<img src="/Article/Clash/Andriod2.png" style="height:700px;" />

3. 把[节点](#获取节点)链接复制,点击从URL导入内

<img src="/Article/Clash/Andriod3.png" style="height:700px;" />

4. `只需填写URL与名称` URL为复制的链接 然后点击右上角保存

<img src="/Article/Clash/Andriod4.png" style="height:700px;" />

5. 选中新的配置文件

<img src="/Article/Clash/Andriod2.png" style="height:700px;" />

6. 返回主页点击运行 然后点击代理

<img src="/Article/Clash/Andriod5.png" style="height:700px;" />

7. 选择一个能用的节点 就可以愉快的玩耍了

<img src="/Article/Clash/Andriod6.png" style="height:700px;" />
