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

The documentation site is deployed automatically to GitHub Pages through
[`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

A push to the `main` branch triggers the deployment workflow, which:

1. Installs dependencies with `npm ci`.
2. Builds the static site with `npm run build`.
3. Uploads the `build` directory as a GitHub Pages artifact.
4. Deploys the artifact to the `github-pages` environment.

The production site is available at [wiki.korlinx.com](https://wiki.korlinx.com).

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

## Project Status

🚧 Documentation platform under active development.

Some product documentation pages currently contain placeholder content and will be completed in future releases.