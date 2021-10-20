<h1 align="center">Library name</h1>
<p align="center">A small description with <strong>some</strong> cute <strong>keywords</strong><p>

<div align="center">
  <img alt="Made with Typescript" style="margin:3px"
  src="https://img.shields.io/badge/Made%20with-Typescript-2f74c0?style=for-the-badge&logo=typescript&labelColor=#333" />
  <img alt="Made for React 16+" style="margin:3px"
  src="https://img.shields.io/badge/Made%20for-React%2016+-5ed3f3?style=for-the-badge&logo=react&labelColor=#333" />
</div>

<div align="center">
  <a href="https://app.travis-ci.com/github/kegi/react-library-template">
    <img alt="build status" style="margin:3px"
    src="https://img.shields.io/travis/com/kegi/react-library-template?style=flat-square" />
  </a>
  <a href="https://coveralls.io/github/kegi/react-library-template">
    <img alt="test coverage" style="margin:3px"
    src="https://img.shields.io/coveralls/github/kegi/react-library-template?style=flat-square" />
  </a>
  <a href="https://bundlephobia.com/package/@kegi/react-library-template">
    <img alt="bundle size" style="margin:3px" 
    src="https://img.shields.io/bundlephobia/min/@kegi/react-library-template?label=size&style=flat-square" />
  </a>
  <a href="https://www.npmjs.com/package/@kegi/react-library-template">
    <img alt="bundle size" style="margin:3px" 
    src="https://img.shields.io/npm/l/@kegi/react-library-template?color=%23007ec6&style=flat-square" />
  </a>
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
