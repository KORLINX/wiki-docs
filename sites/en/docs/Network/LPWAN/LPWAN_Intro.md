---
sidebar_position: 1
title: LPWAN Overview
description: KORLINX LPWAN products for LoRaWAN, Sigfox, and Zigbee IoT deployments.
keywords: [LPWAN, LoRaWAN, Sigfox, Zigbee, low-power, IoT, KORLINX]
---

# LPWAN Overview

Low Power Wide Area Network (LPWAN) technologies are designed for battery-powered IoT devices that need to transmit small payloads over long distances — often for years without changing a battery.

## LPWAN Technologies

| Technology | Protocol | Range | Data Rate | Topology | Spectrum |
|------------|----------|-------|-----------|----------|---------|
| **LoRaWAN** | LoRa PHY + LoRaWAN MAC | 2–15 km | 0.3–50 kbps | Star-of-stars | Unlicensed (ISM) |
| **Sigfox** | Ultra-narrowband | 10–50 km | 100 bps | Star | Unlicensed (ISM) |
| **Zigbee** | IEEE 802.15.4 | 10–100 m | 250 kbps | Mesh | 2.4 GHz unlicensed |

:::tip Choosing an LPWAN Technology
- **LoRaWAN**: Best for private/public networks, moderate data, global ecosystem.
- **Sigfox**: Lowest power, minimal data (12 bytes/message), managed network service.
- **Zigbee**: Short-range mesh, suitable for building automation and home IoT.
:::

---

## Key Characteristics

### Battery Life
LPWAN devices commonly achieve **5–10 years** on a single AA battery pair, enabled by:
- Duty-cycle restrictions and class-based sleep scheduling
- Adaptive Data Rate (ADR) on LoRaWAN
- Ultra-narrow bandwidth transmissions (Sigfox)

### Network Deployment
- **Public networks**: Helium, The Things Network (LoRaWAN); Sigfox operator network
- **Private networks**: Deploy your own LoRaWAN gateway and Network Server

---

## Products

| Product | Technology | Status |
|---------|------------|--------|
| Coming Soon | LoRaWAN | Planned |
| Coming Soon | Zigbee | Planned |

---

## Related Resources

- [Network Overview](../)
- [Cellular Overview](../Cellular/Cellular_Intro) — compare with cellular technologies