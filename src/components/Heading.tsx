//export function Heading(props) {

type HeadingProps = {
  text: string;
  size?: number;
};

export function Heading({ text, size = 50 }: HeadingProps) {
  return <h1 style={{ color: "blue", fontSize: `${size}px` }}>{text}</h1>;
}
