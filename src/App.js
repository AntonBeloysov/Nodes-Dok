import React from 'react';
import uuid from "react-uuid";
import './styles/style.css';
import AppCard from './components/AppCard.jsx';
var pjson = require('../package.json');

function App() {
  const [text, setText] = React.useState("")

  const [notes, setNotes] = React.useState([1]);

  const onAddNote = () => {
    const newNote = {
      id: uuid()
    }
    setNotes([newNote, ...notes]);
    console.log(notes)
  }

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  }

  const onDeleteText = () => {
    setText("")
  }

  const onViewText = () => {
    if(notes.length === 1) {
      setText("You haven't Notes :(")
    }
    else {
      setText("")
    }
  }

  return (
    <div className="body_container">
      <AppCard
        notes={notes}
        onAddNote={onAddNote} 
        onDeleteNote={onDeleteNote} 
        text={text} 
        onDeleteText={onDeleteText}
        onViewText={onViewText}
        VersionNotes={pjson.version}
      />
    </div>
  );
}

export default App;