//export function Heading(props) {

type HeadingProps = {
  text: string;
  size?: number;
  important?: boolean;
};

export function Heading({ text, size = 50, important = false }: HeadingProps) {
  let color = "blue";
  if (important) {
    color = "red";
  }
  return <h1 style={{ color, fontSize: `${size}px` }}>{text}</h1>;
}
