//npm install axios
import { useEffect, useState } from "react";
import { Note } from "./Note";
import { createNote, getAllNotes } from "./services/notes/notesServices";

export const App = (props) => {
  const [notes, setNotes] = useState([]); //El set vuelve a renderizar y vuelve a llamar al fetch y causa un loop infinito
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);
  // const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      //Solo renderiza al iniciar y cuando sucede algun cambio en el parametro que definamos, en este ejemplo newNote
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((res) => res.json())
      //   .then((res) => {
      //     setNotes(res);
      //   });

      getAllNotes().then((res) => {
        setNotes(res);
      });
      // setLoading();
    },
    [
      // newNote
    ]
  );

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const noteToAddToState = {
      userId: 1,
      // id: notes.length + 1,
      title: newNote,
      body: newNote,
    };
    createNote(noteToAddToState)
      .then((res) => {
        setNotes((prevNotes) => prevNotes.concat(res));
      })
      .catch((e) => {
        console.log(e);
      });
    setNewNote("");
    // setNotes([...notes, noteToAddToState]); Otra forma mas potente.
  };

  const handleShowAll = (e) => {
    setShowAll(() => !showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      {/* {loading ? "Cargando..." : ""} */}
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show All"}
      </button>
      <ul>
        {notes
          .filter((note) => {
            return showAll === true ? true : note.important === true;
            // if (showAll === true) return true;
            // return note.important === true;
          })
          .map((item) => (
            <Note key={item.id} {...item} />
          ))}
      </ul>
      <form onSubmit={handleClick}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button>Crear Nota</button>
        {
          // El ultimo boton de un formulario por defecto funciona como submit.
        }
      </form>
    </div>
  );
};
