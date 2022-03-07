const Button = (props) => {
  const { text } = props;
  const { handelFunction } = props;
  return <button onClick={handelFunction}>{text}</button>;
};
export default Button;
