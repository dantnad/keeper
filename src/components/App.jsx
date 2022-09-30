import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){
  let [notes, setNotes] = useState([]);

  function createNote(item){
    setNotes((prev) => {
      return [...prev, item]
    })
  }

  function deleteNote(noteId){
    setNotes(notes.filter((note) => {
      return note.uuid != noteId;
    }))
  }

  return (
    <div>
      <Header />
      <CreateArea create={createNote} />
      {notes.map((note, index) => (
        <Note
          key={note.uuid}
          id={note.uuid}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;