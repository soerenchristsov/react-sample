import { Counter } from "../components/common/Counter";
import { Heading } from "../components/Heading";

function Components() {
  console.log("Hello form the logs");
  // This is a comment in javascript

  const name = "React";

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
      <Heading text="Home" />
      {headings.map((h, index) => (
        <Heading
          key={index}
          text={h.text}
          size={h.size}
          important={h.important}
        />
      ))}

      <div style={{ margin: "24px 0" }}>
        <Counter />
      </div>
    </div>
  );
}

export default Components;
