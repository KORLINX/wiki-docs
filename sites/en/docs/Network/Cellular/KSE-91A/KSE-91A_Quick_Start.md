---
sidebar_position: 11
title: KSE-91A Quick start
description: Connect the KSE-91A to your computer and send your first data in under 15 minutes.
keywords: [KSE-91A, quick start, LTE-M, NB-IoT, AT commands, serial terminal]
---

# KSE-91A Quick start

🚧 Coming Soon

This documentation is currently under development.

{/*

This guide takes you from unboxing to a live cellular data connection in under 15 minutes.

**What you'll accomplish:**
- Connect the module to your computer via USB
- Verify AT command communication
- Confirm SIM status and network registration
- Check signal strength
- Send a test ping over the cellular network

---

## Prerequisites

Before starting, make sure you have:

| Item | Notes |
|------|-------|
| KSE-91A module | With included USB-C cable and SMA antenna |
| Active nano SIM card | LTE-M or NB-IoT capable; data plan required |
| Computer | Windows 10+, macOS 12+, or Linux |
| Serial terminal | [Tera Term](https://teratermproject.github.io/), [PuTTY](https://putty.org/), or VS Code [Serial Monitor](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-serial-monitor) |

:::note Driver installation
Windows 10/11, macOS, and Linux recognize the KSE-91A as a CDC-ACM USB serial device automatically — no driver installation needed. On Windows 7/8, install the CDC-ACM driver from the KORLINX download page.
:::

---

## Step 1: Insert the SIM card

1. Turn the KSE-91A face down (LED side up).
2. Locate the nano SIM slot on the underside of the board.
3. With the module **unpowered**, slide the nano SIM in with the gold contacts facing down and the notch toward the slot opening. It clicks into place.

:::caution
Never insert or remove the SIM while the module is powered. This can corrupt the SIM or require a full power cycle to recover.
:::

---

## Step 2: Connect the antenna

1. Thread the SMA connector of the included antenna onto the **ANT** SMA port.
2. Tighten finger-tight only — do not over-torque.

:::tip Placement
Keep the antenna away from metal surfaces and at least 20 cm from any other transmitting device. For best signal, position it vertically.
:::

---

## Step 3: Connect to your computer

1. Plug the USB-C cable into the **USB-C** port on the KSE-91A.
2. Plug the other end into your computer.
3. The **PWR** LED (green) turns on immediately.
4. Wait ~5 seconds for the **NET** LED (blue) to begin blinking — this indicates the modem firmware has started.

**Identify the COM port:**

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="os">
<TabItem value="windows" label="Windows">

Open **Device Manager** → expand **Ports (COM & LPT)** → look for **KSE-91A** or **USB Serial Device** and note the `COMx` number (e.g., `COM5`).

</TabItem>
<TabItem value="macos" label="macOS">

Open **Terminal** and run:

```bash
ls /dev/tty.usbmodem*
```

The device appears as `/dev/tty.usbmodem[number]`.

</TabItem>
<TabItem value="linux" label="Linux">

Open a terminal and run:

```bash
ls /dev/ttyACM*
```

The device appears as `/dev/ttyACM0` (or `/dev/ttyACM1` if you have other CDC-ACM devices).

You may need to add your user to the `dialout` group:

```bash
sudo usermod -aG dialout $USER
# Log out and back in for the change to take effect.
```

</TabItem>
</Tabs>

---

## Step 4: Open a serial terminal

Open your terminal application and configure it with these settings:

| Setting | Value |
|---------|-------|
| Port | Your COM port (e.g., `COM5`, `/dev/tty.usbmodem1101`, `/dev/ttyACM0`) |
| Baud rate | `115200` |
| Data bits | `8` |
| Parity | `None` |
| Stop bits | `1` |
| Flow control | `None` |
| Line ending | `CR+LF` (important — AT commands require `\r\n`) |

---

## Step 5: Test AT communication

Type the following command and press **Enter**:

```at
AT
```

**Expected response:**

```
OK
```

If you see `OK`, the host-to-module AT command path is working correctly.

:::tip No response?
- Check that your terminal sends `CR+LF` line endings, not just `LF`.
- Make sure you selected the correct COM port.
- Try pressing **RST** (P3 pin 3) or unplugging and re-plugging the USB cable.
:::

---

## Step 6: Check modem information

Confirm the firmware version and IMEI:

```at
ATI
```

**Example response:**

```
Nordic Semiconductor ASA
nRF9160 SICA B1A
Serial LTE Modem
Build ID: v2.6.1-korlinx-kse91a
IMEI: 352656100367872
OK
```

Note your **IMEI** — you may need it to register the device with your carrier or IoT platform.

---

## Step 7: Check SIM status

```at
AT+CPIN?
```

| Response | Meaning |
|----------|---------|
| `+CPIN: READY` | SIM detected, no PIN required |
| `+CPIN: SIM PIN` | SIM is PIN-locked — send `AT+CPIN="1234"` with your PIN |
| `ERROR` | SIM not detected — check insertion and power cycle |

:::warning SIM not detected
If you see `ERROR`, power off the module, reinsert the SIM, and try again. Verify the SIM is nano-sized (4FF) and seated correctly.
:::

---

## Step 8: Set the network technology

Tell the modem which technology to use. For most deployments, prefer LTE-M first:

```at
AT%XSYSTEMMODE=1,0,0,0
```

| Parameter | Value | Meaning |
|-----------|-------|---------|
| 1st | `1` | LTE-M enabled |
| 2nd | `0` | NB-IoT disabled |
| 3rd | `0` | GNSS disabled |
| 4th | `0` | Reserved |

To enable NB-IoT instead:

```at
AT%XSYSTEMMODE=0,1,0,0
```

To allow the modem to select automatically (LTE-M preferred):

```at
AT%XSYSTEMMODE=1,1,0,0
```

Then activate the modem:

```at
AT+CFUN=1
```

---

## Step 9: Check network registration

```at
AT+CEREG?
```

| Response | Status |
|----------|--------|
| `+CEREG: 0,1` | Registered on home network |
| `+CEREG: 0,5` | Registered, roaming |
| `+CEREG: 0,2` | Searching for network… |
| `+CEREG: 0,0` | Not registered, not searching |
| `+CEREG: 0,3` | Registration denied |

:::tip Registration takes time
On first power-up with a new SIM, registration can take 30–90 seconds. Run `AT+CEREG?` every 10 seconds and wait for status `1` or `5`.
:::

If the NET LED is blinking slowly, the modem is still searching. When it goes **solid blue**, the module is registered.

---

## Step 10: Check signal strength

```at
AT+CSQ
```

**Example response:**

```
+CSQ: 18,0
OK
```

The first number is the RSSI value (0–31, 99 = unknown):

| Value | dBm | Signal quality |
|-------|-----|----------------|
| 0–9 | < −101 dBm | Poor |
| 10–14 | −101 to −91 dBm | Fair |
| 15–19 | −90 to −81 dBm | Good |
| 20–31 | > −80 dBm | Excellent |
| 99 | — | Not detectable |

For a more precise reading using RSRP:

```at
AT%CESQ
```

**Example response:**

```
%CESQ: 43,0,12,1
OK
```

---

## Step 11: Set APN and send a test ping

Set the APN for your carrier (example uses a generic APN):

```at
AT+CGDCONT=1,"IP","your.apn.here"
```

Common APNs:

| Carrier | APN |
|---------|-----|
| AT&T (LTE-M) | `m2mglobal` |
| T-Mobile (LTE-M) | `fast.t-mobile.com` |
| Verizon (LTE-M) | `vzwinternet` |
| Telstra (AU) | `telstra.iot` |
| Vodafone (EU) | `iot.vodafone.de` |

Activate the PDP context:

```at
AT+CGACT=1,1
```

Send a test ping to Google's public DNS:

```at
AT#XPING="8.8.8.8",45,5000,5,0
```

**Expected response:**

```
#XPING: 0
#XPING: 0
#XPING: 0
#XPING: 0
#XPING: 0
#XPING: "8.8.8.8" 5 packets transmitted, 5 received, 0% packet loss
OK
```

A successful ping confirms end-to-end cellular data connectivity.

---

## What's next

| Topic | Link |
|-------|------|
| Full AT command reference | [KSE-91A AT Commands](./KSE-91A_AT_Commands) |
| Troubleshooting & error codes | [KSE-91A FAQ](./KSE-91A_FAQ) |
| Cloud integration tutorials | [Cloud Integration](/docs/Tutorials/Cloud_Integration/Cloud_Intro) |
| Power optimization (PSM / eDRX) | [Advanced Topics](/docs/Tutorials/Advanced/Advanced_Intro) |
| MQTT over cellular | [KSE-91A AT Commands](./KSE-91A_AT_Commands) |

*/}