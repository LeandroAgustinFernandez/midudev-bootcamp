export const Note = (props) => {
  //   console.table({ props });
  const { userid, id, body, title } = props;
  return (
    <li id={id}>
      <strong>{title} </strong>
      <p>{body}</p>
    </li>
  );
};
// export default Note;
