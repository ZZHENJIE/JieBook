---
layout: doc
---

# [Hysteria2](https://github.com/apernet/hysteria)安装与使用

## 服务端

### 1. [安装](https://v2.hysteria.network/zh/docs/getting-started/Installation/)

### 2. 配置
配置文件目录 `/etc/hysteria/config.yaml` 完整服务端[配置](https://v2.hysteria.network/zh/docs/advanced/Full-Server-Config/#__tabbed_1_1)

#### 无域名无TLS证书配置示例

生成自签名证书`openssl req -x509 -nodes -newkey ec -pkeyopt ec_paramgen_curve:prime256v1 -keyout hysteria.key -out hysteria.crt -subj "/CN=hy2" -days 36500`

:::tip
如果报错`{"error": "invalid config: tls.key: open /etc/hysteria/hysteria.key: permission denied"}`

请给 hysteria.crt  hysteria.key 权限 `sudo chmod 664 hysteria.crt hysteria.key`
:::

```yaml
listen: :443

tls:
  cert: /etc/hysteria/hysteria.crt
  key: /etc/hysteria/hysteria.key

auth:
  type: password
  password: #密码

masquerade:
  type: proxy
  proxy:
    url: https://www.bing.com
    rewriteHost: true

bandwidth:
  up: 10 mbps
  down: 10 mbps
```

## 客户端配置

```yaml
port: 7890
external-controller: 127.0.0.1:9090
mode: rule
log-level: info

proxies:
  - name: "Hysteria2"
    type: hysteria2
    server: #服务器IP
    port: 443
    password: #密码
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