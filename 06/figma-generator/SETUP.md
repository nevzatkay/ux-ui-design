# Editable Figma Auto Layout generator

**Status:** All wireframe content is implemented in `code.js`. A Figma account with edit access must run the generator to create native layers. This file is not itself a finished `.fig` document.

1. Open the existing Figma Design destination: https://www.figma.com/design/OwclXDhwskpE9mgkZDFIVB
2. In the desktop app, select **Plugins → Development → Import plugin from manifest…**, and choose `manifest.json` from this folder.
3. Run **Rulebook HW06 - Editable Auto Layout Wireframes**. The generator adds five mobile screens, four exceptional states, one responsive desktop main screen, flow markers and annotations as editable layers with Auto Layout.
4. If Figma requires a Figma-generated plugin ID before local import, first create a blank **Development plugin** from Figma's UI (which generates the ID), then replace its main `code.js` with the included `code.js`. Keep the Figma-generated ID.

**No manual design work, text entry, source-selection or additional research is required for the Week 06 wireframe content.** Figma's connection limit prevented automatic placement, and neither code nor SVG should be misrepresented as an already-populated Figma file.
