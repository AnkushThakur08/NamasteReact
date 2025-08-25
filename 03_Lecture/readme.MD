# 🚀 Babel & Parcel Cheat Sheet

## 🔤 Babel

### What is Babel?
- A **JavaScript compiler/transpiler**.
- It allows developers to write code in the latest JavaScript syntax (ES6/ES7/ESNext, JSX, or even TypeScript) and convert it into code that browsers can understand (usually ES5).

### Why use Babel?
- Not all browsers support modern JS eg:
    - `async/await` → not supported in older browsers.
    - `JSX` → not understood by browsers at all.
- JSX/TypeScript are not natively understood by browsers.
- Ensures **cross-browser compatibility**.

### How Babel Works (Pipeline)
1. **Parsing** → Converts code into an AST (Abstract Syntax Tree).
    - Example: const x = 10; → parsed into a tree structure representing const, x, 10.
2. **Transforming** → Applies **plugins/presets** to modify AST.
    - Example: Convert arrow functions → regular functions.
3. **Generating** → Converts AST back into JavaScript.

### Babel Presets & Plugins
- **Presets** = Collection of plugins
  - `@babel/preset-env` → converts ES6+ into ES5 based on browser support.
  - `@babel/preset-react` → JSX → `React.createElement`
  - `@babel/preset-typescript` → TypeScript → JS

- **Plugins** = Individual transformations
  - `@babel/plugin-transform-arrow-functions`
  - `@babel/plugin-transform-classes`

### Example
```jsx
// Input (React JSX + ES6)
const App = () => <h1>Hello World</h1>;

// Output after Babel
"use strict";
var App = function App() {
  return React.createElement("h1", null, "Hello World");
};
```

###  What’s the difference between Babel presets and plugins?
- **Presets are pre-configured sets of plugins that handle multiple transformations at once, while plugins handle specific transformations.**


---
# 📦 Parcel

### What is Parcel?
- Parcel is a **web application bundler.**.
- It takes **all project files** (JS, CSS, HTML, images, fonts) and bundles them into optimized files for the browser.

### Why Parcel Exists?
- Modern apps have:
    - Multiple JS files
    - CSS modules
    - Images, fonts
    - React/TypeScript/Babel setup
-  Managing all of this manually is complex.
- Older bundlers like Webpack need a lot of config.
- Parcel = zero config → faster development.

### Key Features of Parcel
1. **Zero Configuration** → Just parcel `index.html` and it works.
2. **Hot Module Replacement (HMR)** → Updates changes instantly without full page reload.
3. **Tree Shaking** → Removes unused code → reduces bundle size.
4. **Code Splitting** → Breaks code into smaller chunks → loads only what’s needed.
5. **Production Build** → Minification, caching, and hashing for better performance.
6. **Built-in Babel, PostCSS, TypeScript support** → no need for separate setup



### Parcel vs Webpack
- **Parcel** → Zero config, beginner friendly, good for small-medium apps.
- **Webpack** → Highly configurable, used in big projects (e.g., enterprise apps).