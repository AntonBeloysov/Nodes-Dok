import React from 'react';

export default function AppCard({
    notes, 
    onAddNote, 
    onDeleteNote, 
    text, 
    onDeleteText, 
    onViewText, 
    VersionNotes}) {
    
    const [textAmount, setTextAmount] = React.useState(1)

    return (
        <div className="row">
            <section>
              <div className="container">
                  <header>
                      <h1 className="title__header">Notes DOK - т</h1>
                      <nav>
                          <ul className="ul__header">
                              <h1>number of notes: {textAmount}</h1>
                              <li className="transition"><button onClick={() => {
                                  onAddNote(); 
                                  onDeleteText();
                                  setTextAmount((prev) => prev + 1)}}>New Note</button></li>
                              <a className="transition" href="https://www.buymeacoffee.com/AntonBelousov">Coffee</a>
                          </ul>
                      </nav>
                  </header>
              </div>
            <hr className="hr__header" />
            </section>
            <section className="section_content__note">
              <div className="container">
                  <h1 className="h1__section__note">{text}</h1>
                  <div className="item_note__card">
                      {notes.map((note) => (
                        <div key={note.id} className="content__note-section">
                            <div className="content__card">
                                <input className="input__card" placeholder="Title" type="text" />
                                <hr className="hr__card" />
                                <textarea placeholder="Text Note" className="textarea__card" cols="30" rows="10"></textarea>
                                <button className="button__card transition" onClick={() => {
                                    onDeleteNote(note.id); 
                                    onViewText();
                                    setTextAmount((prev) => prev - 1)}}>Delete</button>
                            </div>
                        </div>
                      ))}
                  </div>
              </div>
              <hr className="hr__footer"/>
              <footer>
                  <div className="container">
                      <h1 className="title__footer">v{VersionNotes} NDOK</h1>
                  </div>
              </footer>
            </section>
        </div>
    )
}