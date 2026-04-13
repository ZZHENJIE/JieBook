---
layout: doc
---

# [Xray](https://github.com/XTLS/Xray-core) 安装与配置

## 简介
Xray 是 Project X 的核心程序，源自 V2Ray，支持 VLESS、VMess、Trojan、Shadowsocks、Hysteria2 等协议，并原生支持 XTLS 和 REALITY 等黑科技。

## 安装
使用[Xray-install](https://github.com/XTLS/Xray-install)的脚本
```bash
bash -c "$(curl -L https://github.com/XTLS/Xray-install/raw/main/install-release.sh)" @ install
```

## 配置`/usr/local/etc/xray/config.json`

## **客户端是[FLClash](./FLClash.md)的配置文件**

### Vless + Reality

#### 生成参数
1. UUID
```bash
xray uuid
# 输出示例
0eefb492-5898-4977-ad89-4b0a126880xx
```
2. 私钥与公钥
```bash
xray x25519
# 输出示例
PrivateKey: ICGN9KCF6XsOgXLn-oXcAho05_cX4tglRkKzvgYcB0s
Password (PublicKey): ZxUDdbzZ2K2LTkt7SPCM5dmxyPbxo3r-jzYJeiPN6TM
Hash32: y_e04jREZhCoOcuA3oM5K6NNI7CAxeKvMB4g3oDdAI8
```
3. ShortID
```bash
openssl rand -hex 8
# 输出示例
1a2b3c4d5e6f7g8h
```

#### 服务端配置
```json
{
  "log": { "loglevel": "warning" },
  "inbounds": [{
    "port": 443, 
    "protocol": "vless",
    "settings": {
      "clients": [{
        "id": "生成的UUID",
        "flow": "xtls-rprx-vision"
      }],
      "decryption": "none"
    },
    "streamSettings": {
        "network": "tcp",
        "security": "reality",
        "realitySettings": {
            "dest": "www.microsoft.com:443",
            "serverNames": [
                "www.microsoft.com"
            ],
            "privateKey": "生成的私钥",
            "shortIds": ["生成的ShortID"]
        }
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "tag": "direct"
  }]
}
```
#### 客户端配置
```yaml
port: 7890
external-controller: 127.0.0.1:9090
mode: rule

proxies:
  - name: "Vless-Reality"
    type: vless
    server: 服务端IP
    port: 服务端口
    uuid: 生成的UUID
    flow: xtls-rprx-vision
    network: tcp
    tls: true
    servername: www.microsoft.com
    reality-opts:
      public-key: 生成的公钥
      short-id: 生成的ShortID
    client-fingerprint: chrome

proxy-groups:
  - name: "PROXY"
    type: select
    proxies:
      - "Vless-Reality"

rules:
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```

### Vless + TCP

#### 生成参数
1. UUID
```bash
xray uuid
# 输出示例
0eefb492-5898-4977-ad89-4b0a126880xx
```
#### 服务端配置
```json
{
  "log": {
    "loglevel": "warning"
  },
  "inbounds": [{
    "port": "服务端口",
    "protocol": "vless",
    "settings": {
      "clients": [
        { "id": "生成的UUID" }
      ],
      "decryption": "none"
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "tag": "direct"
  }]
}
```
#### 客户端配置
```yaml
port: 7890
external-controller: 127.0.0.1:9090
mode: rule

proxies:
  - name: "VLESS-TCP"
    type: vless
    server: 服务端IP
    port: 服务端口
    uuid: 生成的UUID
    network: tcp
    tls: false

proxy-groups:
  - name: "PROXY"
    type: select
    proxies:
      - "Vless-TCP"

rules:
  - GEOIP,CN,DIRECT
  - MATCH,PROXY
```

## Service命令
```bash
# 重启启动
systemctl restart xray
# 查看状态是否为 active
systemctl status xray
# 设置开机自启
systemctl enable xray
```
