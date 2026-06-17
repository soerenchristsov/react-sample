import "./App.css";
import { Heading } from "./components/Heading";

function App() {
  console.log("Hello form the logs");
  // This is a comment in javascript

  const name = "Sören";

  return (
    <div>
      <Heading text="Hello World" />
      <Heading text={name} size={100} />
      <Heading text={`Hello ${name}`} />
      <div></div>
    </div>
  );
}

export default App;
