# KORLINX Wiki

Documentation website for KORLINX IoT networking products, built with [Docusaurus 3.9.2](https://docusaurus.io/).

Covers Cellular, LPWAN, WiFi, Bluetooth, Ethernet, and Satellite connectivity modules — including product overviews, quick starts, AT command references, and tutorials.

## Requirements

- Node.js >= 20.0
- Yarn

## Getting Started

```bash
yarn          # Install dependencies
yarn start    # Dev server at http://localhost:3000
```

> **Note:** If port 3000 is already in use, run on a different port:
> ```bash
> yarn docusaurus start --port 3001
> ```

## Commands

```bash
yarn start        # Start dev server with hot reload
yarn build        # Build static output to ./build
yarn serve        # Serve production build locally
yarn clear        # Clear Docusaurus cache
```

## Deployment (GitHub Pages)

```bash
USE_SSH=true yarn deploy
```

Builds the site and pushes to the `gh-pages` branch.

## Documentation Structure

```
docs/Network/
├── Cellular/        LTE-M, NB-IoT, LTE Cat-1, 5G
├── LPWAN/           LoRaWAN, Sigfox, Zigbee
├── WiFi/            WiFi 4/5/6, WiFi HaLow
├── Bluetooth/       BLE, Bluetooth Mesh
├── Ethernet/        Industrial Ethernet, PoE
└── Satellite/       LEO, GEO satellite IoT

tutorials/
├── Getting_Started/
├── Cloud_Integration/
├── Industrial/
└── Advanced/
```
