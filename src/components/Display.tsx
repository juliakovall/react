type DisplayProps = {
  text: string;
};

function Display({ text }: DisplayProps) {
  return <p>{text}</p>;
}

export default Display;
