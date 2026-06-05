# KORLINX Documentation

Documentation website for KORLINX Industrial IoT products and solutions, built with Docusaurus 3.9.2.

Covers networking technologies including Cellular, LPWAN, WiFi, Bluetooth, Ethernet, and Satellite connectivity. The platform is designed to provide product overviews, quick start guides, hardware references, software integration documentation, and solution-oriented deployment guides.

## Requirements

- Node.js >= 20.0
- npm

## Getting Started

```bash
npm install      # Install dependencies
npm run start    # Dev server at http://localhost:3000
```

> **Note:** If port 3000 is already in use, run on a different port:
>
> ```bash
> npm run start -- --port 3001
> ```

## Commands

```bash
npm run start    # Start dev server with hot reload
npm run build    # Build static output to ./build
npm run serve    # Serve production build locally
```

## Deployment (GitHub Pages)

GitHub Pages deployment will be configured after project review and approval.

## Documentation Structure

```text
sites/en/docs/
└── Network/
    ├── Cellular/        LTE-M, NB-IoT, LTE Cat-1, 5G
    ├── LPWAN/           LoRaWAN, Sigfox, Zigbee
    ├── WiFi/            WiFi 4/5/6, WiFi HaLow
    ├── Bluetooth/       BLE, Bluetooth Mesh
    ├── Ethernet/        Industrial Ethernet, PoE
    └── Satellite/       LEO, GEO satellite IoT
```

## Planned Documentation Categories

```text
Network/
├── Cellular
├── LPWAN
├── WiFi
├── Bluetooth
├── Ethernet
└── Satellite

```

## Branches

```text
main
└── Stable documentation

trung-huy-docs
└── Active development branch
```

## Project Status

🚧 Documentation platform under active development.

Some product documentation pages currently contain placeholder content and will be completed in future releases.