import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function CreateArea(props) {
  const [inputs, setInputs] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    event.target.name === "title" &&  setInputs(prev => {
        return {
            title: event.target.value,
            content: prev.content
        }
    })
    event.target.name === "content" && setInputs(prev => {
        return {
            title: prev.title,
            content: event.target.value
        }
    })
  }

  function addNote(event){
    event.preventDefault();
    props.create({
        ...inputs,
        uuid: uuidv4()
    });
    setInputs({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputs.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputs.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
