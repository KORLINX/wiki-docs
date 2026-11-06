# NX40 document release review

Reviewed on 2026-11-05 against the supplied document tracker screenshot and the local `[BLE] NX40i` and `[BLE] NX40E` deliveries.

The public page is `/docs/Product_Documents/NX40-Product-Documents`. It uses the existing DocumentGrid and is linked from the NX40 sidebar and series resources.

## Disclosure decisions

| Document | NX40-I tracker | NX40-E tracker | Public files |
| --- | --- | --- | --- |
| Schematic symbol | Received / Can Disclose | Received / Can Disclose | Shared KiCad symbol and Altium IntLib |
| PCB footprint | Received / Can Disclose | Received / Can Disclose | Shared KiCad footprints and Altium IntLib |
| 3D model | Received / Can Disclose | Received / Can Disclose | Variant-specific STEP files |
| PCB footprint drawing | Received / Can Disclose | Not listed | NX40i DXF only |
| Reference schematic source | Received / Can Disclose | Received / Can Disclose | Variant-specific Altium SchDoc ZIPs; supplied NX40i PDF also viewable |
| Reference PCB layout source | Received / Cannot Disclose | Received / Cannot Disclose | Excluded |
| Gerber files | Received / To Be Confirmed | Received / Can Disclose | NX40E Gerber layers and NC drill only |
| BOM | Received / To Be Confirmed | Received / To Be Confirmed | Excluded |
| Product datasheet | Under Review / Can Disclose | Under Review / Can Disclose | No file supplied; omitted |
| User manual | Received / Can Disclose | Under Review / Can Disclose | No file supplied; omitted |
| Held certificates | Received / Can Disclose | Received / Can Disclose | No file supplied; omitted |

## Packaging

- `static/downloads/nx40/NX40_kicad_library.zip` contains only the original `NX40.kicad_sym`, `NX40.pretty/NX40i32.kicad_mod`, and `NX40.pretty/NX40E32.kicad_mod`. All backup archives are excluded. The original symbol defaults to `NX40:NX40i32`; the NX40E card explains how to select `NX40:NX40E32`.
- `static/downloads/nx40/NX40x32.IntLib` is the shared original integrated library.
- NX40i downloads contain the original STEP, DXF, and PDF, plus a ZIP containing only `NX40i32.SchDoc`.
- NX40E downloads contain the original STEP, a ZIP containing only `NX40E32.SchDoc`, and a Gerber ZIP containing only `Gerber Output/` and `NC Drill Output/` members.
- Full source, manufacturing, and delivery ZIPs are excluded. Manufacturing ZIPs include BOM data that has not been cleared for disclosure.
- `Dev_NX40*` development board projects are excluded because the supplied tracker rows cover modules and do not establish separate development board release permissions.

There are five document cards per variant, eight unique download targets, and one additional PDF preview. Shared libraries are reused across both sections.

## Maintenance

Before adding another file, verify both its availability and its disclosure status. Review every archive member; hiding a link does not protect files placed under `static/`.

Production uses the repository's existing GitHub Pages deployment workflow. This change does not create a separate hosted Site.
