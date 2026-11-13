---
layout: doc
---

# [FRP](https://github.com/fatedier/frp)使用

## 服务端

### 示例配置
```toml
bindPort = 7000
maxPortsPerClient = 10

#认证
[auth]
method = "token"
token = "secure_token"

#日志
[log]
level = "info"
maxDays = 3
to = "root/frp/frps.log"

#网页管理面板
[webServer]
addr = "0.0.0.0"
port = 7500
user = "admin"
password = "strong_password_123"

#允许的端口范围
[[allowPorts]]
start = 7010
end = 7020
```

### service文件示例
```
[Unit]
Description=Frps

[Service]
ExecStart=/root/frp/frps -c /root/frp/frps.toml

[Install]
WantedBy=multi-user.target
```

## 客户端
* GUI管理器 [Frpmgr](https://github.com/koho/frpmgr)

