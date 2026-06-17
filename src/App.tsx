import "./App.css";
import { Heading } from "./components/Heading";

function App() {
  console.log("Hello form the logs");
  // This is a comment in javascript

  const name = "Sören";

  const headings = [
    { text: "Hello World", size: 50 },
    { text: name, size: 100, important: true },
    { text: `Hello ${name}`, size: 50 },
  ];
  /*
  const texts = headings.map(function(h) {
    return h.text;
  })
  */
  const texts = headings.map((h) => h.text);
  console.log(headings);
  console.log(texts);

  return (
    <div>
      {headings.map((h, index) => (
        <Heading
          key={index}
          text={h.text}
          size={h.size}
          important={h.important}
        />
      ))}
    </div>
  );
}

export default App;
