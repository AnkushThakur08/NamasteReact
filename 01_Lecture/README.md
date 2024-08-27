# Lecture 1

## What is CDN?
- CDN stands for Content Delivery Network.
- CDN links are where React or any other service is hosted.
- We can fetch or pull React/any other service from that link.

## What is crossOrigin?
- Used when we need to request resources from a different origin.
- The `crossorigin` attribute is used to share resources from one domain to another.
- It handles Cross-Origin Resource Sharing (CORS) requests.
- Ensures that it is safe to allow sharing of resources from other domains.

## What is Profiler?
- The Profiler measures the performance of a component or the entire app.
- Allows you to measure the rendering performance of a React tree programmatically.

```jsx
<App>
  <Profiler id="Sidebar" onRender={onRender}>
    <Sidebar />
  </Profiler>
  <Profiler id="Content" onRender={onRender}>
    <Content>
      <Profiler id="Editor" onRender={onRender}>
        <Editor />
      </Profiler>
      <Preview />
    </Content>
  </Profiler>
</App>
```
- [Read more about fixing bugs found by double rendering in development](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development).

## What is Strict Mode?
- Strict Mode enables extra development-only checks for the entire component.
  
### Double Rendering Issue:
- To fix the double rendering issue, create a copy of the array so that when the component re-renders, it starts again with a fresh copy.
- [Re-Rendering of useEffect](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-re-running-effects-in-development):
  - When Strict Mode is on, React runs an extra setup + cleanup cycle in development for every Effect.
  - This helps reveal subtle bugs that are hard to catch manually.
  - To solve this problem, use a cleanup function.
- [Read more about fixing bugs found by double rendering in development](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development).
