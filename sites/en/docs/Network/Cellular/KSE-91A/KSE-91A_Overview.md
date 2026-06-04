---
sidebar_position: 10
title: KSE-91A Overview
description: KSE-91A LTE-M/NB-IoT plug-and-play communication module — features, specifications, pinout, and resources.
keywords: [KSE-91A, LTE-M, NB-IoT, nRF9160, IoT module, AT commands, KORLINX]
---

# KSE-91A overview

The KSE-91A is a compact, plug-and-play LTE-M/NB-IoT communication module designed for rapid IoT deployment. Based on Nordic Semiconductor's nRF9160 System-in-Package (SiP), it runs the Nordic Serial LTE Modem (SLM) firmware and exposes a standard AT command interface — making it immediately compatible with any host system that has a UART, USB, RS485, or RS232 port.

No custom RF design required. Connect your SIM, attach the antenna, and start sending AT commands.

---

## Key features

- **Dual-mode cellular** — LTE-M (Cat-M1) and NB-IoT (Cat-NB2) in a single module
- **Four host interfaces** — USB-C (virtual COM), UART, RS485, and RS232; selectable without hardware changes
- **Integrated protocol stacks** — MQTT, CoAP, HTTP/HTTPS, and TCP/UDP socket clients built into firmware
- **Hardware security** — TLS 1.2/1.3 and DTLS 1.2 with certificate management via AT commands
- **Ultra-low power** — PSM sleep current of 2.5 µA; eDRX configurable for duty-cycled operation
- **Industrial grade** — rated −40 °C to +85 °C operating temperature
- **Nordic SLM firmware** — industry-standard AT command set, OTA firmware update capable

---

## Specifications

### General

| Parameter | Value |
|-----------|-------|
| Product name | KSE-91A |
| Core SiP | Nordic nRF9160 (ARM Cortex-M33, 64 MHz) |
| Firmware | Nordic Serial LTE Modem (SLM) v2.x |
| Dimensions | 73 × 42 × 12 mm |
| Weight | ~32 g |
| Operating temperature | −40 °C to +85 °C |
| Storage temperature | −40 °C to +90 °C |
| Humidity | 5–95% RH, non-condensing |
| Certifications | FCC, CE, PTCRB (planned) |

### Electrical

| Parameter | Min | Typical | Max | Unit |
|-----------|-----|---------|-----|------|
| Supply voltage (VIN, P1) | 4.5 | 5.0 | 5.5 | V |
| Supply voltage (USB-C) | — | 5.0 | — | V |
| 3.3V output (P1 pin 2) | — | 3.3 | — | V (100 mA max) |
| Current — idle, RRC connected | — | 6 | 10 | mA |
| Current — TX burst (LTE-M) | — | 220 | 490 | mA |
| Current — PSM sleep | — | 2.5 | 5 | µA |
| Current — eDRX sleep | — | 1.5 | — | mA |

### Cellular

| Parameter | Value |
|-----------|-------|
| Technologies | LTE-M Cat-M1, NB-IoT Cat-NB2 |
| LTE-M data rate | 300 kbps DL / 375 kbps UL |
| NB-IoT data rate | 27.2 kbps DL / 62.5 kbps UL |
| TX output power | 23 dBm (LTE-M), 23 dBm (NB-IoT) |
| RX sensitivity | −106 dBm (LTE-M), −114 dBm (NB-IoT) |
| SIM | Nano SIM (4FF) |
| Antenna connector | SMA (50 Ω) |

### Frequency bands

| Region | LTE-M Bands | NB-IoT Bands |
|--------|-------------|--------------|
| North America | B2, B4, B12, B13, B14 | B2, B4, B12, B13 |
| Europe | B1, B3, B8, B20, B28 | B1, B3, B8, B20, B28 |
| Asia-Pacific | B1, B3, B8, B18, B19, B26 | B1, B3, B8, B18, B19, B26 |
| Latin America | B2, B4, B5, B28 | B2, B4, B5, B28 |

---

## Interfaces

### USB-C (primary)

| Parameter | Value |
|-----------|-------|
| Connector | USB-C (2.0) |
| Function | Power + Virtual COM Port (CDC-ACM) |
| Baud rate | Any (virtual COM, no hardware rate limit) |
| Driver | No driver required on Windows 10+, macOS, Linux |

### UART (P1 header)

| Parameter | Value |
|-----------|-------|
| Logic level | 3.3V TTL |
| Default baud rate | 115200 bps |
| Max baud rate | 1000000 bps |
| Flow control | Hardware (RTS/CTS) on P3 — optional |
| Data format | 8N1 |

### RS485 / RS232 (P2 header)

| Parameter | RS485 | RS232 |
|-----------|-------|-------|
| Mode select | P2 pin 5 = LOW | P2 pin 5 = HIGH |
| Default baud rate | 9600 bps | 115200 bps |
| Max baud rate | 115200 bps | 115200 bps |
| Topology | Half-duplex | Full-duplex |

---

## Pinout

### P1 — UART / Power (2.54 mm, 6-pin)

| Pin | Signal | Direction | Description |
|-----|--------|-----------|-------------|
| 1 | VIN | Input | 5V supply input |
| 2 | 3V3 | Output | 3.3V regulated (100 mA max) |
| 3 | GND | — | Ground |
| 4 | TXD | Output | UART transmit (module → host) |
| 5 | RXD | Input | UART receive (host → module) |
| 6 | GND | — | Ground |

### P2 — RS485 / RS232 (2.54 mm, 6-pin)

| Pin | Signal | Direction | Description |
|-----|--------|-----------|-------------|
| 1 | A / TX | I/O | RS485 A+ or RS232 TXD |
| 2 | B / RX | I/O | RS485 B− or RS232 RXD |
| 3 | GND | — | Ground |
| 4 | NC | — | Not connected |
| 5 | MODE | Input | LOW = RS485, HIGH = RS232 |
| 6 | GND | — | Ground |

### P3 — Control (2.54 mm, 4-pin)

| Pin | Signal | Direction | Description |
|-----|--------|-----------|-------------|
| 1 | CTS | Input | UART CTS (flow control input) |
| 2 | RTS | Output | UART RTS (flow control output) |
| 3 | RST | Input | Hardware reset (active LOW, 100 ms pulse) |
| 4 | BOOT | Input | Bootloader mode (HIGH at power-up) |

### LED indicators

| LED | Color | Behavior |
|-----|-------|----------|
| PWR | Green | Solid — module powered on |
| NET | Blue | Slow blink — searching; solid — registered to network |
| DAT | Orange | Blinks on data TX/RX activity |

---

## What's in the box

- KSE-91A module × 1
- USB-C cable (1 m) × 1
- SMA external antenna (700 MHz–2.1 GHz) × 1
- Quick reference card × 1

---

## Resources

| Resource | Link |
|----------|------|
| Quick start guide | [KSE-91A Quick Start](./KSE-91A_Quick_Start) |
| AT command reference | [KSE-91A AT Commands](./KSE-91A_AT_Commands) |
| FAQ & troubleshooting | [KSE-91A FAQ](./KSE-91A_FAQ) |
| Cellular overview | [Cellular Overview](../Cellular_Intro) |
| Nordic SLM documentation | [Nordic Developer Academy](https://academy.nordicsemi.com/) |
| nRF9160 product page | [Nordic Semiconductor](https://www.nordicsemi.com/products/nrf9160) |