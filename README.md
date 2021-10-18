<h1 align="center">Library name</h1>
<p align="center">A small description with <strong>some</strong> simple <strong>keywords</strong><p>

<div align="center">
  <img alt="Made with Typescript" src="https://img.shields.io/badge/Made%20with-Typescript-2f74c0?style=for-the-badge&logo=typescript&labelColor=#333" style="margin:0 3px">
  <img alt="Made for React 16+"src="https://img.shields.io/badge/Made%20for-React%2016+-5ed3f3?style=for-the-badge&logo=react&labelColor=#333" style="margin:0 3px">
</div>

---

## React library template
This is a boilerplate to create a React library. This includes :

 - Tree shakeable build (ESM)
 - A working demo
 - Hot reloading on the demo
 - Supports TypeScript and export declarations
 - Built on top of React CRA, compile with tsc
 - Deploy the demo on GH Pages (https://kegi.github.io/react-library-template/)

## Linting
This template come with **StandardJS** (and rules similar to **Airbnb** for **JSX**)

To change it :
 1) `yarn remove eslint-plugin-standard-cra`
 2) remove the ref on `package.json` (`eslintConfig` > `extends`)
 3) add your own rules

## Missing features :
 - storyboard
 - support UMD build for UNPKG ?

## Why not just use create-react-library ?
 - crl is not well maintained anymore
 - crl come with outtaded dependencies
 - crl doesn't support TypeScript out-of-the-box