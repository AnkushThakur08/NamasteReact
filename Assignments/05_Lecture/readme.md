# Ques 1. What is the difference between Named Export, Default export and * as export?

- **Default Exports**
    - A file can have **only one default export**.
    - While importing, **we do not use curly braces**.
    - We can rename it while importing.

    - Syntax:
    ```javascript
     // hero.js
    const Hero = () => {}
    export default Hero


    // import
    import Hero from "./hero"     // no curly braces
    import MyHero from "./hero"   // we can rename
    ```

- **Named Export**
    - A file can have **multiple named exports**.
    - While importing, we **must use curly braces**.
    - Import name must **match exactly** (unless using `as` alias)
    - Syntax:
    ```javascript
    // utils.js
    export const handleFunction1 = () => {}
    export const handleFunction2 = () => {}

    // import
    import { handleFunction1, handleFunction2 } from "./utils"
    ```

    - You can also export in a single line
    ```javascript
    const a = 10
    const b = 20

    export { a, b }
    ```

- **Export * as (Namespace Export)**
    - Used to **import everything from a file under a single namespace**.

    ```javascript
    // utils.js
    export const add = () => {}
    export const subtract = () => {}


    // import everything
    import * as Utils from "./utils"

    Utils.add()
    Utils.subtract()
    ```

| Type               | Export Count      | Import Style                      | Can Rename?      |
| ------------------ | ----------------- | --------------------------------- | ---------------- |
| **Default Export** | Only 1 per file   | `import Hero from "./hero"`       | ✔ Yes            |
| **Named Export**   | Multiple          | `import { fn } from "./file"`     | ✔ Using `as`     |
| **Export * as**    | All named exports | `import * as Utils from "./file"` | Entire namespace |


# Ques 2. What are React Hooks?
- Hooks are the superpowers that are given to the react
- Hooks are the superpower that are given to the functional component
- With the help of hooks we can use the `useState` inside the Functional Component using `useState` Hook
- With the help of hooks we are also manage the lifecycle methods of the component using `useEffect` Hook
- React Manages all the UI, with the help of Hooks


# Ques 3. Why do we need useState Hook
- useState is used to store and manage **stateful values** inside a functional component.
A normal variable resets on every re-render, but a **state variable persists across renders**.


- `useState` is one of the most used Hook in the React
- useState is a kind of a Variable, which cannot be updated by anyother function, only a particular method can update the state
- Syntax for the State is:
```javascript
const [data, setData] = useState()
```
- If you want to update the State only `setData` Methods can update the state
- We can also initlise the state with the initial value which can we string `useState("")`, number `useState(9)`, array `useState([])`, or object `useState({})`
- now whenever my State Changes react will re-render which the cause the UI to update the changes
- This is done with the help of Virtual DOM, and the algorithm which is behind the virtual DOM is react Reconlisation
which compare both the tree and figure out the changes that need to be rendered onto the UI