```javascript
// pages/index.js
export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text.</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```