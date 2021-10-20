<h1 align="center">Library name</h1>
<p align="center">A small description with <strong>some</strong> simple <strong>keywords</strong><p>

<div align="center">
  <img alt="Made with Typescript" src="https://img.shields.io/badge/Made%20with-Typescript-2f74c0?style=for-the-badge&logo=typescript&labelColor=#333" style="margin:0 3px">
  <img alt="Made for React 16+"src="https://img.shields.io/badge/Made%20for-React%2016+-5ed3f3?style=for-the-badge&logo=react&labelColor=#333" style="margin:0 3px">
</div>
<div align="center" style="margin-top: 3px">
<a href="https://app.travis-ci.com/github/kegi/react-library-template" target="_blank"><img alt="build status" src="https://img.shields.io/travis/com/kegi/react-library-template?style=flat-square" /></a>
</div>

---

## React library template
This is a boilerplate to create a React library. This includes :

 - Tree shakeable build (ESM)
 - A working demo with hot module reloading
 - Supports TypeScript and handle declarations
 - Built on top of React CRA, compile with tsc
 - Deploy the demo on GH Pages (https://kegi.github.io/react-library-template/)
 - Storybook + Chromatic (https://616f4d6a953f04003a6f3fac-pofrmbwvjs.chromatic.com/)
 - Publish dist directory as root.
   - ```import { Foo, Bar } from 'library'```
   - ```import Foo from 'library/Foo'```

## Missing features :
 - badge for test + coverage
 - support UMD build for UNPKG ?