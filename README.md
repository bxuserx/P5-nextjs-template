# Nextjs P5 Dynamic widow canvas

Template to create a [nextjs](https://nextjs.org/docs/getting-started) app with a widow that dynamically scales on resize, includes WEBGL and sample code for fonts and photos.

Features:

- P5 Sketch Dynamically scales on window resize.
- P5 Examples of text and image import, mouse tracking.
- Deploy easily with [vercel](https://vercel.com/docs)
- Typescript
- Simple mouse tracking
- NOTE: Uses WEBGL! Translation of coordinates from center of canvas (WEBGL) to edge (standard) in current code.

## Run the app

```
$ yarn
$ yarn dev
```

## Notes:

- The canvas may not take up the entire window on load. Resize window to have full coverage, but move width and then height independently (of browser window) to get the canvas to fill the entire window. Resizing with the corner in both height and width may not update both parameters.

## Files and Layout.

- src/components/P5Sketch.tsx: Add or edit your P5 sketch here.
- public: Add your fonts and images here.
- fonts.d.ts: Add your fonts here, as well as import them in the P5sketch to rectify typescript errors.
- src/pages/index.tsx: Add webpage functional or styled components/ html here
- src/pages/\_app.tsx: index.tsx and all components are rendered here
- src/pages/api: Add server side API components here if applicable.

## Reference: Create nextjs app from scratch

```
$ yarn create next-app --typescript
$ yarn add styled-components react-p5 ml5
$ yarn add --dev @types/styled-components
```
