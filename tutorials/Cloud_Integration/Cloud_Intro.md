---
sidebar_position: 1
title: Cloud Integration
description: Connect KORLINX IoT devices to AWS IoT Core, Azure IoT Hub, and Google Cloud IoT.
keywords: [cloud, AWS IoT, Azure IoT Hub, Google Cloud, MQTT, KORLINX]
---

# Cloud Integration

Connect KORLINX modules to leading IoT cloud platforms using MQTT, HTTPS, or direct SDK integration.

## Supported Platforms

| Platform | Protocol | Authentication | Guide |
|----------|----------|----------------|-------|
| AWS IoT Core | MQTT / HTTPS | X.509 certificates | Coming Soon |
| Azure IoT Hub | MQTT / AMQP | SAS tokens / X.509 | Coming Soon |
| Google Cloud IoT | MQTT / HTTPS | JWT / X.509 | Coming Soon |
| Custom MQTT Broker | MQTT | Username/password or TLS | Coming Soon |

## General Architecture

```
KORLINX Module → (Cellular / WiFi) → Cloud Platform → Dashboard / Application
```

All KORLINX cellular and WiFi modules include built-in TLS stacks and MQTT clients, enabling direct cloud connectivity without a gateway.

---

:::info Coming Soon
Detailed cloud integration tutorials are in development.
:::
