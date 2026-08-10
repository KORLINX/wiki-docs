# KORLINX product authoring guide

## MDX frontmatter

Every product page must begin with:

```yaml
---
sidebar_position: 1
title: Product Name Page Type
description: One sentence describing the reader outcome and product.
keywords: [Product Name, primary technology, page task, KORLINX]
---
```

- Match the visible H1 to `title`.
- Keep descriptions specific and useful in search results.
- Include the exact product name in `title`, `description`, and `keywords`.
- Use the repository’s existing document IDs and naming convention; do not rename published paths without checking inbound links and sidebar IDs.

## Page openings

### Overview

1. H1 with the exact product name.
2. One short paragraph stating product type, audience, and primary value.
3. A product image with descriptive alt text when available.
4. A visible status statement for revisions, prototypes, or planned functions.
5. “At a glance,” “What you can do,” or an equivalent capability table.

### Procedure

1. H1 and one-sentence outcome.
2. State when the reader needs the page and when they do not.
3. List prerequisites, hardware, software, access, and safety conditions.
4. Provide a short flow or outcome table.
5. Give ordered steps with expected results.
6. Add verification, troubleshooting, and next steps.

### Hardware

1. Identify the board/product revision and scope.
2. Place the annotated overview image near the opening.
3. Summarize hardware blocks before detailed pin or interface tables.
4. Separate product/module specifications from development-board specifications.
5. Put production-design disclaimers next to pin maps, ratings, and electrical claims.

## Language and terminology

- Follow the language of nearby pages unless the user requests another language.
- Write short, direct sentences and use active voice.
- Address the reader as “you” in procedures; use the product name in reference sections.
- Use `KORLINX` for the company and preserve official product capitalization, for example `NEO-Edge40`, `KSE-91A`, and `NX40 Dev Kit`.
- Define an acronym on first use when the audience may not know it.
- Use consistent forms: `USB-C`, `RS-485`, `I²C`, `LTE-M`, `NB-IoT`, `Bluetooth LE`, `firmware`, and `onboard`.
- Avoid “easy,” “simply,” “obviously,” “latest,” “best,” and absolute reliability claims unless evidence makes them meaningful.

## Structure and components

- Use Markdown tables for ordinary content. Use the established `spec-table-wrapper`/`spec-table` HTML only when its styling or cell behavior is needed.
- Use fenced `text` blocks for command transcripts and signal/data-flow diagrams; use the correct language for executable code.
- Use backticks for commands, parameters, filenames, pins, interface values, and literal responses.
- Use repository-root image paths such as `/img/product/path.png`; confirm the matching file exists under `static/img/`.
- Write alt text that identifies what the reader should learn from an image; never use only “image” or repeat the filename.
- Prefer portable blockquotes beginning with `> **Development status:**`, `> **Warning:**`, or `> **Note:**` when the rendered support for MDX admonitions has not been verified.
- Reuse imported ProductCard/ProductGrid or established CSS only on pages already designed for those components.

## Claims and status

| Claim state | Treatment |
| --- | --- |
| Confirmed current behavior | State directly and retain its source for review |
| Optional hardware or variant | Name the required model, module, or condition |
| Firmware-dependent | Name the firmware/configuration dependency |
| Planned | Use “planned” or “intended”; do not write in present tense |
| Unverified | Omit or add a concise owner-review marker |
| Conflicting | Preserve both positions and request resolution |

Never infer certification, environmental rating, electrical safety, supported bands, protocol compatibility, pin mapping, or production readiness from a photograph or from a related product.

## Procedure quality

For every actionable step, try to provide:

| Element | Example |
| --- | --- |
| Action | Send `AT+CEREG?` over the selected host interface. |
| Expected result | The registration status is `1` or `5`. |
| If it differs | Wait for registration or continue to the documented recovery section. |

Put the default or shortest successful path first. Move manual overrides, advanced parameters, and exceptional recovery after it.

## Final review

- Verify facts against the supplied product evidence.
- Check that page order matches reader prerequisites.
- Check frontmatter, H1, heading hierarchy, links, images, and MDX rendering.
- Verify the generated category pages and previous/next pagination.
- Run the bundled checker and `npm run build`.
- Inspect warnings and distinguish new failures from pre-existing ones.
