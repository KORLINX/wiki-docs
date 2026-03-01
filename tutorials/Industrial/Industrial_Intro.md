---
sidebar_position: 1
title: Industrial Applications
description: KORLINX IoT integration guides for industrial protocols — Modbus, OPC UA, EtherNet/IP.
keywords: [industrial IoT, Modbus, OPC UA, EtherNet/IP, PLC, SCADA, KORLINX]
---

# Industrial Applications

Integrate KORLINX modules into industrial environments with standard protocols and rugged deployment practices.

## Industrial Protocols

| Protocol | Transport | Topology | Use Case |
|----------|-----------|----------|----------|
| Modbus RTU | RS485 / RS232 | Master-slave | Legacy PLCs, sensors |
| Modbus TCP | Ethernet | Client-server | Modern industrial networks |
| OPC UA | Ethernet / WiFi | Client-server | Secure, platform-neutral data exchange |
| EtherNet/IP | Ethernet | DeviceNet/CIP | Allen-Bradley PLC integration |

## Typical Industrial Deployment

```
Field Devices (Sensors / Actuators)
        ↓ RS485 / Modbus RTU
KORLINX Gateway Module
        ↓ Cellular / Ethernet
Cloud Platform / SCADA
```

KORLINX modules with RS485 interfaces (e.g., KSE-91A) act as transparent serial-to-cellular bridges, forwarding Modbus RTU frames over cellular to cloud-based SCADA systems.

---

:::info Coming Soon
Industrial integration tutorials and reference architectures are in development.
:::
