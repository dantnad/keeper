import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

const App = () => (
  <div>
    <Header />
    {notes.map((note) => (
      <Note key={note.id} title={note.title} content={note.content} />
    ))}
    <Footer />
  </div>
);

export default App;
