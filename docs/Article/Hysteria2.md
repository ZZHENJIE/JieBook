---
layout: doc
---

# [Hysteria2](https://github.com/apernet/hysteria)安装与配置

## 安装 
使用官方[脚本](https://v2.hysteria.network/zh/docs/getting-started/Installation/#linux)
```bash
bash <(curl -fsSL https://get.hy2.sh/)
```

## 配置
### 服务端
#### 1.进入`/etc/hysteria`并生成自签名证书
```bash
openssl req -x509 -nodes -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -keyout hysteria.key -out hysteria.crt -subj "/CN=hy2" -days 36500
# 可选 可能打开生成的hysteria.key需要权限会报错就执行
sudo chmod 664 hysteria.crt hysteria.key
```
#### 2.编辑配置文件 `config.yaml`
```yaml
listen: :<部署端口 默认443即可>

tls:
  cert: /etc/hysteria/hysteria.crt
  key: /etc/hysteria/hysteria.key

auth:
  type: password
  password: <自定义密码>

masquerade:
  type: proxy
  proxy:
    url: https://www.bing.com
    rewriteHost: true

bandwidth:
  up: 10 mbps
  down: 10 mbps
```
#### 3.重启并查看服务是否正常运行
```bash
# 重启
systemctl restart hysteria-server.service
# 查看状态是否为 active
systemctl status hysteria-server.service
```

### 客户端 ***使用的是[FLClash](./FLClash.md)的配置文件示例***
```yaml
port: 7890
external-controller: 127.0.0.1:9090
mode: rule
log-level: info

proxies:
  - name: "Hysteria2"
    type: hysteria2
    server: <部署的服务器IP>
    port: <配置的服务端口>
    password: <配置的密码>
    alpn:
      - h3
    sni: hy2
    skip-cert-verify: true
    bandwidth:
      up: "10mbps"
      down: "10mbps"

proxy-groups:
  - name: "PROXY"
    type: select
    proxies:
      - "Hysteria2"

rules:
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```
