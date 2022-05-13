import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from 'translation-helps-rcl';
import uuid from 'react-uuid';
import { AppContext } from '../../context';
import Main from './Main';
import Sidebar from './Sidebar';
import './App.css';

function Notepad({ classes }) {
  // initial notes array
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  // create an activeNote state
  const [activeNote, setActiveNote] = useState(false);

  const { t } = useTranslation();
  const {
    state: { fontSize },
    actions: { setAppConfig },
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  // add note function
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
  // note delete function
  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };
  // called if there is a change in the body field
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArray);
  };
  // get an active note
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const onClose = () => {
    setAppConfig((prev) => {
      const next = { ...prev };
      for (let k in next) {
        next[k] = next[k].filter((el) => el.i !== 'notepad');
      }

      return next;
    });
  };

  return (
    <Card
      closeable
      onClose={onClose}
      title={t('Notepad')}
      classes={classes}
      id={'notepad'}
      fff
      fontSize={fontSize}
    >
      {/* <ReactEditorJS defaultValue={''} tools={EDITOR_JS_TOOLS} /> */}
      <div className="Notepad">
        <Sidebar
          notes={notes}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote} onUpdateNote={onUpdateNote} />
      </div>
    </Card>
  );
}

export default Notepad;
