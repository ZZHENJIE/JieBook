---
layout: doc
---

# [Xray](https://github.com/XTLS/Xray-core) 安装与配置

## 安装
使用[Xray-install](https://github.com/XTLS/Xray-install)的脚本
```bash
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install
```

## 配置

### 服务端
#### 1.生成uuid
```bash
xray uuid
#输出示例
0eefb492-5898-4977-ad89-4b0a126880xx
```
#### 2.生成密钥与密码
```bash
xray x25519
#输出示例
PrivateKey: cAwBD3CbUICNLY25EZVTvenqbVWvIeoivqBKH3H-000
Password: vjA7eigsNdOFu_daIOUSCT5vPW1ZfPVtdthjZjzhvSx
Hash32: VLpFPt0WSm_iAqluTz4YTBDJGOELjY4CPW01taywda
```
#### 3.编辑配置文件 `/usr/local/etc/xray/config.json`
```json
{
  "log": { "loglevel": "info" },
  "inbounds": [{
    "port": <部署端口 默认443即可>, 
    "protocol": "vless",
    "settings": {
      "clients": [{
        "id": <使用第一步生成的uuid>,
        "flow": "xtls-rprx-vision"
      }],
      "decryption": "none"
    },
    "streamSettings": {
      "network": "tcp",
      "security": "reality",
      "realitySettings": {
        "show": false,
        "dest": "www.amazon.com:443",
        "xver": 0,
        "serverNames": ["www.amazon.com", "amazon.com", <也可以添加自己的绑定的域名>],
        "privateKey": <第二步生成的密钥>,
        "shortIds": [<自定义字符串>]
      }
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "tag": "direct"
  }]
}
```
#### 4.重启并查看服务是否正常运行
```bash
# 重启
systemctl restart xray
# 查看状态是否为 active
systemctl status xray
```

### 客户端 ***使用的是[FLClash](./FLClash.md)的配置文件示例***
```yaml
port: 7890
external-controller: 127.0.0.1:9090
mode: rule
log-level: info

proxies:
  - name: "Xray-Reality"
    type: vless
    server: <部署的服务器公网IPV4地址>
    port: <服务端配置的端口>
    uuid: <服务端配置的客户端id>
    network: tcp
    tls: true
    flow: xtls-rprx-vision
    servername: "www.amazon.com"
    reality-opts:
      public-key: <服务端第二步生成的密码>
      short-id: <服务端自定义字符串>
    client-fingerprint: chrome

proxy-groups:
  - name: "PROXY"
    type: select
    proxies:
      - "Xray-Reality"

rules:
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```
