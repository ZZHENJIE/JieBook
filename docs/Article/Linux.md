---
layout: doc
---

# [Linux](https://github.com/torvalds/linux)常用命令

## [Systemd](https://man7.org/linux/man-pages/man1/systemd.1.html)

Systemd 是一个系统服务管理器

### [单元文件](https://man7.org/linux/man-pages/man5/systemd.unit.5.html)

单元文件是系统服务配置文件,有分许多类型,如service、socket、device、mount、automount、swap、target、path、timer、snapshot等等

```
# 示例service文件
[Unit]
# 描述
Description=Foo

[Service]
# 启动命令
ExecStart=/usr/sbin/foo-daemon

[Install]
# 启动目标(一般不需要修改)
WantedBy=multi-user.target
```

### [systemctl](https://www.man7.org/linux/man-pages/man1/systemctl.1.html) 常用命令

systemctl 是一个用于管理systemd服务的命令行工具.

* 启动服务 `systemctl start [服务名]`
* 服务状态 `systemctl status [服务名]`
* 停止服务 `systemctl stop [服务名]`
* 重启服务 `systemctl restart [服务名]`
* 重新加载配置 `systemctl reload [服务名]`
* 设置服务自启动 `systemctl enable [服务名]`
* 取消服务自启动 `systemctl disable [服务名]`
* 查看服务是否启动 `systemctl is-enabled [服务名]`
* 编辑单元文件 `systemctl edit [服务名]`
* 查看单元文件 `systemctl cat [服务名]`
* 重新加载所有单元文件 `systemctl daemon-reload`

### [journalctl](https://man7.org/linux/man-pages/man1/journalctl.1.html) 常用命令

journalctl 是系统日志管理工具,用于查看系统日志,查看服务日志,查看系统启动日志,查看系统错误日志等等.

* 查看日志 `journalctl -u [服务名]`
* 查看日志并跟随 `journalctl -fu [服务名]`
