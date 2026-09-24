import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
      <span className="counter" style={{ fontSize: "28px", padding: "4px 12px" }}>
        {count}
      </span>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  );
}
