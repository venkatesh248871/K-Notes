import React, { useState } from 'react';
import Header from "./components/Header";
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import "./styles.css";
import Count from './components/Count';
import Footer from './components/Footer';

export default function App() {
  const[notes,setNotes]=useState([]);
  function addNote(newNote)
  {
    setNotes(prevValue=>{
      return[...prevValue,newNote];
    });

  }
  function deleteNotes(id)
  {
    setNotes(prevValue=>{
      return[...prevValue.filter((note,index)=>
        index !== id)];

    })
  }
  return (

    <div>
      <Header/>
      <Count count={
        notes.length === 0? "0": notes.length} />
      <CreateArea onAdd={addNote}/>
      {notes.map((note,index) =>(
        <Note key={index} id={index} title={note.title} content={note.content}
        onDelete={deleteNotes}
        />
        

      ))}
      <Footer/>
    </div>
  )
}


