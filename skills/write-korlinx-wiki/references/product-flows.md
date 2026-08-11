# KORLINX product documentation flows

Use this reference to select pages. These patterns come from the current `wiki-docs` information architecture; they do not prove product capabilities.

## Shared hierarchy

1. **Documentation home:** routes readers to Network and Tutorials.
2. **Technology or solution category:** explains the technology and compares products or connection types.
3. **Product Overview:** establishes fit, capabilities, variants, applications, and the next page.
4. **Bring-up page:** Hardware for board evaluation, or Quick Start for an operational packaged device.
5. **Task guides:** one user outcome per page, such as attaching to a network or sending data.
6. **FAQ/troubleshooting:** symptom-led recovery and escalation.

Keep product pages within a product category in `sites/en/sidebars.js`. Prefer a generated category index when the category already lists an Overview; using the same Overview as both category link and first item creates self-referential pagination.

## Cellular module or external modem

Use when the product connects a host or device through LTE-M, NB-IoT, or another cellular technology.

Recommended flow:

```text
Cellular Overview
  → Product Overview
  → Quick Start
  → Network Attach
  → Send Data
  → FAQ
```

- **Overview:** form factor, intended integration, supported network types, interfaces, variants, and verified technical highlights.
- **Quick Start:** antennas, SIM, host connection, power, interface selection, first successful state, and prerequisites.
- **Network Attach:** default behavior first; confirmation, configuration, manual recovery, and troubleshooting later.
- **Send Data:** prerequisites, connection sequence, exact commands or API, expected responses, verification, and cleanup.
- **FAQ:** organize by symptoms or user questions, not by internal subsystem names.

Do not copy modem commands across products unless firmware and command-set compatibility are confirmed.

## BLE module development kit

Use when the product is a development board for a KORLINX BLE/module family.

Recommended flow:

```text
Bluetooth Overview
  → Dev Kit Overview
  → Hardware
  → Software setup (when verified)
  → Example Code (when runnable)
```

- **Overview:** evaluation goals, typical prototypes, supported radio roles, and documentation path.
- **Hardware:** board-level map, controller/module, power, USB/UART, SWD, sensors, buttons/LEDs, headers, and pin map.
- **Software setup:** prerequisites, supported SDK/toolchain, installation, board selection, build/flash, and first verification.
- **Example Code:** objective, wiring, source location, build/run steps, expected output, and limitations.

Do not publish an empty Example Code or Software page. Mention future content briefly on the Overview only when its status matters.

## Industrial gateway or controller

Use when the product combines wireless/wired communications, edge processing, and industrial I/O.

Recommended flow:

```text
IoT Industrial
  → Product Overview
  → Hardware
  → Installation / Configuration (when verified)
  → Interface or protocol tasks
  → Troubleshooting
```

- **Overview:** field-to-edge-to-upstream data flow, capability map, connection choices, applications, and development status.
- **Hardware:** annotated board, controller, communications, industrial I/O, expansion, power, display, enclosure, and revision limitations.
- **Installation/configuration:** safety, mounting, terminal wiring, power, communications, configuration, and commissioning result.
- **Task guides:** separate acquisition, upstream connectivity, protocol conversion, and output-control workflows when each is substantial.

Keep planned enclosure, display, ratings, accuracy, isolation, pinouts, and certifications visibly separate from confirmed Rev-level facts.

## Page selection rules

- Create a page only when it has verified content and a distinct reader job.
- Combine short related material instead of creating shallow pages.
- Split a page when different audiences or prerequisites make the sequence hard to follow.
- Put shared technology explanation at category level; keep product pages product-specific.
- Prefer links over duplicating specifications or procedures.
